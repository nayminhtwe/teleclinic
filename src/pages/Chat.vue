<template>
  <q-page>
    <chat-header />
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <div
          v-for="message in messages"
          :key="message.id"
        >
          <q-chat-message
            :text="[message.message]"
            :sent="message.sender_id != sender_id"
            :bg-color="message.sender_id != sender_id ? 'blue-grey-6' : 'red-4'"
            :text-color="message.sender_id != sender_id ? 'white' : 'black'"
            v-if="message.type === 0"
          />

          <q-chat-message
            :sent="message.sender_id != sender_id"
            :bg-color="message.sender_id != sender_id ? 'blue-grey-6' : 'red-4'"
            :text-color="message.sender_id != sender_id ? 'white' : 'black'"
            v-else
          >
            <figure>
              <q-zoom
                background-color="blue-grey-1"
                scale
              >
                <img
                  :src="getFile(message.message)"
                  width="200px"
                  class="my-image"
                />
              </q-zoom>
              <!-- <figcaption>This is the "figcaption"</figcaption> -->
            </figure>
          </q-chat-message>
        </div>
        <div class="q-py-xl" />

        <div
          class="row q-pt-sm justify-center absolute-bottom"
          id="chat-input"
        >
          <div class="col-2">
            <q-file
              borderless
              v-model="file"
            >
              <template v-slot:before>
                <q-icon
                  name="attach_file"
                  @click.stop
                />
              </template>
            </q-file>
          </div>

          <div class="col-9 q-mt-sm">
            <q-input
              borderless
              bottom-slots
              v-model="text"
              label="Messages"
              maxlength="120"
              dense="dense"
              :readonly="!!file"
            >

              <!-- <template v-slot:hint>
                Field hint
              </template> -->

              <template v-slot:after>
                <q-btn
                  round
                  dense
                  flat
                  icon="send"
                  @click="send"
                />
              </template>
            </q-input>
          </div>
        </div>

        <!-- <q-input
          filled
          bottom-slots
          v-model="text"
          label="Messages"
          counter
          maxlength="12"
          :dense="dense"
          @keyup.enter.native="sendMessage()"
        >

          <template v-slot:hint>
            Field hint
          </template>

          <template v-slot:after>
            <q-btn
              round
              dense
              flat
              icon="send"
              @click="sendMessage()"
            />
          </template>
        </q-input>

        <q-file
          filled
          bottom-slots
          v-model="file"
          label="File"
          counter
        >
          <template v-slot:prepend>
            <q-icon
              name="close"
              @click.stop="file = null"
              class="cursor-pointer"
            />

          </template>
          <template v-slot:after>
            <q-icon
              name="send"
              @click.stop
              @click="sendFile()"
            />
          </template>

          <template v-slot:hint>
            Field hint
          </template>
        </q-file> -->

      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ChatHeader from 'src/layouts/partials/Header/ChatHeader.vue'
import Pusher from 'pusher-js' // import Pusher

export default {
  name: 'Chat',
  components: {
    ChatHeader
  },
  data () {
    return {
      text: '',
      file: '',
      messages: [],
      type: 0,
      sender_id: this.$route.params.user_id
    }
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken',
      getDoctorProfile: 'doctor/getDoctorProfile'
    })
  },
  async created () {
    await this.$store.dispatch('doctor/profile')
    this.subscribe()
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    getMessages () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      // const formData = new FormData()
      // formData.append('sender_id', this.sender_id)
      this.$api.post(
        'messages', { sender_id: this.sender_id }
      ).then((response) => {
        this.messages = response.data.data
      })
    },
    subscribe () {
      this.$store.dispatch('doctor/profile')
      const app = this
      // Start pusher listener
      Pusher.logToConsole = true

      var pusher = new Pusher('836d77ac3f3198d7cf6d', {
        cluster: 'ap1',
        forceTLS: true
      })

      var channel = pusher.subscribe('newMessage-' + this.sender_id + '-' + this.getDoctorProfile.app_user_id) // newMessage-[chatting-with-who]-[my-id]

      channel.bind('App\\Events\\MessageSent', function (data) {
        app.messages.push(data.message)

        app.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        app.$api.post(
          'message_receive', { sender_id: this.sender_id }
        ).then((response) => {
          this.messages = response.data.data
        })
      })
      // End pusher listener
      this.getMessages()
    },
    sendMessage () {
      if (this.text !== '') {
        this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        this.$api.post('messages/send', {
          receiver_id: this.sender_id,
          message: this.text,
          type: this.type
        }).then((resp) => {
          this.messages.push(resp.data)
          this.text = ''
          this.type = 0
        })
      }
    },
    send () {
      if (this.file !== '') {
        const formData = new FormData()
        formData.append('file', this.file)

        this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        this.$api.post('file_upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
          if (response.data.error_code === '0') {
            this.file = ''
            this.text = response.data.file
            this.type = 1
            this.sendMessage()
          }
        })
      }

      this.sendMessage()
    }
  }
}
</script>

<style scoped>
.border-icon {
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
}
#chat-input {
  border: 1px solid red;
  border-radius: 3em;
}
.my-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>
