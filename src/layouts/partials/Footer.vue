<template>
  <q-footer
    bordered
    class="bg-grey-2 text-white"
  >
    <q-tabs
      no-caps
      active-color="deep-orange-10"
      indicator-color="transparent"
      class="text-grey"
      v-model="tab"
    >
      <q-tab
        name="home"
        flat
        round
        dense
        icon="las la-home"
        class="q-mr-md"
        @click="$router.push('/')"
        label="Home"
      >
        <!-- <q-btn
          flat
          round
          dense
          icon="home"
          class="q-mr-md"
        /> -->
      </q-tab>
      <!-- <q-tab
        name="patients"
        @click="$router.push('/patients')"
      >
        <q-btn
          flat
          round
          dense
          icon="history"
          class="q-mr-md"
        />
      </q-tab> -->
      <q-tab
        name="inbox"
        flat
        round
        dense
        icon="las la-stethoscope"
        class="q-mr-md"
        @click="$router.push('/inbox')"
        label="Consult"
      >
        <q-badge
          color="red"
          floating
          v-if="noti"
        >{{ noti }}</q-badge>
      </q-tab>
      <q-tab
        flat
        round
        dense
        icon="las la-bars"
        class="q-mr-md"
        label="Menu"
      >
        <q-menu fit>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section @click="$router.push('/profile')">
                My Profile
                <!-- <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section> -->
              </q-item-section>
            </q-item>
            <q-separator />
            <div v-if="getDoctorProfile.status === '1'">
              <q-item clickable>
                <q-item-section   @click="$router.push('doctor_wallet')">My Wallet</q-item-section>
              </q-item>
            </div>
            <div v-if="getDoctorProfile.status === '2'">
              <q-item clickable>
                <q-item-section   @click="$router.push('patient_wallet')">My Wallet</q-item-section>
              </q-item>
            </div>
            <q-separator />
            <q-item clickable>
              <q-item-section  @click="$router.push('/favourited')">My favorites</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section  @click="$router.push('/faq')">FAQs</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-tab>
      <!-- <q-tab
        name="profile"
        flat
        round
        dense
        icon="las la-user"
        class="q-mr-md"
        @click="$router.push('/profile')"
        label="Profile"
      >
      </q-tab> -->
    </q-tabs>
  </q-footer>
</template>

<script>
import { mapGetters } from 'vuex'
import Pusher from 'pusher-js' // import Pusher

export default {
  name: 'Footer',
  data () {
    return {
      tab: 'home',
      noti: 0
    }
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken',
      getDoctorProfile: 'doctor/getDoctorProfile'
    })
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
    await this.subscribe()
  },
  methods: {
    async getNoti () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      await this.$api.get(
        'message_unread_count'
      ).then((response) => {
        if (response.data.error_code === '0') {
          this.noti = response.data.noti
        }
      })
    },
    async subscribe () {
      const app = this
      // Start pusher listener
      Pusher.logToConsole = true

      var pusher = new Pusher('836d77ac3f3198d7cf6d', {
        cluster: 'ap1',
        forceTLS: true
      })

      var channel = pusher.subscribe('chatNoti-' + this.getDoctorProfile.app_user_id) // newMessage-[chatting-with-who]-[my-id]

      channel.bind('App\\Events\\ChatNoti', function (data) {
        app.noti = data.noti.unread_count
      })
      // End pusher listener
      await this.getNoti()

      var presence = new Pusher('836d77ac3f3198d7cf6d', {
        cluster: 'ap1',
        forceTLS: true,
        authEndpoint: 'http://188.166.217.32/broadcasting/auth',
        // authEndpoint: 'http://booking.local/broadcasting/auth',
        auth: { headers: { Authorization: `Bearer ${this.getDoctorToken}` } }

      })

      var presenceChannel = presence.subscribe('presence-online')

      presenceChannel.bind('pusher:member_added', async member => {
        this.$root.$emit('pusher_member_added', member)
      })

      presenceChannel.bind('pusher:member_removed', async member => {
        this.$root.$emit('pusher_member_removed', member)
      })
    }
  }

}
</script>
