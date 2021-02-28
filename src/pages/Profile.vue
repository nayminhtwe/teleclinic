<template>
  <q-page>
    <profile-header />
    <div>
      <div class="q-pa-xl">
        <div class="col-lg-6 col-12 q-py-md">
          <q-input
            standout="bg-info text-red"
            :value="getDoctorProfile.Name"
            label="Name"
            bg-color="info"
            label-color="white"
            readonly
          />
        </div>

        <div class="col-lg-6 col-12 q-py-md">
          <q-input
            standout="bg-info text-red"
            :value="getDoctorProfile.Qualifications"
            label="Qualifications"
            bg-color="info"
            label-color="white"
            readonly
          />
        </div>

        <div class="col-lg-6 col-12 q-py-md">
          <q-input
            standout="bg-info text-red"
            :value="getDoctorProfile.Contact_Number"
            label="Contact Number"
            bg-color="info"
            label-color="white"
            readonly
          />
        </div>

        <div class="col-lg-6 col-12 q-py-md">
          <q-input
            standout="bg-info text-red"
            :value="getDoctorProfile.Email"
            label="Email"
            bg-color="info"
            label-color="white"
            readonly
          />
        </div>
        <div
          class="col-lg-6 col-12 q-py-md"
          v-for="other_file in getDoctorProfile.File"
          :key="other_file.id"
        >
          <div class="text-h6">
            {{ other_file.name }}
          </div>
          <img
            :src="getFile(other_file.certificate_file)"
            style="width: 18em"
          />
        </div>
        <div class="q-py-md q-gutter-sm">
          <q-btn
            color="primary"
            style="width: 250px"
            @click="logout"
          >
            <div class="ellipsis">
              Logout
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
export default {
  name: 'Profile',
  data () {
    return {
      name: '',
      qualifications: '',
      contact_number: '',
      email: '',
      files: []
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
      getDoctorProfile: 'doctor/getDoctorProfile'
    })
  },
  created () {
    this.$store.dispatch('doctor/profile')
  },
  methods: {
    getFile (path) {
      return `http://188.166.217.32/${path}`
    },
    logout () {
      this.$store.dispatch('doctor/logout')
      setTimeout(() => {
        this.$router.push('/login/login')
      }, 2000)
    }
  }
}
</script>
