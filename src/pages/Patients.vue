<template>
  <q-page>
    <list-header />
    <div
      class="q-pa-md row items-start q-gutter-lg"
      v-if="getDoctorProfile.status === '1'"
    >
      <div class="col-12 text-h6">All Patients ({{ visited_patients.length }})</div>
      <q-card
        class="my-card text-center"
        style="width: 10em; border: 1px solid grey;"
        v-for="patient in visited_patients"
        :key="patient.id"
        @click="$router.push({ name: 'chat', params: { user_id: patient.app_user_id, user: patient.patient_info } })"
      >
        <q-avatar
          class="q-mt-md"
          size="5em"
          style="border-radius: 1em;"
        >
          <img
            :src="getFile(patient.patient.profile_image)"
            v-if="patient.patient.profile_image"
          >
          <img
            src="~assets/patient.png"
            v-else
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">{{ patient.patient_info.name }}</div>
          <div class="text-weight-regular">{{ patient.patient_info.gender }}, {{ patient.patient_info.age }}</div>
          <div class="text-weight-regular">{{ patient.patient_info.gender }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ListHeader from 'src/layouts/partials/Header/ListHeader.vue'
export default {
  name: 'Home',
  components: {
    ListHeader
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
      visited_patients: []
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    await this.$api.get(
      'all_users'
    ).then((response) => {
      this.visited_patients = response.data.data
    })
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    patientdetail (id) {
      this.$router.push(`/patient/${id}`)
    }
  }
}
</script>
<style scoped>
.q-btn >>> .q-icon {
  font-size: 40px;
  color: purple;
}

.q-btn >>> .block {
  font-size: 12px;
}
</style>
