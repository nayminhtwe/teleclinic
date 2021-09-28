<template>
  <q-page>
    <!-- <list-header /> -->
    <profile-header />
    <div class="q-pa-md row items-start q-gutter-lg">
      <div class="col-6 text-h6">My Patients ({{ visited_patients.length }})</div>
      <div class="col-2 offset-3">
        <q-icon
          size='sm'
          color="red"
          name="dns"
          @click="view='list'"
        />
        <q-icon
          size='sm'
          color="primary"
          name="dashboard"
          @click="view='card'"
        />
      </div>
      <div v-if="view==='card'">
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

          <q-card-section class="q-pt-none" />
        </q-card>
      </div>
      <div v-if="view==='list'">
        <div
          v-for="patient in visited_patients"
          :key="patient.id"
          @click="patientdetail(patient.patient_id)"
        >
          <div class="row col-12">
            <div class="col-3 column justify-center">
              <q-avatar size="60px">
                <img
                  :src="getFile(patient.patient.profile_image)"
                  v-if="patient.patient.profile_image"
                >
                <img
                  src="~assets/patient.png"
                  v-else
                />
              </q-avatar>
            </div>
            <div class="col-6 offset-3">
              <div class="text-h6">{{ patient.patient.name }}</div>
              <div>{{ patient.patient.gender }}, {{ patient.patient.age }} {{ patient.patient.contact_number }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
// import ListHeader from 'src/layouts/partials/Header/ListHeader.vue'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
export default {
  name: 'Home',
  components: {
    // ListHeader
    ProfileHeader
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
      view: 'list',
      visited_patients: [],
      waiting_patients: []
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
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
