<template>
  <q-page>
    <profile-header />
    <!-- <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date
          v-model="model"
          mask="YYYY-MM-DD HH:mm"
          color="purple"
        />
        <q-time
          v-model="model"
          mask="YYYY-MM-DD HH:mm"
          color="purple"
        />
      </div>
    </div> -->
    <div class="q-pa-md">
      <div class="text-h5 q-py-lg">Pick Date & Time</div>
      <q-input
        filled
        v-model="date"
        bg-color="primary"
        label-color="teal-10"
      >
        <template v-slot:prepend>
          <q-icon
            name="event"
            class="cursor-pointer"
          >
            <q-popup-proxy
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="date"
                mask="YYYY-MM-DD HH:mm"
              >
                <div class="row items-center justify-end">
                  <q-btn
                    v-close-popup
                    label="Close"
                    color="primary"
                    flat
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon
            name="access_time"
            class="cursor-pointer"
          >
            <q-popup-proxy
              transition-show="scale"
              transition-hide="scale"
            >
              <q-time
                v-model="date"
                mask="YYYY-MM-DD HH:mm"
              >
                <div class="row items-center justify-end">
                  <q-btn
                    v-close-popup
                    label="Close"
                    color="primary"
                    flat
                  />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <div class="text-h5 q-py-lg">Would you like to receive </div>
      <q-input
        filled
        bottom-slots
        label="Get SMS Notification"
        disable
      >
        <template v-slot:prepend>
          <q-icon name="textsms" />
        </template>

        <template v-slot:append>
          <q-btn
            round
            dense
            flat
            icon="check_circle"
          />
        </template>
      </q-input>
      <q-btn
        class="full-width q-my-lg q-py-xs"
        label="Confirm Appointment"
        text-color="red"
        rounded
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
import moment from 'moment'

export default {
  name: 'Appointment',
  components: {
    ProfileHeader
  },
  data () {
    return {
      //   date: '2019-02-22 21:02',
      date: moment().add(1, 'hours').startOf('hour').format('YYYY-MM-DD HH:mm'),
      doctor_id: this.$route.params.doctor_id
    }
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
  },
  watch: {
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }
  }
}
</script>

<style scoped>
.border-icon {
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
}

.card-box {
  box-shadow: 2px 2px 22px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  padding: 15px;
}

.q-tab {
  border-radius: 20px;
}
</style>
