<template>
  <q-page>
    <!-- <list-header /> -->
    <profile-header />
    <div class="q-pa-md row items-start q-gutter-lg">
        <!-- <div class="col-6 text-h6">Directory</div> -->
        <div class="q-my-sm q-ml-md">
            <div class="text-h6">{{ $t('What are you looking for?') }}</div>
        </div>
    </div>
    <div class="row q-ma-xs text-center">
      <div class="col-6 col-lg-2 q-mb-md">
        <q-btn
          class="menu-box"
          id="doctors"
          icon="fas fa-user-md"
          label="EZ Care Doctors"
          no-caps
          stack
          @click="$router.push('doctor')"
          outline
        />
      </div>
      <div class="col-6 col-lg-2 q-mb-md">
        <q-btn
          class="menu-box"
          id="clinics"
          icon="las la-hospital"
          label="Clinic"
          no-caps
          stack
          @click="$router.push('charity/clinic')"
          outline
        />
      </div>
      <div class="col-6 col-lg-2 q-mb-md">
        <q-btn
          class="menu-box"
          id="ambulances"
          icon="las la-ambulance"
          label="Ambulance"
          no-caps
          stack
          @click="$router.push('charity/ambulance')"
          outline
        />
      </div>
      <div class="col-6 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box"
          id="pharmacy"
          icon="las la-plus-square"
          label="Pharmacy"
          no-caps
          stack
          @click="$router.push('charity/pharmacy')"
          outline
        />
      </div>
      <div class="col-6 col-lg-2 q-mb-md">
        <q-btn
          class="text-black menu-box"
          id="labs"
          icon="las la-heartbeat"
          label="Oxygen"
          no-caps
          stack
          @click="$router.push('charity/lab')"
          outline
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'

export default {
  name: 'Directory',
  components: {
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
      alert: false
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
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
<style scoped>
.menu-box {
  width: 150px;
  height: 90px;
  box-shadow: 2px 2px 22px -5px rgba(230, 217, 217, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  white-space: pre;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.menu-box >>> .q-icon {
  font-size: 40px;
  height: 1.5em;
}

#doctors >>> .q-icon {
  color: #8597e4;
}

#clinics >>> .q-icon {
  color: #ec8686;
}

#ambulances >>> .q-icon {
  color: #79ce7e;
}

#pharmacy >>> .q-icon {
  color: #e28ad0;
}

#labs >>> .q-icon {
  color: #e2b073;
}
</style>
