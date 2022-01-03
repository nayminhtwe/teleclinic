<template>
  <q-page>
    <!-- <list-header /> -->
    <profile-header />
    <div class="q-pa-md items-start q-gutter-lg">
        <!-- <div class="q-my-sm q-ml-md"> -->
            <div class="text-heading">{{ $t('You can donate here!') }}</div>
        <!-- </div> -->

        <div>
            <div class="row q-py-md q-gutter-sm text-center">
                <q-btn
                    class="menu-2"
                    rounded
                    no-caps
                >
                    <div class="text-left avatar">
                        <q-avatar size="52px">
                        <img src="~assets/kbzpay.png" />
                        </q-avatar>
                    </div>
                    <div class="name">
                        Naw Caroline
                    </div>
                    <div class="donate-acc">
                        09971701240
                    </div>
                </q-btn>
            </div>

            <div class="row q-py-md q-gutter-sm text-center">
                <q-btn
                    class="menu-2"
                    rounded
                    no-caps
                >
                    <div class="text-left avatar">
                        <q-avatar size="52px">
                        <img src="~assets/kbzpay.png" />
                        </q-avatar>
                    </div>
                    <div class="name">
                        Man Sian Dim
                    </div>
                    <div class="donate-acc">
                        09256078233
                    </div>
                </q-btn>
            </div>

            <div class="row q-py-md q-gutter-sm text-center">
                <q-btn
                    class="menu-2"
                    rounded
                    no-caps
                >
                    <div class="text-left avatar">
                        <q-avatar size="52px" square>
                        <img src="~assets/kbz.jpeg" />
                        </q-avatar>
                    </div>
                    <div class="donate-acc-2">
                        Man Sian Dim <p>999 307 999 552 54101</p>
                    </div>
                    <!-- <div class="donate-acc">
                        999 307 999 552 54101
                    </div> -->
                    <!-- <div class="donate-acc-2">
                        Man Sian Dim 999 307 999 552 54101
                    </div> -->
                </q-btn>
            </div>

            <div class="row q-py-md q-gutter-sm text-center">
                <q-btn
                    class="menu-2"
                    rounded
                    no-caps
                >
                    <div class="text-left avatar">
                        <q-avatar size="52px" square>
                        <img src="~assets/aya_bank.jpeg" />
                        </q-avatar>
                    </div>
                    <div class="donate-acc-2">
                        Nung Mun Thawn <p>20021383009</p>
                    </div>
                </q-btn>
            </div>

            <div class="row q-py-md q-gutter-sm text-center">
                <q-btn
                    class="menu-2"
                    rounded
                    no-caps
                >
                    <div class="text-left avatar">
                        <q-avatar size="52px" square>
                        <img src="~assets/paypal.png" />
                        </q-avatar>
                    </div>
                    <div class="donate-acc-3">
                        <a :href="'https://www.paypal.me/ezcaremyanmar'"> https://www.paypal.me/ezcaremyanmar </a>
                    </div>
                </q-btn>
            </div>

            <div class="row q-py-md q-gutter-sm text-center">
                <q-btn
                    class="menu-2"
                    rounded
                    no-caps
                >
                    <div class="text-left avatar-1">
                        <q-avatar size="52px">
                        <img src="~assets/wavepay.jpeg" />
                        </q-avatar>
                    </div>
                    <div class="name">
                        Wave Pay
                    </div>
                    <div class="donate-acc">
                        09256078233
                    </div>
                </q-btn>
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
  name: 'Directory',
  components: {
    ProfileHeader
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  data () {
    return {
      alert: false
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }

  }
}
</script>
<style scoped>
.text-heading {
  width: auto; /* 191px */
  height: auto; /* 22px */
  overflow: visible;
  white-space: pre;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.menu-2 {
  width: 332px;
  height: 80px;
  box-shadow: 2px 2px 22px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
}
.name {
  width: auto; /* 111px */
  height: auto; /* 19px */
  overflow: visible;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  font-weight: 699;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: right;
}
.donate-acc {
  width: auto; /* 112px */
  height: auto; /* 19px */
  overflow: visible;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  font-weight: 699;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
  padding-left: 20px;
}
.donate-acc-2 {
  width: auto; /* 112px */
  height: auto; /* 19px */
  overflow: visible;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  font-weight: 699;
  letter-spacing: 0px;
  line-height: 1.2;
  padding-top: 20px;
  padding-left: 35px;
}
.donate-acc-3 {
  width: auto; /* 112px */
  height: auto; /* 19px */
  overflow: visible;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  font-weight: 699;
  letter-spacing: 0px;
  line-height: 1.2;
}
.avatar {
    padding-right: 2px;
}
.avatar-1 {
    padding-right: 10px;
}
</style>
