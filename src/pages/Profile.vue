<template>
  <q-page style="overflow: hidden;">
    <profile-header />
    <q-dialog
      full-width
      v-model="help_popup"
      persistent
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ help.heading}}</div>
        </q-card-section>

        <q-card-section
          class="q-pt-none"
          v-html="help.body"
        />

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
    <div
      class="q-pa-md"
      v-if="getDoctorProfile.status == 0"
    >
      <q-dialog
        full-width
        v-model="tor_popup"
        persistent
      >
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ tor.heading}}</div>
          </q-card-section>

          <q-card-section
            class="q-pt-none"
            v-html="tor.body"
          />

          <q-card-actions align="right">
            <q-btn
              flat
              label="Cancel"
              color="primary"
              v-close-popup
            />
            <q-btn
              flat
              label="Confrim"
              color="primary"
              @click="submit"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="q-pa-sm">
        <div class="q-gutter-y-xs">
          <q-tabs
            v-model="user_type"
            inline-label
            dense
            active-color="white"
            active-bg-color="red"
          >
            <q-tab
              name="patient"
              label="Patient"
              no-caps
            />
            <q-tab
              name="doctor"
              label="Doctor"
              no-caps
            />
          </q-tabs>
        </div>
      </div>
      <!-- <div class="q-pa-md q-gutter-sm">
        <q-btn
          color="white"
          text-color="black"
          label="Patient"
          @click="register = 0"
        />
        <q-btn
          color="primary"
          label="Doctor"
          @click="register = 1"
        />
      </div> -->

      <div v-if="user_type == 'patient'">
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
          <div class="col-12 q-py-md">
            <div class="text-h6">Patient Registration</div>
          </div>
          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="patient_name"
              label="Name"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
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
              outlined
              v-model="patient_gender"
              label="Gender"
              :options="genders"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="patient_address"
              label="Adress"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
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
      </div>

      <div v-if="user_type == 'doctor'">
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
          <div class="col-12 q-py-md">
            <div class="text-h6">Medical Doctor Registration</div>
          </div>
          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="name"
              label="Name"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="sama_number"
              label="SAMA No."
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="qualifications"
              label="Qualifications"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-select
              v-model="specialization"
              label="Specializations"
              :options="specializations"
              :rules="[val => !!val || 'Field is required']"
              :option-label="(item) => item === null ? null : item.Name"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-select
              multiple
              v-model="prfered_languages"
              use-chips
              stack-label
              label="Language"
              :options="languages"
              :option-label="(item) => item === null ? null : item.language"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="contact_number"
              label="Phone No."
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="email"
              label="Email"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>
          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="time"
              label="Available Time"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              outlined
              v-model="other"
              label="Comment"
            />
          </div>
          <div class="col-12 offset-6 q-my-md">
            <q-file
              borderless
              v-model="profile_image"
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
          <div class="col-12 offset-6 q-my-md">
            <q-file
              borderless
              v-model="sama_or_nrc"
            >
              <template v-slot:prepend>
                <img
                  src="~assets/certificate.png"
                  style="width: 72px"
                  @click.stop
                />
              </template>
            </q-file>
          </div>
        </div>
        <div class="row q-py-md">
          <div class="col-4 offset-2 col-lg-4">
            <div class="text-subtitle1 q-py-sm">
              Hide My Info
            </div>
          </div>
          <div class="col-6 col-lg-4">
            <q-toggle v-model="hide" />
          </div>
        </div>

        <div class="text-h6 q-py-sm">
          Certificates
        </div>

        <div class="col-lg-4 col-12 q-py-md">

          <q-btn
            round
            color="primary"
            icon="add"
            @click="addInput"
          />

        </div>
        <div
          class="row"
          v-for="(file, id) in files"
          :key="id"
        >
          <div class="col-6 col-lg-4">
            <q-input
              v-model="file.name"
              label="Name"
              label-color="white"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>
          <div class="col-6 col-lg-4">
            <q-file
              filled
              bottom-slots
              v-model="file.data"
              label="File"
              label-color="white"
              counter
              :rules="[val => !!val || 'Field is required']"
            >
              <template v-slot:prepend>
                <q-icon
                  name="cloud_upload"
                  color="white"
                  @click.stop
                />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click.prevent="clearInput(id)"
                  class="cursor-pointer"
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
            @click="checkTOR"
          >
            <div class="ellipsis">
              {{ $t('Register') }}
            </div>
          </q-btn>
        </div>
      </div>
    </div>

    <div
      class="q-pa-md"
      v-if="getDoctorProfile.status == 2"
    >
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
        <div class="col-12 q-py-md">
          <div class="text-h6">Patient Profile</div>
        </div>
        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.name"
            label="Name"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.age"
            label="Age"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.gender"
            label="Gender"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.address"
            label="Adress"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.contact_number"
            label="Phone"
            disable
          />
        </div>

        <div class="col-12">
          <img
            :src="getFile(getDoctorProfile.profile_image)"
            v-if="getDoctorProfile.profile_image"
            width="200px"
          >
        </div>

      </div>
    </div>
    <div
      class="q-pa-md"
      v-if="getDoctorProfile.status == 1 || getDoctorProfile.status == 3"
    >
      <q-dialog v-model="doctor_edit">
        <q-card>
          <q-card-section>
            <div class="text-h6">Doctor Profile Edit</div>
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
                  outlined
                  v-model="name"
                  label="Name"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-input
                  outlined
                  v-model="sama_number"
                  label="SAMA No."
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-input
                  outlined
                  v-model="qualifications"
                  label="Qualifications"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-select
                  v-model="specialization"
                  label="Specializations"
                  :options="specializations"
                  :rules="[val => !!val || 'Field is required']"
                  :option-label="(item) => item === null ? null : item.Name"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-select
                  multiple
                  v-model="prfered_languages"
                  use-chips
                  stack-label
                  label="Language"
                  :options="languages"
                  :option-label="(item) => item === null ? null : item.language"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-input
                  outlined
                  v-model="contact_number"
                  label="Phone No."
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-input
                  outlined
                  v-model="email"
                  label="Email"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>
              <div class="col-lg-4 col-12">
                <q-input
                  outlined
                  v-model="time"
                  label="Available Time"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>

              <div class="col-lg-4 col-12">
                <q-input
                  outlined
                  v-model="other"
                  label="Comment"
                />
              </div>
              <div class="col-12">
                <img
                  :src="getFile(getDoctorProfile.profile_image.profile_picture)"
                  v-if="getDoctorProfile.profile_image"
                  width="200px"
                >
              </div>
              <div class="col-12 offset-6 q-my-md">
                <q-file
                  borderless
                  v-model="profile_image"
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
              <!-- <div class="col-12 offset-6 q-my-md">
                <q-file
                  borderless
                  v-model="sama_or_nrc"
                >
                  <template v-slot:prepend>
                    <img
                      src="~assets/certificate.png"
                      style="width: 72px"
                      @click.stop
                    />
                  </template>
                </q-file>
              </div> -->
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Cancel"
              color="primary"
              v-close-popup
            />
            <q-btn
              flat
              label="Edit"
              color="primary"
              @click="update"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
        <div class="col-12">
          <div
            class="text-h6 text-red"
            v-if="getDoctorProfile.status == 3"
          >Please wait Admin Apporoval
          </div>
          <div
            class="text-h6 text-red"
            v-if="getDoctorProfile.status == 1"
          >Doctor Profile
          </div>
        </div>
        <div
          class="col-lg-4 col-12"
          v-if="getDoctorProfile.hide_my_info"
        >
          <q-input
            outlined
            :value="new Intl.NumberFormat('en', { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(getDoctorProfile.id)"
            label="ID"
            disable
          />
        </div>
        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.name"
            label="Name"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.sama_number"
            label="SAMA No."
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.qualifications"
            label="Qualifications"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-select
            outlined
            :value="getDoctorProfile.specialization"
            label="Specializations"
            disable
          />
        </div>

        <div class="col-lg-4 col-12 q-gutter-sm">
          <q-btn
            v-for="language in getDoctorProfile.available_language"
            :key="language.id"
            color="primary"
            size="xs"
            :label="language.language"
          />
          <!-- <p
            v-for="language in getDoctorProfile.available_language"
            :key="language.id"
          >
            {{ language.language }}
          </p> -->
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.contact_number"
            label="Phone No."
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.email"
            label="Email"
            disable
          />
        </div>
        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.available_time"
            label="Available Time"
            disable
          />
        </div>

        <div class="col-lg-4 col-12">
          <q-input
            outlined
            :value="getDoctorProfile.other_option"
            label="Comment"
            disable
          />
        </div>
        <div class="col-12">
          <img
            :src="getFile(getDoctorProfile.profile_image.profile_picture)"
            v-if="getDoctorProfile.profile_image"
            width="200px"
          >
        </div>
      </div>
      <div class="row q-py-md">
        <div class="col-4 offset-2 col-lg-4">
          <div class="text-subtitle1 q-py-sm">
            Notifications
          </div>
        </div>
        <div class="col-6 col-lg-4">
          <q-toggle v-model="noti" />
        </div>
      </div>
      <div class="q-py-md q-gutter-sm">
        <q-btn
          color="red"
          class="text-white full-width"
          rounded
          @click="doctor_profile"
        >
          <div class="ellipsis">
            Edit
          </div>
        </q-btn>
      </div>
    </div>

    <div class="q-py-md q-gutter-sm">
      <q-btn
        color="deep-orange-10"
        class="full-width"
        @click="logout"
      >
        <div class="ellipsis">
          Logout
        </div>
      </q-btn>
    </div>
    <div class="q-gutter-sm">
      <q-btn
        flat
        class="full-width"
        @click="checkHelp"
      >
        <div class="ellipsis">
          {{ $t('Help') }}
        </div>
      </q-btn>
    </div>
    <q-select
      v-model="lang"
      :options="langOptions"
      label="App Language"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 150px"
    />
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
export default {
  name: 'Profile',
  data () {
    return {
      banner: false,
      name: '',
      sama_number: '',
      qualifications: '',
      specialization: '',
      prfered_languages: [],
      contact_number: '',
      email: '',
      time: '',
      other: '',
      files: [
        { name: '', data: '' }
      ],
      profile_image: '',
      sama_or_nrc: '',
      hide: false,
      tor_popup: false,
      tor: {},
      specializations: [],
      languages: [],
      register: '',
      user_type: 'patient',
      genders: ['Male', 'Female', 'Other'],
      patient_name: '',
      patient_age: '',
      patient_gender: '',
      patient_address: '',
      patient_phone: '',
      patient_profile_image: '',
      doctor_edit: false,
      noti: true,
      help_popup: false,
      help: {},
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'mm', label: 'Myanmar' }
      ]
    }
  },
  components: {
    ProfileHeader
  },
  computed: {
    ...mapState({
      message: state => state.doctor.message
    }),
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    await this.$api.get(
      'specialization'
    ).then((response) => {
      this.specializations = response.data.data
    })

    await this.$api.get(
      'languages'
    ).then((response) => {
      this.languages = response.data.data
    })
  },
  watch: {
    noti: function (val) {
      this.$api.post(
        'active_status', { active_status: this.noti }
      ).then((response) => {
        if (response.data.error_code === '0') {
          this.$store.dispatch('doctor/profile')
          this.$q.notify({
            type: 'positive',
            message: response.data.message,
            html: true
          })
        }
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    lang (lang) {
      localStorage.setItem('locale', lang)
      this.$i18n.locale = lang
    }
  },
  methods: {
    addInput () {
      this.files.push({ name: '', data: '' })
    },
    clearInput (id) {
      this.files.splice(id, 1)
    },
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    logout () {
      this.$store.dispatch('doctor/logout')
      setTimeout(() => {
        this.$router.push('/start/start')
      }, 2000)
    },
    patient () {
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
      this.$api.post('patient_create', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$store.dispatch('doctor/profile')
            // this.$q.notify('Your registration is successful. The EZ Care admin team will review your registration. Thank you.')
            this.$q.notify({
              type: 'positive',
              message: 'Your registration is successful. <br />You can now search and talk with EZ care doctors.',
              html: true
            })
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err.response.data)
        })
    },
    async submit () {
      const formData = this.getFormdata()
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post('doctor_register', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$store.dispatch('doctor/profile')
            // this.$q.notify('Your registration is successful. You can now search and talk with EZ care doctors.')
            this.$q.notify({
              type: 'positive',
              message: 'Your registration is successful. <br />The EZ Care admin team will review your registration. <br />Thank you.',
              html: true
            })
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err.response.data)
          this.$q.notify({
            type: 'negative',
            message: err.response.data.message
          })
        })
    },
    async checkTOR () {
      await this.$api.get('terms_of_reference')
        .then((response) => {
          this.tor = response.data.data
        }).catch(err => {
          console.log(err.response.data)
        })
      this.tor_popup = true
    },
    async checkHelp () {
      await this.$api.get('help')
        .then((response) => {
          this.help = response.data.data
        }).catch(err => {
          console.log(err.response.data)
        })
      this.help_popup = true
    },
    async doctor_profile () {
      await this.fetch_doctor()
      this.doctor_edit = true
    },
    async fetch_doctor () {
      this.name = this.getDoctorProfile.name
      this.sama_number = this.getDoctorProfile.sama_number
      this.qualifications = this.getDoctorProfile.qualifications
      this.specialization = this.specializations.filter(s => s.Name === this.getDoctorProfile.specialization)[0]
      this.prfered_languages = this.getDoctorProfile.available_language
      this.contact_number = this.getDoctorProfile.contact_number
      this.email = this.getDoctorProfile.email
      this.time = this.getDoctorProfile.available_time
      this.other = this.getDoctorProfile.other_option
    },
    getFormdata () {
      const formData = new FormData()
      formData.append('Name', this.name)
      formData.append('sama_number', this.sama_number)
      formData.append('Qualifications', this.qualifications)
      formData.append('specialization_id', this.specialization.id)
      for (const language of this.prfered_languages) {
        formData.append('available_language_id[]', language.id)
      }
      formData.append('Contact_Number', this.contact_number)
      formData.append('start_date', this.contact_number)
      formData.append('end_date', this.contact_number)
      formData.append('available_time', this.time)
      formData.append('Email', this.email)
      formData.append('other_option', this.other)
      for (const file of this.files) {
        if (!!file.name && !!file.data) {
          formData.append('certificate_file[]', file.data, file.name)
        }
      }
      formData.append('profile_image', this.profile_image)
      formData.append('SaMa_or_NRC[]', this.sama_or_nrc)
      formData.append('file_name', 'certificate')
      formData.append('hide_my_info', this.hide)

      return formData
    },
    async update () {
      const formData = this.getFormdata()
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post(`doctor_edit/${this.getDoctorProfile.id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$store.dispatch('doctor/profile')
            this.$q.notify({
              type: 'positive',
              message: 'Your Profile is successful updated',
              html: true
            })
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err.response.data)
          this.$q.notify({
            type: 'negative',
            message: err.response.data.message
          })
        })
    }
  }
}
</script>
