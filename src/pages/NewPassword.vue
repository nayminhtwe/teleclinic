<template>
  <q-page class="flex flex-center bg-image">

      <div class="text-heading">
        <div class="welcome-to">Welcome to</div>
        <div class="e-z-care-m-m row">EZ Care <div style="color: red">MM</div></div>
        <div class="text">A tele-consultation app</div>
      </div>

      <div class="text-body">
        <div class="enter-new-password">Enter Password</div>
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
            class="menu-1"
            borderless
            v-model="password"
            label="New Password"
            :type="isPwd ? 'password' : 'text'"
            label-color="black"
            :rules="[val => !!val || 'Field is required']"
          >
            <template v-slot:prepend>
              <q-btn
                flat
                dense
                id="password"
                icon="las la-unlock-alt"
                class="q-mr-sm text-black"
              />
            </template>
             <template v-slot:append>
              <q-icon
                style="padding-right: 10px"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="q-py-md q-gutter-sm text-center">
          <q-btn
            class="text-white menu-2"
            rounded
            no-caps
            @click="submit"
          >
            <div class="new-password">
              Update your password
            </div>
          </q-btn>
        </div>
      </div>

  </q-page>
</template>

<script>
export default {
  name: 'NewPassword',
  data () {
    return {
      banner: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    async submit () {
    //   console.log(this.$route.params.app_user_id)
      const formData = new FormData()
      formData.append('app_user_id', this.$route.params.app_user_id)
      formData.append('new_password', this.password)

      await this.$api.post('resetPassword', formData)
        .then((response) => {
        //   console.log(response.data)
          if (response.data.error_code === 0) {
            this.$q.notify({
              type: 'positive',
              message: response.data.message
            })
            setTimeout(() => {
              this.$router.push('/start/login')
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

      if (this.status === 'error') {
        this.banner = true
      }
    }
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/background1.png");
  background-size: cover;
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
.enter-new-password {
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
  width: 246px;
  height: 60px;
  box-shadow: 2px 2px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #cd3700;
  overflow: visible;
  border-radius: 12px;
  border: 1px solid #DFDFDF;
}
/* .new-password {
  overflow: visible;
  font-weight: 499;
  font-family: ".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  width: 100%;
  color: #cd3700;
} */
.new-password {
  width: auto; /* 181px */
  height: auto; /* 22px */
  overflow: visible;
  font-weight: 599;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: white;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  width: 100%;
}
#password >>> .q-icon {
  color: orangered;
  height: 2em;
  font-size: 30px;
  padding-left: 10px;
}
</style>
