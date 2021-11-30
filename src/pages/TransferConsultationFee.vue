<template>
  <q-page style="overflow: hidden;">
    <profile-header />
    <div class="q-pa-xs row q-gutter-md">
      <q-banner
        inline-actions
        class="text-white bg-red"
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

      <div class="col-lg-4 col-12">
        <q-select
          v-model="doctor"
          label="Choose Doctor"
          label-color="black"
          option-value="id"
          option-label="id"
          :options="doctors"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-input
          v-model="amount"
          label="Transfer Amount"
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <div class="q-py-md q-gutter-sm">
          <q-btn
            color="red"
            class="text-white half-width"
            rounded
            @click="submit"
          >
            <div class="ellipsis">
              {{ $t('Transfer Now') }}
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
import { Notify } from 'quasar'

export default {
  name: 'TransferConsultationFee',
  components: {
    ProfileHeader
  },
  data () {
    return {
      banner: false,
      doctor: '',
      doctors: [],
      amount: ''
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.get(
      'doctors'
    ).then((response) => {
      this.doctors = response.data.data
      console.log(this.doctors)
    })
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  methods: {
    async submit () {
      console.log(this.getDoctorProfile.app_user_id)
      console.log(this.doctor.app_user_id)
      console.log(this.amount)
      const formData = new FormData()
      formData.append('app_user_patient_id', this.getDoctorProfile.app_user_id)
      formData.append('app_user_doctor_id', this.doctor.app_user_id)
      formData.append('amount', this.amount)

      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post('transaction', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            Notify.create({
              type: 'positive',
              message: response.data.message
            })
            this.$router.push('patient_wallet')
          } else {
            Notify.create(response.data.message)
          }
        }).catch(err => {
          console.log(err.response.data)
          Notify.create({
            type: 'negative',
            message: err.response.data.message
          })
        })
    }
  }
}
</script>
