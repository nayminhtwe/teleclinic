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
        @click="$router.push('/')"
      >
        <q-btn
          flat
          round
          dense
          icon="home"
          class="q-mr-md"
        />
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
        @click="$router.push('/inbox')"
      >
        <q-btn
          flat
          round
          dense
          icon="chat"
          class="q-mr-md"
        />
        <q-badge
          color="red"
          floating
          v-if="noti"
        >{{ noti }}</q-badge>
      </q-tab>
      <q-tab
        name="profile"
        @click="$router.push('/profile')"
      >
        <q-btn
          flat
          round
          dense
          icon="account_circle"
          class="q-mr-md"
        />
      </q-tab>
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
