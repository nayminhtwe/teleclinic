<template>
  <q-page class="flex flex-center bg-image">

      <div class="text-heading">
        <div class="welcome-to">Welcome to</div>
        <div class="e-z-care-m-m row">EZ Care <div style="color: red">MM</div></div>
        <div class="text">A tele-consultation app</div>
      </div>

      <div class="text-body">
        <div class="enter-the-sms-code">Enter the SMS code</div>
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
            outlined
            standout="bg-white text-black"
            v-model="code"
            mask="            #     #     #     #"
            fill-mask="#"
            unmasked-value
            :rules="[val => !!val || 'Field is required']"
          />
          <!-- <q-input
            standout="bg-teal text-black"
            v-model="code"
            label="Enter the SMS code"
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
            </template>
          </q-input> -->
        </div>
        <div class="q-py-md q-gutter-sm text-center">
          <q-btn
            class="text-white menu-2"
            rounded
            no-caps
            @click="submit"
          >
            <div class="request-otp">
              Verify OTP
            </div>
          </q-btn>
        </div>
      </div>

  </q-page>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PasswordResetOTP',
  data () {
    return {
      banner: '',
      code: '',
      app_user_id: ''
    }
  },
  // computed: {
  //   ...mapState({
  //     message: state => state.doctor.message,
  //     errors: state => state.doctor.errors
  //   }),
  //   ...mapGetters({
  //     status: 'doctor/status',
  //     getDoctorToken: 'doctor/getDoctorToken'
  //   })
  // },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('code', this.code)
      await this.$api.post('postPasswordCode', formData)
        .then((response) => {
          console.log(response)
          if (response.data.error_code === 0) {
            this.app_user_id = response.data.app_user_id
            this.$q.notify({
              type: 'positive',
              message: response.data.message
            })
            setTimeout(() => {
              this.$router.push(`/start/new_password/${this.app_user_id}`)
            }, 2000)
          } else {
            this.$q.notify({
              type: 'negative',
              message: response.data.message
            })
          }
        }).catch(err => {
          console.log(err.response.data.message)
          this.$q.notify({
            type: 'negative',
            message: err.response.data.message
          })
        })
    }
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/background1.png");
}
.text-heading {
  padding: 25px 0;
  width: 80%
}
.welcome-to {
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
.enter-the-sms-code {
  width: auto; /* 266px */
  height: auto; /* 29px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.2;
  padding-bottom: 15%;
}
.text-body {
  padding-bottom: 50%;
}
.menu-2 {
  box-sizing: border-box;
  width: 136px;
  height: 50px;
  box-shadow: 2px 2px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  border: 1px solid #DFDFDF;
}
.request-otp {
  overflow: visible;
  font-weight: 499;
  font-family: ".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #cd3700;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  width: 100%
}
</style>
