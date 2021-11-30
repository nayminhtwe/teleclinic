<template>
  <q-page>
    <profile-header />
    <div class="my-wallet">Wallet</div>
    <div class="q-pa-md row items-start q-gutter-md">

      <q-card
        class="my-card full-width"
        bordered
      >
        <div class="row col-12">
          <div class="col-6">
            <span class="text-subtitle2 e-z-care-m-m">EZ Care MM</span>
          </div>
        </div>

        <q-card-section class="text-center">
          <i
            class="fab fa-btc"
            style="font-size: 70px;width: 163px;height: 50px"
          ></i>
          <!-- <div
            class="text-h3 text-center text-weight-bolder"
            style="font-size: 46px;"
          >
            {{formatNumber(patient_wallet.wallet)}} <span style="font-size: 18px; font-weight: 400">MMK</span>
          </div> -->
        </q-card-section>

        <!-- <q-separator color="red" /> -->

        <div class="row col-12">
          <div class="col-6">
            <div class="current-balance">Current Balance (MMK)</div>
          </div>
          <div class="col-6">
            <div class="text-weight-bolder wallet">{{formatNumber(patient_wallet.wallet)}}</div>
          </div>
        </div>

      </q-card>

      <q-card
        class="topup full-width"
        bordered
      >
        <q-card-section>
          <div
            class="text-center top-up-my-balance"
            @click="$router.push('transfer_consultation_fee')"
          >Transfer Consultation Fees</div>
        </q-card-section>
      </q-card>

      <q-card
        class="topup full-width"
        bordered
      >
        <q-card-section>
          <div
            class="text-center top-up-my-balance"
            @click="topup"
          >Top up my balance</div>
        </q-card-section>
      </q-card>

      <span class="history">Transaction History</span>
      <div class="row col-12 full-width">
        <q-list
          v-for="(history, index) in patient_transaction_history"
          :key="index"
          style="width: 100%"
        >
          <q-item style="height: 20px">
            <q-item-section>
              <div
                class="row col-12"
                style="text-size: 20px"
              >
                <div class="col-6">
                  <div>{{index+1}}. {{history.doctor_info.name}}</div>
                </div>
                <div class="col-6 total-amount">
                  <div>{{history.total_amount}} MMK</div>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
import { Dialog, Notify } from 'quasar'

export default {
  name: 'PatientWallet',
  components: {
    ProfileHeader
  },
  data () {
    return {
      patient_wallet: [],
      patient_transaction_history: []
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

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    await this.$api.get(
      'patient_wallet'
    ).then((response) => {
      this.patient_wallet = response.data
    })

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    await this.$api.get(
      'patient_transaction_history'
    ).then((response) => {
      this.patient_transaction_history = response.data.data
      console.log(this.patient_transaction_history)
    })
  },
  methods: {
    formatNumber (value) {
      const val = (value / 1)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    topup () {
      Dialog.create({
        title: 'Topup',
        message: 'How much will you topup?(Please input number only)',
        prompt: {
          model: '',
          isValid: val => val !== String,
          type: 'number',
          required: true
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        console.log('>>>> OK, received', data)
        console.log(data)
        this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
        const formData = new FormData()
        formData.append('amount', data)
        this.$api.post('topup_patient', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((response) => {
            if (response.data.error_code === '0') {
              console.log(response.data.message)
              Notify.create(response.data.message)
            } else {
              Notify.create(response.data.message)
            }
          }).catch(err => {
            console.log(err.response.data)
            Notify.create(err.response.data.message)
          })
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>

<style scoped>
.my-card {
  box-sizing: border-box;
  /* width: 349px;
  height: 177px; */
  box-shadow: 2px 2px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  border: 4px solid #cd3700;
}

.my-wallet {
  width: auto; /* 90px */
  height: auto; /* 29px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold",
    ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont",
    sans-serif;
  color: #022033;
  font-size: 24px;
  letter-spacing: 0.7px;
  line-height: 1.2;
}

.text {
  width: auto; /* 117px */
  height: auto; /* 34px */
  overflow: visible;
  white-space: pre;
  font-family: "Inter", sans-serif;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.2;
}

.e-z-care-m-m {
  padding: 10px;
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold",
    ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont",
    sans-serif;
  color: #000000;
  font-size: 16px;
}

.current-balance {
  padding: 10px;
  overflow: visible;
  white-space: pre;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular",
    ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 12px;
}

.wallet {
  padding-right: 10px;
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold",
    ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont",
    sans-serif;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.5;
  text-align: right;
}

.topup {
  /* width: 349px;
  height: 50px; */
  box-shadow: 2px 3px 22px -2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
}

.top-up-my-balance {
  width: auto; /* 151px */
  height: auto; /* 19px */
  overflow: visible;
  white-space: pre;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold",
    "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display",
    "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #cc0000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}

.history {
  width: auto; /* 213px */
  height: auto; /* 19px */
  overflow: visible;
  white-space: pre;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold",
    "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display",
    "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}

.total-amount {
  text-align: right;
}
</style>
