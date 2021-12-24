<template>
  <q-page class="flex flex-center ">

      <div class="text-heading">
        <div class="sign-in">Sign in</div>
        <div class="e-z-care-m-m row">EZ Care <div style="color: red">MM</div></div>
        <div class="text">A tele-consultation app</div>
      </div>
      <!-- <div class="text-center q-mb-xl">
        <q-avatar size="72px">
          <img src="~assets/ezcare.png" />
        </q-avatar>
      </div> -->

      <div>
        <div class="col-lg-6 col-12 q-py-xs">
          <q-banner
            inline-actions
            class="text-black bg-red"
            v-if="banner"
          >
            {{ message }}
            <template v-slot:action>
              <q-btn
                flat
                color="black"
                icon="error"
                @click="banner = false"
              />
            </template>
          </q-banner>
          <q-input
            standout="bg-teal text-black"
            v-model="email"
            label="User name"
            label-color="black"
            :rules="[val => !!val || 'Field is required']"
          >
            <template v-slot:prepend>
              <q-btn
                flat
                dense
                icon="account_circle"
                class="q-mr-sm text-black"
              />
              <!-- <q-avatar>
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
              </q-avatar> -->
            </template>
          </q-input>
        </div>
        <div class="col-lg-6 col-12 q-py-xs">
          <q-input
            standout="bg-teal text-black"
            v-model="password"
            type="password"
            label="Password"
            label-color="black"
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
                class="q-mr-sm text-black"
              />
            </template>
          </q-input>
        </div>

        <div class="q-py-md q-gutter-sm text-center">
          <q-btn
            color="deep-orange-10"
            style="width: 100px"
            class="text-white menu-2"
            rounded
            @click="submit"
          >
            <div class="ellipsis">
              Login
            </div>
          </q-btn>
        </div>

        <div class="q-py-md text-center">
          <div class="text-center">Doesn't have an account?</div>
          <q-btn
            flat
            color="black"
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
          await this.$store.dispatch('doctor/profile')
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

<style scoped>
.text-heading {
  padding: 25px 0;
  width: 80%
}
.sign-in {
  width: auto; /* 93px */
  height: auto; /* 29px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.e-z-care-m-m {
  width: auto; /* 216px */
  height: auto; /* 43px */
  overflow: visible;
  white-space: pre;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 36px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.text {
  width: auto; /* 186px */
  height: auto; /* 19px */
  overflow: visible;
  white-space: pre;
  font-weight: 499;
  font-family: ".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
}
.menu-2 {
  box-sizing: border-box;
  width: 136px;
  height: 50px;
  box-shadow: 2px 2px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #cd3700;
  overflow: visible;
  border-radius: 12px;
  border: 1px solid #DFDFDF;
}
</style>
