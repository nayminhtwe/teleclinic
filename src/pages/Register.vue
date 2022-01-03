<template>
  <q-page class="flex flex-center">

    <div class="text-heading">
      <div class="sign-up">Sign up</div>
      <div class="e-z-care-m-m row">EZ Care <div style="color: red">MM</div></div>
      <div class="text">A tele-consultation app</div>
    </div>

    <div class="text-center">
        <img src="~assets/login_signup.png" />
    </div>

    <div class="text-body">
      <div class="col-lg-6 col-12 q-py-xs input">
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
          class="menu-1"
          borderless
          v-model="name"
          label="User name"
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        >
          <template v-slot:prepend>
            <q-btn
              flat
              dense
              id="user"
              icon="las la-user"
              class="q-mr-sm text-black"
            />
          </template>
        </q-input>
      </div>
      <div class="col-lg-6 col-12 q-py-xs input">
        <q-input
          class="menu-1"
          borderless
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
              id="password"
              icon="las la-unlock-alt"
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
          no-caps
        >
          <div class="ellipsis">
            Sign up
          </div>
        </q-btn>
      </div>

      <div class="text-center">
        <q-btn
          flat
          label="Already have an account?"
          no-caps
          class="login-button"
          @click="$router.push('/start/login')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      banner: false,
      name: '',
      email: '',
      password: '',
      file: ''
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
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('password', this.password)

      await this.$store.dispatch('doctor/register', formData)
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
  padding: 15% 0;
  width: 80%
}
.sign-up {
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
.text-body {
  padding-bottom: 15%;
}
.input {
  padding: 10px 0;
}
.menu-1 {
  width: 346px;
  height: 60px;
  box-shadow: 2px 2px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  padding-top: 20px;
  font-size: 17px;
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
.login-button {
  width: auto; /* 182px */
  height: auto; /* 17px */
  overflow: visible;
  white-space: pre;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
}
#user >>> .q-icon {
  color: blue;
  height: 2em;
  font-size: 30px;
  padding-left: 10px;
}
#password >>> .q-icon {
  color: orangered;
  height: 2em;
  font-size: 30px;
  padding-left: 10px;
}
</style>
