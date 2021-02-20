<template>
  <q-header
    elevated
    class="bg-primary text-white"
  >
    <q-toolbar>
      <div class="col-1">
        <q-btn
          flat
          round
          dense
          icon="west"
          class="q-mr-sm"
        />
      </div>
      <div class="col-10">
        <div class="absolute-center">
          <q-toolbar-title>
            Visit Details
          </q-toolbar-title>
        </div>
      </div>
      <div class="col-1">
        <q-btn
          flat
          round
          dense
          icon="apps"
          class="q-mr-sm"
        />
      </div>
    </q-toolbar>
    <q-toolbar class="q-pa-md">
      <!-- <div class="row"> -->
      <div class="col-3 col-lg-1">
        <q-avatar size="72px">
          <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" /> -->
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
        </q-avatar>
        <div class="text-h6 q-ml-sm">EZ {{ patient.id }}</div>
      </div>
      <div class="col-8 col-lg-4">
        <div class="text-h6">{{ patient.Name }}</div>
        <div class="text-subtitle2">{{ patient.Age}} years</div>
        <div class="text-subtitle2">{{ patient.Gender }}</div>
        <div class="text-weight-regular">{{ patient.Address }}</div>
        <div class="text-weight-regular">{{ patient.Contact_Number}}</div>
      </div>
      <!-- </div> -->
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      patient: {}
    }
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  created () {
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.get(
      `patient/${this.$route.params.patientId}`
    ).then((response) => {
      this.patient = response.data.data
    })
  }
}
</script>
