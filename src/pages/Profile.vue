<template>
  <q-page>
    <profile-header />
    <div>
      <div
        class="q-pa-xs"
        v-if="getDoctorProfile.status === 0"
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
          <div class="col-12">
            <div class="text-h6">Medical Doctor Registration Only</div>
          </div>
          <div class="col-lg-4 col-12">
            <q-input
              v-model="name"
              label="Name"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              v-model="sama_number"
              label="SAMA No."
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
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
            <q-input
              v-model="contact_number"
              label="Phone No."
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
              v-model="email"
              label="Email"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>
          <div class="col-lg-4 col-12">
            <q-input
              v-model="time"
              label="Available Time"
              :rules="[val => !!val || 'Field is required']"
            />
          </div>

          <div class="col-lg-4 col-12">
            <q-input
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
          <div class="col-lg-4 col-12 offset-6 q-my-md">
            <q-checkbox
              left-label
              v-model="hide"
              label="Hide My Info"
            />
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
            style="width: 300px"
            class="text-white"
            rounded
            @click="submit"
          >
            <div class="ellipsis">
              Register
            </div>
          </q-btn>
        </div>
      </div>
    </div>
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
      specializations: []
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
  created () {
    this.$store.dispatch('doctor/profile')

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.get(
      'specialization'
    ).then((response) => {
      this.specializations = response.data.data
    })
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
    async submit () {
      const formData = new FormData()
      formData.append('Name', this.name)
      formData.append('sama_number', this.sama_number)
      formData.append('Qualifications', this.qualifications)
      formData.append('specialization_id', this.specialization.id)
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

      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post('doctor_register', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>
