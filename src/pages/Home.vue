<template>
  <q-page>
    <!-- <profile-header /> -->
    <home-header />
    <q-dialog
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

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
              <q-input
                v-model="patient_gender"
                label="Gender"
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
                Register
              </div>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="q-my-sm q-ml-sm">
      <div
        class="text-h5"
        v-if="getDoctorProfile"
      >Hello {{ getDoctorProfile.name }},</div>
    </div>
    <div class="q-py-sm">
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="text"
          :dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="q-my-sm q-ml-md">
      <div class="text-h6">How can we help you?</div>
    </div>

    <div class="row q-ma-xs text-center">
      <div class="col-4 col-lg-2 q-mb-md">
        <!-- <q-avatar
          font-size="52px"
          color="red"
          text-color="white"
          icon="directions"
        /> -->
        <!-- <q-btn
          flat
          dense
          icon="apps"
        /> -->
        <q-btn
          class="text-black menu-box"
          id="doctors"
          icon="person"
          label="Doctors"
          no-caps
          stack
          @click="treatment"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <!-- <q-avatar
          font-size="52px"
          color="teal"
          text-color="white"
          icon="local_hospital"
        /> -->
        <q-btn
          class="text-black menu-box"
          id="clinics"
          icon="apartment"
          label="Clinics"
          no-caps
          stack
          @click="$router.push('charity/clinic')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <!-- <q-avatar
          font-size="52px"
          color="yellow"
          text-color="white"
          icon="history"
        /> -->
        <q-btn
          class="text-black menu-box"
          id="ambulances"
          icon="local_shipping"
          label="Ambulances"
          no-caps
          stack
          @click="$router.push('charity/ambulance')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <!-- <q-avatar
          font-size="52px"
          color="red"
          text-color="white"
          icon="directions"
        /> -->
        <q-btn
          class="text-black menu-box"
          id="pharmacy"
          icon="local_pharmacy"
          label="Pharmacy"
          no-caps
          stack
          @click="$router.push('charity/pharmacy')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <!-- <q-avatar
          font-size="52px"
          color="teal"
          text-color="white"
          icon="local_hospital"
        /> -->
        <q-btn
          class="text-black menu-box"
          id="labs"
          icon="biotech"
          label="Labs"
          no-caps
          stack
          @click="$router.push('charity/lab')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <!-- <q-avatar
          font-size="52px"
          color="yellow"
          text-color="white"
          icon="history"
        /> -->
        <q-btn
          class="text-black menu-box"
          icon="link"
          label="Register"
          stack
          @click="$router.push('add_charity')"
          outline
        />
      </div>
    </div>
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
          class="text-black doctor-box"
          id="new"
          icon="receipt_long"
          label="New Patients Record"
          no-caps
          stack
          @click="record"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box"
          id="waitings"
          icon="medical_services"
          label="Waiting Patients"
          no-caps
          stack
          @click="$router.push('waitings')"
          outline
        />
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box"
          id="patients"
          icon="home"
          label="My Patients "
          no-caps
          stack
          @click="$router.push('visited')"
          outline
        />
      </div>
    </div>

    <div class="q-my-md q-ml-md">
      <div class="text-h6">For Tele-Consultations</div>
    </div>
    <div class="row q-ma-xs text-center">
      <div class="col-4 col-lg-2 q-mb-md">
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
      </div>
      <div class="col-4 col-lg-2 q-mb-md">
        <q-btn
          class="text-black doctor-box"
          id="donate"
          icon="account_balance_wallet"
          label="Donate"
          no-caps
          stack
          @click="alert = true"
          outline
        />
      </div>
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
      patient_create: 'patient_create',
      patient_name: '',
      patient_age: '',
      patient_gender: '',
      patient_address: '',
      patient_phone: '',
      patient_profile_image: '',
      visited_patients: [],
      waiting_patients: []
    }
  },
  async created () {
    // cordova.plugins.firebase.messaging.getToken().then(function (token) {
    //   console.log('Got device token: ', token)
    // }).catch(error => {
    //   console.log(error)
    // })

    await this.$store.dispatch('doctor/profile')

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`

    if (this.getDoctorProfile.status === '1') {
      this.patient_create = 'patient_create_from_doctor'

      this.$api.get(
        'waiting'
      ).then((response) => {
        this.waiting_patients = response.data.data
      })

      this.$api.get(
        'patients'
      ).then((response) => {
        this.visited_patients = response.data.data
      })
    }
  },
  methods: {
    patientdetail (id) {
      this.$router.push(`/patient/${id}`)
    },

    treatment () {
      if (this.getDoctorProfile.status === 0) {
        this.register = true
      } else {
        this.$router.push('doctor')
      }
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
.menu-box {
  height: 7em;
  width: 7.5em;
  border-radius: 5px;
  box-shadow: 3px 3px 1px #b6b5b5, -3px -3px 1px #b6b5b5;
  line-height: 270%;
}

.doctor-box {
  height: 8.5em;
  width: 7.5em;
  border-radius: 5px;
  box-shadow: 3px 3px 1px #b6b5b5, -3px -3px 1px #b6b5b5;
  line-height: 120%;
}

.menu-box >>> .q-icon {
  font-size: 40px;
}

.doctor-box >>> .q-icon {
  font-size: 30px;
}

#doctors >>> .q-icon {
  color: green;
}

#clinics >>> .q-icon {
  color: pink;
}

#ambulances >>> .q-icon {
  color: blue;
}

#pharmacy >>> .q-icon {
  color: magenta;
}

#labs >>> .q-icon {
  color: red;
}

#new >>> .q-icon {
  color: blue;
}

#waitings >>> .q-icon {
  color: red;
}

#patients >>> .q-icon {
  color: green;
}

#profile >>> .q-icon {
  color: red;
}

#donate >>> .q-icon {
  color: green;
}
.menu-box >>> .block {
  font-size: 14px;
}

.doctor-box >>> .block {
  font-size: 12px;
}
</style>
