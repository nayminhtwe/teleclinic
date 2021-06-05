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
          @click="$router.go(-1)"
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
          <img
            :src="getFile(patient.profile_image)"
            v-if="patient.profile_image"
          >
          <img
            src="~assets/patient.png"
            v-else
          />
        </q-avatar>
        <!-- <div class="text-h6 q-ml-sm">EZ {{ patient.id }}</div> -->
        <div class="text-h6 q-ml-sm">EZ {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(patient.id) }}</div>
      </div>
      <div class="col-8 col-lg-4">
        <div class="text-h6">{{ patient.name }}</div>
        <div class="text-subtitle2">{{ patient.age}} years</div>
        <div class="text-subtitle2">{{ patient.gender }}</div>
        <div class="text-weight-regular">{{ patient.address }}</div>
        <div class="text-weight-regular">{{ patient.contact_number}}</div>
      </div>
      <!-- </div> -->
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'

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
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }
  }
}
</script>
