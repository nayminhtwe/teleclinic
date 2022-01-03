<template>
  <q-page class="flex flex-center">
      <div class="text-heading">
        <div class="welcome-to">Welcome to</div>
        <div class="e-z-care-m-m row">EZ Care <div style="color: red">MM</div></div>
        <div class="text">A tele-consultation app</div>
      </div>
      <div class="text-center">
          <img src="~assets/login_signup.png" />
      </div>

      <div class="text-body">
        <div class="row q-py-md q-gutter-sm text-center">
          <q-btn
            id="signin"
            icon="fas fa-sign-in-alt"
            class="menu-2"
            rounded
            no-caps
            @click="$router.push('login')"
          >
            <div class="sign-in">
              Sign in
            </div>
          </q-btn>
        </div>

        <div class="row q-py-md q-gutter-sm text-center">
          <q-btn
            id="signup"
            icon="las la-rocket"
            class="menu-2"
            rounded
            no-caps
            @click="$router.push('register')"
          >
            <div class="sign-up">
              Sign up
            </div>
          </q-btn>
        </div>
      </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Start',
  data () {
    return {
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
  }
}
</script>

<style scoped>
/* .bg-image {
  background-image: url("../assets/start.png");
  background-size: cover;
} */
.text-heading {
  padding: 15% 0;
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
.text-body {
  padding-bottom: 25%;
}
.menu-2 {
  width: 346px;
  height: 60px;
  box-shadow: 2px 2px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  color: black;
}
#signin >>> .q-icon {
  color: purple;
}
.sign-in {
  overflow: visible;
  font-weight: 499;
  font-family: ".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  padding: 0 10px;
}
#signup >>> .q-icon {
  color: orangered;
  font-size: 30px;
}
.sign-up {
  overflow: visible;
  font-weight: 499;
  font-family: ".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  padding: 0 10px;
}

</style>
