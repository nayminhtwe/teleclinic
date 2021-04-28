<template>
  <q-page>
    <!-- <profile-header /> -->
    <home-header />
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
    <div class="q-my-sm q-ml-sm">
      <div class="text-h5">Hello {{ getDoctorProfile.name }},</div>
    </div>
    <div class="q-py-sm">
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="text"
          :dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="q-my-sm q-ml-md">
      <div class="text-h6">How can we help you?</div>
    </div>

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
          class="text-black menu-box"
          id="doctors"
          icon="person"
          label="Doctors"
          no-caps
          stack
          @click="alert = true"
          outline
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
          class="text-black menu-box"
          id="clinics"
          icon="apartment"
          label="Clinics"
          no-caps
          stack
          @click="$router.push('charity/clinic')"
          outline
          style="height: 7em; width: 7.5em"
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
          class="text-black menu-box"
          id="ambulances"
          icon="local_shipping"
          label="Ambulances"
          no-caps
          stack
          @click="$router.push('charity/ambulance')"
          outline
          style="height: 7em; width: 7.5em"
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
          class="text-black menu-box"
          id="pharmacy"
          icon="local_pharmacy"
          label="Pharmacy"
          no-caps
          stack
          @click="$router.push('charity/pharmacy')"
          outline
          style="height: 7em; width: 7.5em"
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
          class="text-black menu-box"
          id="labs"
          icon="biotech"
          label="Labs"
          no-caps
          stack
          @click="$router.push('charity/lab')"
          outline
          style="height: 7em; width: 7.5em"
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
          class="text-black menu-box"
          icon="link"
          label="Register"
          stack
          @click="$router.push('add_charity')"
          outline
          style="height: 7em; width: 7.5em"
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
          class="my-card text-center"
          style="width: 10em; border: 1px solid grey;"
        >
          <q-avatar
            size="5em"
            style="border-radius: 1em;"
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
        style="width: 10em; border: 1px solid grey;"
        v-for="patient in visited_patients"
        :key="patient.id"
        @click="patientdetail(patient.patient_id)"
      >
        <q-avatar
          size="5em"
          style="border-radius: 1em;"
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
// import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
import HomeHeader from 'src/layouts/partials/Header/HomeHeader.vue'
export default {
  name: 'Home',
  components: {
    // ProfileHeader,
    HomeHeader
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
      visited_patients: [],
      waiting_patients: []
    }
  },
  created () {
    this.$store.dispatch('doctor/profile')

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
.menu-box {
  height: 7em;
  width: 7.5em;
  border-radius: 5px;
  box-shadow: 3px 3px 1px #b6b5b5, -3px -3px 1px #b6b5b5;
  line-height: 270%;
}

.menu-box >>> .q-icon {
  font-size: 40px;
}

#doctors >>> .q-icon {
  color: green;
}

#clinics >>> .q-icon {
  color: pink;
}

#ambulances >>> .q-icon {
  color: blue;
}

#pharmacy >>> .q-icon {
  color: magenta;
}

#labs >>> .q-icon {
  color: red;
}

.q-btn >>> .block {
  font-size: 14px;
}
</style>
