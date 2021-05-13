<template>
  <q-page>
    <profile-header />
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          v-for="message in messages"
          :key="message.id"
          :text="[message.message]"
          :sent="message.sender_id == sender_id"
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
  name: 'Chat',
  components: {
    ProfileHeader
  },
  data () {
    return {
      messages: [],
      sender_id: this.$route.params.user_id
    }
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  created () {
    this.getMessages()
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    popup (charity) {
      this.charity = charity
      this.card = true
    },
    getMessages () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      const formData = new FormData()
      formData.append('sender_id', this.sender_id)
      this.$api.post(
        'messages', formData
      ).then((response) => {
        this.messages = response.data.data
      })
    }
  }
}
</script>

<style scoped>
.border-icon {
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
}
</style>
