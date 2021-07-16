<template>
  <q-header
    elevated
    class="bg-primary text-white"
  >
    <q-toolbar class="q-py-md">
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
    </q-toolbar>
    <q-toolbar
      class="q-pa-md"
      inset
    >
      <div class="row">
        <div class="col-9">
          <q-avatar size="72px">
            <img
              :src="getFile(getDoctorProfile.profile_image.profile_picture)"
              v-if="getDoctorProfile.profile_image"
            />
            <img
              src="~assets/ezcare.png"
              v-else
            />
          </q-avatar>
        </div>
        <div class="col-9">
          <div class="text-subtitle1 text-grey-5">Welcome Back</div>
          <div class="text-h5">{{ getDoctorProfile.name }}</div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile'
    })
  },
  async created () {
    if (this.getDoctorProfile === null) {
      await this.$store.dispatch('doctor/profile')
    }
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }
  }
}
</script>
