<template>
  <q-page>
    <div class="text-heading">
      <div class="e-z-care-m-m row">EZ Care <div style="color: red">MM</div>
      </div>
    </div>

    <div class="date">
      <div class="date1">{{this.current_date}}</div>
    </div>

    <!-- <q-dialog
      v-model="alert"
      full-width
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Donate</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Kpay
          </div>
          <div class="text-subtitle2">
            09971701240 Naw Caroline<br />
          </div>
          <div class="text-subtitle2">
            09256078233 Man Sian Dim<br />
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            KBZ ATM
          </div>
          <div class="text-subtitle2">
            999 307 999 552 54101<br />
          </div>
          <div class="text-subtitle2">
            Man Sian Dim<br />
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            AYA iBanking
          </div>
          <div class="text-subtitle2">
            20021383009 Nung Mun Thawn
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Paypal
          </div>
          <div class="text-subtitle2">
            https://www.paypal.me/ezcaremyanmar
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Wave Pay
          </div>
          <div class="text-subtitle2">
            09256078233
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
    <q-dialog v-model="register">
      <q-card>
        <q-card-section>
          <div class="text-h6">Patient Registration</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row q-gutter-md">
            <q-banner
              inline-actions
              class="text-white bg-red"
              v-if="banner"
            >
              {{ message }}
              <template v-slot:action>
                <q-btn
                  flat
                  color="white"
                  icon="error"
                  @click="banner = false"
                />
              </template>
            </q-banner>
            <div class="col-lg-4 col-12">
              <q-input
                v-model="patient_name"
                label="Name"
                :rules="[val => !!val || 'Field is required']"
              />
            </div>

            <div class="col-lg-4 col-12">
              <q-input
                v-model="patient_age"
                label="Age"
                :rules="[val => !!val || 'Field is required']"
              />
            </div>

            <div class="col-lg-4 col-12">
              <!-- <q-input
                v-model="patient_gender"
                label="Gender"
                :rules="[val => !!val || 'Field is required']"
              /> -->
              <q-select
                v-model="patient_gender"
                label="Gender"
                :options="genders"
                :rules="[val => !!val || 'Field is required']"
              />
            </div>

            <div class="col-lg-4 col-12">
              <q-input
                v-model="patient_address"
                label="Adress"
                :rules="[val => !!val || 'Field is required']"
              />
            </div>

            <div class="col-lg-4 col-12">
              <q-input
                v-model="patient_phone"
                label="Phone"
                :rules="[val => !!val || 'Field is required']"
              />
            </div>
            <div class="col-12 offset-6 q-my-md">
              <q-file
                borderless
                v-model="patient_profile_image"
              >
                <template v-slot:prepend>
                  <img
                    src="~assets/profile_upload.jpg"
                    style="width: 72px"
                    @click.stop
                  />
                </template>
              </q-file>
            </div>

          </div>
          <div class="q-py-md q-gutter-sm">
            <q-btn
              color="red"
              class="text-white full-width"
              rounded
              @click="patient"
            >
              <div class="ellipsis">
                {{ $t('Register') }}
              </div>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div
      class="q-ma-md"
      v-if="getDoctorProfile.hide_my_info"
    >
      <div class="name">Hi, {{ getDoctorProfile.name }} ({{ new Intl.NumberFormat('en', { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(getDoctorProfile.id)}})</div>
    </div>
    <div
      class="q-ma-md"
      v-else
    >
      <div class="name">{{$t('Hi,') }} {{ getDoctorProfile.name }}</div>
    </div>
    <!-- <div class="q-ma-sm">
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="text"
          dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div> -->

    <div class="q-my-sm q-ml-md">
      <div class="text-h6">{{ $t('What are you looking for?') }}</div>
    </div>

    <div class="row q-ma-xs text-center">
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box"
          id="directory"
          icon="las la-search"
          label="Healthcare Directory"
          no-caps
          stack
          @click="$router.push('/directory')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box"
          id="consult-doctor"
          icon="las la-stethoscope"
          label="Consult a doctor"
          no-caps
          stack
          @click="$router.push('doctor')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box"
          id="blogs"
          icon="las la-book-open"
          label="EZ Care Blogs"
          no-caps
          stack
          @click="$router.push('blogs')"
          outline
        />
      </div>
    </div>
    <!-- <profile-header /> -->
    <home-header :images=cover_images />
    <div
      class="q-my-md q-ml-md"
      v-if="getDoctorProfile.status === '1'"
    >
      <div class="text-h6">For Doctors</div>
    </div>
    <div
      class="row q-ma-xs text-center"
      v-if="getDoctorProfile.status === '1'"
    >
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box-2"
          id="new"
          icon="las la-notes-medical"
          label="Create new EMR"
          no-caps
          stack
          @click="record"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box-2"
          id="waitings"
          icon="las la-hourglass-half"
          label="Waiting Patients"
          no-caps
          stack
          @click="$router.push('waitings')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box-2"
          id="patients"
          icon="las la-book"
          label="My Patients "
          no-caps
          stack
          @click="$router.push('visited')"
          outline
        />
      </div>
    </div>

    <div class="row q-my-md q-ml-md">
      <div class="text-h6 col-9">Have you read this?</div>
      <div class="col-3">
        <q-btn
          class="text-grey"
          label="See All"
          no-caps
          stack
          outline
          @click="$router.push('blogs')"
        />
      </div>
    </div>
    <div class="row q-pa-md q-gutter-sm">
      <div class="col">
        <img
          :src="getFile(blog_last_record.image)"
          v-if="blog_last_record.image != null"
          style="height: 150px; max-width: 150px"
        />
        <img
          src="~assets/ezcare.png"
          v-else
          style="height: 150px; max-width: 150px"
        />
      </div>
      <div class="col">
        <div class="blog-heading" v-html="blog_last_record.heading"></div>
        <div class="blog-body-trim" v-html="blog_last_record.body_trim"></div>
        <div>
          <q-btn
            color="deep-orange-10"
            dense
            round
            flat
            @click="blogdetail(blog_last_record.id)"
            label="Read full article >"
            no-caps
          ></q-btn>
        </div>
      </div>
    </div>

    <!-- <div>
      <q-dialog v-model="blog_popup" full-width persistent>
        <q-card>
          <q-card-section>
            <img
              :src="getFile(this.blog_last_record.image)"
              v-if="this.blog_last_record.image != null"
              style="height: 200px; width: 100%"
            />
            <img
              src="~assets/ezcare.png"
              v-else
              style="height: 140px; max-width: 150px"
            />
            <div class="text-h6" style="padding: 5px 0" v-html="this.blog_last_record.heading">
            </div>
            <q-separator/>
            <div class="row q-gutter-sm">
              <div class="col row" style="padding: 10px 0">
                <q-icon class="fas fa-edit"></q-icon>
                <div> By Admin</div>
              </div>
              <div class="col row" style="padding: 10px 0">
                <q-icon class="fas fa-calendar-alt"></q-icon>
                <div>{{this.blog_last_record.created_at}}</div>
              </div>
            </div>
            <div class="text-h7" style="padding: 5px 0" v-html="this.blog_last_record.body">
            </div>
          </q-card-section>
          <q-card-actions align="right">
              <q-btn
                flat
                label="Ok"
                color="primary"
                v-close-popup
              />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div> -->

    <div class="q-my-md q-ml-md">
      <div class="text-h6">{{ $t('Get involved?') }}</div>
    </div>
    <div class="row q-ma-xs text-center">
      <div class="col-6 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box-2"
          id="donate"
          icon="las la-wallet"
          label="Donate"
          no-caps
          stack
          @click="$router.push('donation')"
          outline
        />
      </div>
      <div class="col-3 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box-2"
          id="register_ch"
          icon="las la-briefcase-medical"
          label="Register Charity Works"
          no-caps
          stack
          @click="$router.push('add_charity')"
          outline
        />
      </div>
      <!-- <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box"
          id="profile"
          icon="manage_accounts "
          label="My EZ Care"
          no-caps
          stack
          @click="$router.push('favourited')"
          outline
        />
      </div> -->
      <!-- <div
        class="col-4 col-lg-2 q-mb-md"
        v-if="getDoctorProfile.status === '1'"
      >
        <q-btn
          class="text-black doctor-box"
          id="wallet"
          icon="fas fa-wallet"
          label="My Wallet"
          no-caps
          stack
          @click="$router.push('doctor_wallet')"
          outline
        />
      </div>
      <div
        class="col-4 col-lg-2 q-mb-md"
        v-if="getDoctorProfile.status === '2'"
      >
        <q-btn
          class="text-black doctor-box"
          id="wallet"
          icon="fas fa-wallet"
          label="My Wallet"
          no-caps
          stack
          @click="$router.push('patient_wallet')"
          outline
        />
      </div> -->

    </div>
    <!-- <div
      class="q-pa-md row items-start q-gutter-lg"
      v-if="getDoctorProfile.status === '1'"
    >
      <div class="col-12 text-h6">Patients In Waiting Room ({{ waiting_patients.length }})</div>
      <div
        v-for="patient in waiting_patients"
        :key="patient.id"
        @click="patientdetail(patient.patient_id)"
      >
        <q-card
          class="my-card text-center"
          style="width: 10em; border: 1px solid grey;"
        >
          <q-avatar
            size="5em"
            style="border-radius: 1em;"
          >
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
          </q-avatar>

          <q-card-section>
            <div class="text-weight-regular">{{ patient.patient.name }}</div>
            <div class="text-weight-regular">{{ patient.patient.gender }}, {{ patient.patient.age }}</div>
            <div class="text-weight-regular">{{ patient.patient.contact_number }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-lg"
      v-if="getDoctorProfile.status === '1'"
    >
      <div class="col-12 text-h6">Your Patients ({{ visited_patients.length }})</div>
      <q-card
        class="my-card"
        style="width: 10em; border: 1px solid grey;"
        v-for="patient in visited_patients"
        :key="patient.id"
        @click="patientdetail(patient.patient_id)"
      >
        <q-avatar
          size="5em"
          style="border-radius: 1em;"
        >
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">{{ patient.patient.name }}</div>
          <div class="text-weight-regular">{{ patient.patient.gender }}, {{ patient.patient.age }}</div>
          <div class="text-weight-regular">{{ patient.patient.contact_number }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div> -->
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
// import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
import HomeHeader from 'src/layouts/partials/Header/HomeHeader.vue'
import { constantes } from 'src/boot/constantes.js'
import { date } from 'quasar'

export default {
  name: 'Home',
  components: {
    // ProfileHeader,
    HomeHeader
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  data () {
    return {
      alert: false,
      register: false,
      genders: ['Male', 'Female', 'Other'],
      text: '',
      banner: '',
      message: '',
      patient_create: 'patient_create',
      patient_name: '',
      patient_age: '',
      patient_gender: '',
      patient_address: '',
      patient_phone: '',
      patient_profile_image: '',
      visited_patients: [],
      waiting_patients: [],
      cover_images: [],
      current_date: '',
      blog_last_record: '',
      blog_popup: false
    }
  },
  async created () {
    // cordova.plugins.firebase.messaging.getToken().then(function (token) {
    //   console.log('Got device token: ', token)
    // }).catch(error => {
    //   console.log(error)
    // })

    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`

    await this.$api.get(
      'cover_images'
    ).then((response) => {
      console.log(response)
      this.cover_images = response.data.data
    })

    if (this.getDoctorProfile.status === '1') {
      this.patient_create = 'patient_create_from_doctor'

      await this.$api.get(
        'waiting'
      ).then((response) => {
        this.waiting_patients = response.data.data
      })

      await this.$api.get(
        'patients'
      ).then((response) => {
        this.visited_patients = response.data.data
      })
    }

    const timeStamp = Date.now()
    this.current_date = date.formatDate(timeStamp, 'dddd, DD MMM')

    await this.$api.get(
      'blog_last_record'
    ).then((response) => {
      this.blog_last_record = response.data.data
    })
  },
  methods: {
    patientdetail (id) {
      this.$router.push(`/patient/${id}`)
    },

    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },

    blogdetail (id) {
      this.$router.push(`/blog/${id}`)
    },

    // async readBlog () {
    //   await this.$api.get(
    //     'blog_last_record'
    //   ).then((response) => {
    //     this.blog_last_record = response.data.data
    //   })
    //   this.blog_popup = true
    // },

    treatment () {
      // if (this.getDoctorProfile.status === 0) {
      //   this.register = true
      // } else {
      //   this.$router.push('doctor')
      // }
      this.$router.push('doctor')
    },

    record () {
      if (this.getDoctorProfile.status === '1') {
        this.register = true
      }
    },
    async patient () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      const formData = new FormData()
      formData.append('name', this.patient_name)
      formData.append('age', this.patient_age)
      formData.append('gender', this.patient_gender)
      formData.append('address', this.patient_address)
      formData.append('contact_number', this.patient_phone)
      if (this.patient_profile_image) {
        formData.append('profile_image', this.patient_profile_image)
      }
      await this.$api.post(this.patient_create, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$store.dispatch('doctor/profile')
            this.register = false
          }
        }).catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>
<style scoped>
.text-heading {
  padding: 20px 18px;
}
.e-z-care-m-m {
  width: auto; /* 167px */
  height: auto; /* 29px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #022033;
  font-size: 24px;
  letter-spacing: 0.7px;
  line-height: 1.2;
}
.date {
  padding: 0 18px;
}
.date1 {
  width: auto; /* 112px */
  height: auto; /* 19px */
  overflow: visible;
  white-space: pre;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #969696;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.name {
  width: auto; /* 233px */
  height: auto; /* 38px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 32px;
  letter-spacing: 0px;
  line-height: 1.2;
}
/* .menu-box {
  height: 8.5em;
  width: 7.5em;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 10px;
  line-height: 120%;
} */

.menu-box {
  width: 100px;
  height: 132px;
  box-shadow: 2px 2px 22px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;

}
.menu-box-2 {
  width: 162px;
  height: 132px;
  box-shadow: 2px 2px 22px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
}
.doctor-box {
  height: 8.5em;
  width: 7.5em;
  /* border-radius: 5px;
  box-shadow: 3px 3px 1px #b6b5b5, -3px -3px 1px #b6b5b5; */
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 10px;
  line-height: 120%;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 15px;
  letter-spacing: 0px;
  /* line-height: 1.2; */
  text-align: center;
}

.doctor-box-2 {
  height: 8.5em;
  width: 7.5em;
  /* border-radius: 5px;
  box-shadow: 3px 3px 1px #b6b5b5, -3px -3px 1px #b6b5b5; */
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 10px;
  line-height: 120%;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 15px;
  letter-spacing: 0px;
  text-align: center;
}

.blog-heading {
  width: auto; /* 133px */
  height: auto; /* 19px */
  overflow: visible;
  /* white-space: pre; */
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.blog-body-trim {
  width: auto; /* 183px */
  height: auto; /* 77px */
  /* white-space: pre; */
  overflow: visible;
  padding-top: 5px;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #969696;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
}

.read-full-article_ {
  width: auto; /* 162px */
  height: auto; /* 19px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #cd3700;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
}

.menu-box >>> .q-icon {
  font-size: 40px;
  height: 2em;
}

.menu-box-2 >>> .q-icon {
  font-size: 40px;
  height: 2em;
}

.doctor-box >>> .q-icon {
  font-size: 30px;
}

.doctor-box-2 >>> .q-icon {
  font-size: 40px;
  height: 2em;
}

#directory >>> .q-icon {
  color: green;
}

#consult-doctor >>> .q-icon {
  color: orangered;
}

#blogs >>> .q-icon {
  color: purple;
}

#register_ch >>> .q-icon {
  color: green;
}

#new >>> .q-icon {
  color: rgb(126, 72, 72);
}

#waitings >>> .q-icon {
  color: rgb(13, 176, 240);
}

#patients >>> .q-icon {
  color: rgb(82, 10, 163);
}

#profile >>> .q-icon {
  color: red;
}

#donate >>> .q-icon {
  color: purple;
}

#wallet >>> .q-icon {
  color: yellowgreen;
}

.menu-box >>> .block {
  font-size: 14px;
}

.menu-box-2 >>> .block {
  font-size: 15px;
}

.doctor-box >>> .block {
  font-size: 14px;
  line-height: 300%;
}

.doctor-box-2 >>> .block {
  font-size: 14px;
  line-height: 150%;
}
</style>
