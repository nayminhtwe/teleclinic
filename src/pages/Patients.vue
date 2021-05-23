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
        @click="$router.push({ name: 'chat', params: { user_id: patient.app_user_id, user: patient.patient_info } })"
      >
        <q-avatar
          size="5em"
          style="border-radius: 1em;"
        >
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">{{ patient.name }}</div>
          <!-- <div class="text-weight-regular">{{ patient.Gender }}, {{ patient.Age }}</div>
          <div class="text-weight-regular">{{ patient.Contact_Number }}</div> -->
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
      visited_patients: []
    }
  },
  created () {
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.get(
      'all_users'
    ).then((response) => {
      this.visited_patients = response.data.data
    })
  },
  methods: {
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
