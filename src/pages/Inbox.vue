<template>
  <q-page>
    <profile-header />
    <div class="q-py-lg">
      <q-dialog
        v-model="dialog"
        position="bottom"
        full-width
      >
        <q-card>

          <q-card-section>
            <div class="q-py-md">
              <q-btn
                color="primary"
                class="full-width"
                label="Delete"
                @click="deleteChat"
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
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="search"
          dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pa-xs q-gutter-md">
      <div
        v-for="chat in chats"
        :key="chat.id"
      >
        <div v-if="getDoctorProfile.status === '1'">
          <div
            :class="chat.doctor_unread_status === 1 ? 'text-green' : ''"
            class="row col-12"
            @click="$router.push({ name: 'chat', params: { user_id: chat.patient_info.app_user_id, user: chat.patient_info, last_message_id: chat.id } })"
          >
            <div class="col-3 column justify-center">
              <q-avatar size="60px">
                <q-badge
                  rounded
                  floating
                  color="green"
                  text-color="green"
                  label="1"
                  v-if="chat.online_status.online_status"
                />
                <q-badge
                  rounded
                  floating
                  color="black"
                  text-color="black"
                  label="0"
                  v-else
                />
                <img
                  :src="getFile(chat.patient_info.profile_image)"
                  v-if="chat.patient_info.profile_image"
                />
                <img
                  src="~assets/ezcare.png"
                  v-else
                />
              </q-avatar>
            </div>
            <div class="col-8">
              <div class="text-h6">{{ chat.patient_info.name }}</div>
              <div>{{ chat.last_message }}</div>
            </div>
            <div
              class="col-1 column justify-center"
              @click="confirm(chat.app_user_patient_id)"
            >
              <q-btn
                flat
                icon="more_vert"
              />
            </div>
          </div>
        </div>
        <div v-if="getDoctorProfile.status === '2'">
          <div
            :class="chat.patient_unread_status === 1 ? 'text-green' : ''"
            class="row col-12"
          >
            <div
              class="col-3 column justify-center"
              @click="$router.push({ name: 'chat', params: { user_id: chat.doctor_info.app_user_id, user: chat.doctor_info, last_message_id: chat.id } })"
            >
              <q-avatar size="60px">
                <q-badge
                  rounded
                  floating
                  color="green"
                  text-color="green"
                  label="1"
                  v-if="chat.online_status.online_status"
                />
                <q-badge
                  rounded
                  floating
                  color="black"
                  text-color="black"
                  label="0"
                  v-else
                />
                <img
                  :src="getFile(chat.doctor_info.profile_image.profile_picture)"
                  v-if="chat.doctor_info.profile_image"
                />
                <img
                  src="~assets/ezcare.png"
                  v-else
                />
              </q-avatar>
            </div>
            <div
              class="col-8"
              @click="$router.push({ name: 'chat', params: { user_id: chat.doctor_info.app_user_id, user: chat.doctor_info, last_message_id: chat.id } })"
            >
              <div
                class="text-h6"
                v-if="!chat.doctor_info.hide_my_info"
              >
                {{ chat.doctor_info.name }}
              </div>
              <div
                class="text-h6"
                v-else
              >
                EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(chat.doctor_info.id) }}
              </div>
              <div class="last_message">{{ chat.last_message }}</div>
            </div>
            <div
              class="col-1 column justify-center"
              @click="confirm(chat.app_user_doctor_id)"
            >
              <q-btn
                flat
                icon="more_vert"
              />
            </div>
            <!-- <div class="col-1">
              <q-fab
                color="primary"
                text-color="white"
                icon="keyboard_arrow_left"
                direction="left"
                padding="xs"
              >
                <q-fab-action
                  color="primary"
                  text-color="white"
                  @click="deleteChat(chat.app_user_doctor_id)"
                  icon="delete"
                />
              </q-fab>
            </div> -->
          </div>
        </div>
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
      chats: [],
      chat_user_id: '',
      search: '',
      message: '',
      dialog: false,
      last_message_id: this.$route.params.last_message_id
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
    await this.getChat()

    await this.subscribe()
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    async getChat () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      if (this.getDoctorProfile.status === '1') {
        await this.$api.get(
          'last_message_list'
        ).then((response) => {
          this.chats = response.data.data
        })
      }
      if (this.getDoctorProfile.status === '2') {
        await this.$api.get(
          'patient_last_message_list'
        ).then((response) => {
          this.chats = response.data.data
        })
      }
    },
    confirm (userId) {
      this.chat_user_id = userId
      this.dialog = true
    },
    async deleteChat () {
      await this.$api.delete(
        `chat_delete_whole_conversation?receiver_id=${this.chat_user_id}`
      ).then((response) => {
        this.getChat()
        this.dialog = false
      })
    },
    async subscribe () {
      this.$root.$on('pusher_member_added', member => {
        if (this.getDoctorProfile.status === '1' && member.info.doctor_status === 2) {
          const chat = this.chats.filter(chat => chat.app_user_patient_id === member.info.id)
          chat[0].online_status.online_status = 1
        }
        if (this.getDoctorProfile.status === '2' && member.info.doctor_status === 1) {
          const chat = this.chats.filter(chat => chat.app_user_doctor_id === member.info.id)
          chat[0].online_status.online_status = 1
        }
      })

      this.$root.$on('pusher_member_removed', member => {
        if (this.getDoctorProfile.status === '1' && member.info.doctor_status === 2) {
          const chat = this.chats.filter(chat => chat.app_user_patient_id === member.info.id)
          chat[0].online_status.online_status = 0
        }
        if (this.getDoctorProfile.status === '2' && member.info.doctor_status === 1) {
          const chat = this.chats.filter(chat => chat.app_user_doctor_id === member.info.id)
          chat[0].online_status.online_status = 0
        }
      })
    }

  }
}
</script>

<style scoped>
.border-icon {
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
}
.last_message {
  overflow: hidden;
}
</style>
