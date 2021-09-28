<template>
  <q-page>
    <chat-header :online=online />
    <q-dialog
      v-model="dialog"
      seamless
      position="bottom"
      full-width
    >
      <q-card>

        <q-card-section>
          <div class="q-py-md q-ml-lg">
            <q-rating
              v-model="rating"
              size="3.5em"
              color="green-5"
              icon="star_border"
            />
          </div>
          <div class="q-py-md">
            <q-btn
              color="primary"
              class="full-width"
              label="Delete"
              @click="deleteMessage"
            />
          </div>

          <div class="q-py-md">
            <q-btn
              color="primary"
              class="full-width"
              label="Cancel"
              @click="dialog = false"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <div
          class="row"
          v-for="message in messages"
          :key="message.id"
        >
          <div class="col-11">
            <q-chat-message
              :text="[message.message]"
              :sent="message.sender_id != sender_id"
              :stamp="moment(message.created_at).format('D-M H:M')"
              :bg-color="message.sender_id != sender_id ? 'blue-grey-6' : 'red-4'"
              :text-color="message.sender_id != sender_id ? 'white' : 'black'"
              v-touch-hold.mouse="handleHold"
              v-if="message.type === 0"
              class="burmese"
            ></q-chat-message>

            <q-chat-message
              :sent="message.sender_id != sender_id"
              :stamp="moment(message.created_at).format('D-M H:M')"
              :bg-color="message.sender_id != sender_id ? 'blue-grey-6' : 'red-4'"
              :text-color="message.sender_id != sender_id ? 'white' : 'black'"
              v-touch-hold.mouse="handleHold"
              v-if="message.type === 1"
            >
              <figure>
                <q-zoom
                  background-color="blue-grey-1"
                  restore-on-scroll
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
            <q-chat-message
              :sent="message.send_id != sender_id"
              :stamp="moment(message.created_at).format('D-M H:M')"
              :bg-color="message.sender_id != sender_id ? 'blue-grey-6' : 'red-4'"
              :text-color="message.sender_id != sender_id ? 'white' : 'black'"
              v-touch-hold.mouse="handleHold"
              v-if="message.type === 2"
            >
              <video
                controls
                width="200px"
                :src="getFile(message.message)"
              />
            </q-chat-message>
            <q-chat-message
              :sent="message.sender_id != sender_id"
              :stamp="moment(message.created_at).format('D-M H:M')"
              :bg-color="message.sender_id != sender_id ? 'blue-grey-6' : 'red-4'"
              :text-color="message.sender_id != sender_id ? 'white' : 'black'"
              v-touch-hold.mouse="handleHold"
              v-if="message.type === 3"
            >
              <audio
                controls
                style="width: 200px;"
                :src="getFile(message.message)"
              />
            </q-chat-message>
          </div>
          <div
            class="col-1"
            v-if="dialog"
          >
            <q-checkbox
              v-model="selection"
              :val="message.id"
              color="red"
              v-if="message.sender_id != sender_id"
            />
          </div>
        </div>
        <div class="q-py-sm" />

        <div
          class="row justify-center items-center q-py-xs"
          id="chat-input"
        >
          <div class="col-1">
            <q-icon
              name="mic"
              size="sm"
              color="red"
              @click="record()"
            />
            <!-- <q-file
              borderless
              v-model="file"
              dense
            >
              <template v-slot:before>
                <q-icon
                  name="attach_file"
                  @click.stop
                />
              </template>
            </q-file> -->
          </div>
          <div class="col-2">
            <q-file
              borderless
              v-model="file"
              dense
            >
              <template v-slot:before>
                <q-icon
                  name="attach_file"
                  @click.stop
                />
              </template>
            </q-file>
          </div>

          <div class=" col-7">
            <q-input
              borderless
              v-model="text"
              label="Messages"
              maxlength="1500"
              dense="dense"
              ref="message"
              autogrow
              @keyup.enter="onEnter"
              :readonly="!!file"
            >

              <!-- <template v-slot:hint>
                Field hint
              </template> -->

              <!-- <template v-slot:after>
                <q-btn
                  round
                  dense
                  flat
                  disable
                  icon="send"
                  @click="send"
                  v-if="sending"
                />
                <q-btn
                  round
                  dense
                  flat
                  icon="send"
                  @click="send"
                  v-else
                />
              </template> -->
            </q-input>
          </div>
          <div class="col-1">
            <q-icon
              name="send"
              size="sm"
              v-if="sending"
            />
            <q-icon
              name="send"
              size="sm"
              @click="send"
              v-else
            />
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
    <q-page-sticky
      v-if="btnStop"
      position="bottom-right"
      :offset="[15, 18]"
      style="z-index: 10000"
    >
      <q-btn
        fab
        icon="delete"
        color="primary"
        @click="cancelRecord()"
      />
      <q-btn
        fab
        icon="stop"
        color="negative"
        @click="stop()"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ChatHeader from 'src/layouts/partials/Header/ChatHeader.vue'
import Pusher from 'pusher-js' // import Pusher
import { QSpinnerBars } from 'quasar'

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
      online: '',
      type: 0,
      sending: false,
      dialog: false,
      sender_id: this.$route.params.user_id,
      selection: [],
      mediaRecorder: null,
      chunks: [],
      btnStop: false,
      record_cancel: false,
      rating: 0
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
    await this.subscribe()

    this.init()

    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.post(
      'doctor_rated', { doctor_id: this.sender_id }
    ).then((response) => {
      console.log(response.data.rating)
      if (this.sender_id === response.data.doctor_id) this.rating = response.data.rating
    })
  },
  watch: {
    rating: function (val) {
      this.$api.post(
        'doctor_rating', { doctor_id: this.sender_id, rating: val }
      ).then((response) => {
        console.log(response)
      })
    }
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    async getMessages () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      // const formData = new FormData()
      // formData.append('sender_id', this.sender_id)
      await this.$api.post(
        'messages', { sender_id: this.sender_id }
      ).then((response) => {
        this.online = response.data.online_status
        this.messages = response.data.data
      })
    },
    async subscribe () {
      const app = this
      // Start pusher listener
      // Pusher.logToConsole = true

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

      var online = pusher.subscribe('online-' + this.sender_id)

      online.bind('App\\Events\\UserOnline', function (data) {
        app.online = 1
      })

      online.bind('App\\Events\\UserOffline', function (data) {
        app.online = 2
      })
      // End pusher listener
      await this.getMessages()
    },
    async sendMessage () {
      if (this.text !== '') {
        this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        await this.$api.post('messages/send', {
          receiver_id: this.sender_id,
          message: this.text,
          type: this.type
        }).then((resp) => {
          this.messages.push(resp.data)
          this.text = ''
          this.type = 0
          this.sending = false
        })
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
        this.$refs.message.focus()
      }
    },
    send () {
      this.sending = true
      if (this.file !== '') {
        const formData = new FormData()
        formData.append('file', this.file)

        this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        this.$api.post('file_upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
          if (response.data.error_code === '0') {
            if (this.file.type.split('/')[0] === 'image') {
              this.type = 1
            }
            if (this.file.type.split('/')[0] === 'video') {
              this.type = 2
            }
            this.text = response.data.file
            this.file = ''
            this.sendMessage()
          }
        })
      } else {
        if (this.type === 0) {
          this.text = this.text.replaceAll('\n', '<br />')
        }
        this.sendMessage()
      }
    },
    handleHold ({ evt, ...info }) {
      this.dialog = info.touch
    },
    async deleteMessage () {
      if (this.selection.length) {
        const formData = new FormData()
        for (const s of this.selection) {
          formData.append('message_id[]', s)
        }

        this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        await this.$api.post('chat_delete_single_conversation', formData).then((response) => {
          console.log(response)
          if (response.data.error_code === '0') {
            this.selection = []
            this.dialog = false
            this.getMessages()
          }
        })
      }
    },
    init () {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            this.mediaRecorder = new MediaRecorder(stream)

            this.mediaRecorder.ondataavailable = (e) => {
              this.chunks.push(e.data)
            }

            this.mediaRecorder.onstop = (e) => {
              if (!this.record_cancel) {
                const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' })
                const formData = new FormData()
                formData.append('file', blob)
                this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
                this.$api.post('file_upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
                  if (response.data.error_code === '0') {
                    this.file = ''
                    this.text = response.data.file
                    this.type = 3
                  }
                })
              }
            }
          })
          .catch(function (err) {
            console.log('The following getUserMedia error occured: ' + err)
          })
      } else {
        alert('getUserMedia not supported on your browser!')
      }
    },
    record () {
      this.mediaRecorder.start()
      this.$q.loading.show({
        spinner: QSpinnerBars,
        spinnerColor: 'white',
        backgroundColor: 'primary'
      })
      this.btnStop = true
    },
    stop () {
      this.record_cancel = false
      this.mediaRecorder.stop()
      this.$q.loading.hide()
      this.btnStop = false
    },
    cancelRecord () {
      this.record_cancel = true
      this.mediaRecorder.stop()
      this.$q.loading.hide()
      this.btnStop = false
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
.burmese {
  font-family: "Pyidaungsu";
}
</style>
