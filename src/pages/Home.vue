<template>
  <q-page>
    <list-header />
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Sorry</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          This features will add soon. We will add in next update
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
          class="text-black"
          icon="person"
          label="Doctors"
          stack
          @click="alert = true"
          color="grey-3"
          style="height: 5rem; width: 7.5em"
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
          class="text-black"
          icon="apartment"
          label="Clinics"
          stack
          @click="alert = true"
          color="grey-3"
          style="height: 5rem; width: 7.5em"
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
          class="text-black"
          icon="local_shipping"
          label="Ambulances"
          stack
          @click="alert = true"
          color="grey-3"
          style="height: 5rem; width: 7.5em"
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
          class="text-black"
          icon="local_pharmacy"
          label="Pharmacy"
          stack
          @click="alert = true"
          color="grey-3"
          style="height: 5rem; width: 7.5em"
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
          class="text-black"
          icon="biotech"
          label="Lab"
          stack
          @click="alert = true"
          color="grey-3"
          style="height: 5rem; width: 7.5em"
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
          class="text-black"
          icon="link"
          label="connect"
          stack
          @click="alert = true"
          color="grey-3"
          style="height: 5rem; width: 7.5em"
        />
      </div>
    </div>
    <div class="q-pa-md row items-start q-gutter-lg">
      <div class="col-12 text-h6">Patients In Waiting Room ({{ waiting_patients.length }})</div>
      <div
        v-for="patient in waiting_patients"
        :key="patient.id"
        @click="patientdetail(patient.patient_id)"
      >
        <q-card
          class="my-card"
          style="width: 10em"
        >
          <q-avatar
            size="5em"
            rounded
          >
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
          </q-avatar>

          <q-card-section>
            <div class="text-weight-regular">{{ patient.patient.Name }}</div>
            <div class="text-weight-regular">{{ patient.patient.Gender }}, {{ patient.patient.Age }}</div>
            <div class="text-weight-regular">{{ patient.patient.Contact_Number }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-md row items-start q-gutter-lg">
      <div class="col-12 text-h6">Your Patients ({{ visited_patients.length }})</div>
      <q-card
        class="my-card"
        style="width: 10em"
        v-for="patient in visited_patients"
        :key="patient.id"
        @click="patientdetail(patient.patient_id)"
      >
        <q-avatar
          size="5em"
          rounded
        >
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">{{ patient.patient.Name }}</div>
          <div class="text-weight-regular">{{ patient.patient.Gender }}, {{ patient.patient.Age }}</div>
          <div class="text-weight-regular">{{ patient.patient.Contact_Number }}</div>
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
