<template>
  <q-page>
    <profile-header />
    <q-dialog
      v-model="alert"
      full-width
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Success</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ this.message }}
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
    <q-dialog
      v-model="card"
      full-width
    >
      <q-card class="my-card">
        <div class="row q-pa-xs">
          <div class="col-3">
            <q-avatar
              size="4em"
              rounded
            >
              <img
                :src="getFile(charity.profile_image.profile_picture)"
                v-if="charity.profile_image"
              >
              <img
                src="~assets/ezcare.png"
                v-else
              >
            </q-avatar>
          </div>
          <div class="col-7">
            <div
              class="col text-subtitle1 ellipsis"
              v-if="!charity.hide_my_info"
            >
              {{ charity.name }}
            </div>
            <div
              class="col text-subtitle1 ellipsis"
              v-else
            >
              EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(charity.id) }}
            </div>
            <div>Hello</div>
          </div>
          <div class="col-2">
            <q-btn
              round
              :color="charity.favorite_status ? 'primary' : 'black'"
              icon="favorite"
              class="absolute"
              size="md"
              @click="favourite(charity.id)"
            />
          </div>
        </div>
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-card-section class="q-gutter-xs">
              <div
                class="text-subtitle2"
                v-if="!charity.hide_my_info"
              >
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="blue"
                />
                {{ charity.name }}
              </div>
              <div
                class="text-subtitle2"
                v-else
              >
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="blue"
                />
                EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(charity.id) }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="blue"
                />
                {{ charity.specialization }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="blue"
                />
                {{ charity.qualifications }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="blue"
                />
                <template v-for="language in charity.available_language">
                  {{ language.language }}
                </template>
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="blue"
                />
                {{ charity.available_time }}
              </div>
            </q-card-section>
          </q-card>
        </div>
        <q-card-actions>
          <div class="col column items-center">
            <q-btn
              v-if="getDoctorProfile.status == 2"
              v-close-popup
              color="primary"
              label="Message"
              size="md"
              @click="$router.push({ name: 'chat', params: { user_id: charity.app_user_id, user: charity } })"
            />
            <q-btn
              v-if="getDoctorProfile.status == 0"
              v-close-popup
              color="primary"
              label="Message"
              size="md"
              @click="register = true"
            />
          </div>
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
    <div class="q-pa-sm">
      <div class="q-gutter-y-xs">
        <q-tabs
          v-model="tab"
          inline-label
          dense
          active-color="white"
          active-bg-color="red"
        >
          <q-tab
            name=""
            :label="$t('All')"
            no-caps
          />
          <q-tab
            v-for="specialization in specializations"
            :key="specialization.id"
            :name="specialization.Name"
            :label="$t(specialization.Name)"
            no-caps
          />
        </q-tabs>
      </div>
    </div>
    <!-- <div class="q-py-lg">
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="search"
          dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div> -->
    <div class="q-pa-xs q-gutter-md">
      <div
        v-for="charity in charities"
        :key="charity.id"
      >
        <div class="row col-12">
          <div
            class="col-3 column justify-center"
            @click="popup(charity)"
          >
            <q-avatar size="60px">
              <img
                :src="getFile(charity.profile_image.profile_picture)"
                v-if="charity.profile_image"
              />
              <!-- <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                v-else
              /> -->
              <img
                src="~assets/ezcare.png"
                v-else
              />
            </q-avatar>
          </div>
          <div
            class="col-7 column justify-center"
            @click="popup(charity)"
          >
            <div
              class="text-h6"
              v-if="!charity.hide_my_info"
            >{{ charity.name }}</div>
            <div
              class="text-h6"
              v-else
            >EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(charity.id) }}</div>
            <!-- <div>{{ charity.address }}</div> -->
          </div>
          <div class="col-2 column justify-center">
            <q-icon
              name="favorite"
              class="border-icon text-white"
              :class="charity.favorite_status ? 'text-black' : 'text-white'"
              size="md"
              @click="favourite(charity.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'

export default {
  name: 'Doctor',
  components: {
    ProfileHeader
  },
  data () {
    return {
      banner: false,
      alert: false,
      card: false,
      register: false,
      charity: {},
      charities: [],
      genders: ['Male', 'Female', 'Other'],
      patient_create: 'patient_create',
      patient_name: '',
      patient_age: '',
      patient_gender: '',
      patient_address: '',
      patient_phone: '',
      patient_profile_image: '',
      search: '',
      message: '',
      specializations: [],
      tab: ''
    }
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  watch: {
    tab: function (val) {
      this.getDoctor()
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    this.getDoctor()

    await this.$api.get(
      'specialization_has_doctor'
    ).then((response) => {
      this.specializations = response.data.data
    })
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    popup (charity) {
      this.charity = charity
      this.card = true
    },
    favourite (id) {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post(
        `favorite_doctor/${id}`
      ).then((response) => {
        this.message = response.data.message
        // this.alert = true
        this.getDoctor()
        if (this.charity.id === id) this.charity.favorite_status = !this.charity.favorite_status
      })
    },
    getDoctor () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.get(
        `doctors?specialization=${this.tab}`
      ).then((response) => {
        this.charities = response.data.data
      })
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
.border-icon {
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
}
</style>
