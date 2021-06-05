<template>
  <q-page>
    <list-header />
    <div class="q-pa-md row items-start q-gutter-lg">
      <div class="col-12 text-h6">Your Patients ({{ visited_patients.length }})</div>
      <q-card
        class="my-card text-center"
        style="width: 10em; border: 1px solid grey;"
        v-for="patient in visited_patients"
        :key="patient.id"
        @click="patientdetail(patient.patient_id)"
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
          <div class="text-weight-regular">{{ patient.patient.name }}</div>
          <div class="text-weight-regular">{{ patient.patient.gender }}, {{ patient.patient.age }}</div>
          <div class="text-weight-regular">{{ patient.patient.contact_number }}</div>
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
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  data () {
    return {
      alert: false,
      visited_patients: [],
      waiting_patients: []
    }
  },
  created () {
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
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
