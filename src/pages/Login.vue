<template>
  <q-page class="flex flex-center">
    <div class="q-pa-xs">
      <div class="text-center q-mb-xl">
        <q-avatar size="72px">
          <img src="~assets/ezcare.png" />
        </q-avatar>
      </div>
      <div class="col-lg-6 col-12 q-py-xs">
        <q-banner
          inline-actions
          class="text-white bg-red q-mb-lg"
          v-if="banner"
        >
          {{ message }}
          <template v-slot:action>
            <q-btn
              flat
              color="white"
              icon="error"
              @click="banner = false"
            />
          </template>
        </q-banner>
        <q-input
          color="teal"
          v-model="email"
          label="Username"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        >
          <template v-slot:prepend>
            <q-btn
              flat
              dense
              icon="account_circle"
              class="q-mr-sm text-white"
            />
            <!-- <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar> -->
          </template>
        </q-input>
      </div>
      <div class="col-lg-6 col-12 q-py-xs">
        <q-input
          color="teal"
          v-model="password"
          type="password"
          label="Password"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        >
          <template v-slot:prepend>
            <!-- <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar> -->
            <q-btn
              flat
              dense
              icon="vpn_key"
              class="q-mr-sm text-white"
            />
          </template>
        </q-input>
      </div>

      <div class="q-py-md q-gutter-sm">
        <q-btn
          color="white"
          style="width: 250px"
          class="text-black"
          rounded
          @click="submit"
        >
          <div class="ellipsis">
            Login
          </div>
        </q-btn>
      </div>
      <div class="q-py-md text-center">
        <q-btn
          flat
          color="white"
          label="Register"
          @click="$router.push('/login/register')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      banner: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      message: state => state.doctor.message,
      errors: state => state.doctor.errors
    }),
    ...mapGetters({
      status: 'doctor/status',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('name', this.email)
      formData.append('password', this.password)

      await this.$store.dispatch('doctor/login', formData)
      if (this.status === 'success') {
        if (this.$q.platform.is.cordova) {
          await this.$store.dispatch('doctor/profile')

          await cordova.plugins.firebase.messaging.getToken().then(token => {
            this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
            this.$api.post('deviceToken', {
              device_token: token
            }
            ).then(() => {
              this.$router.push('/')
            })
          }).catch(error => {
            console.log(error)
          })
        } else {
          this.$router.push('/')
        }
      }

      if (this.status === 'error') {
        this.banner = true
      }
    }
  }
}
</script>
