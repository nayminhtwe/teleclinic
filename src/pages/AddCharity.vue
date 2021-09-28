<template>
  <q-page>
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
        <q-input
          v-model="name"
          label="Name"
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-select
          v-model="charity"
          label="Your Charity Service"
          label-color="black"
          :options="charties"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-select
          v-model="region"
          label="Your Charity Region"
          label-color="black"
          :options="regions"
          :option-label="(item) => item === null ? null : item.Region"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-select
          v-model="township"
          label="Your Charity Township"
          label-color="black"
          :options="region_townships"
          :option-label="(item) => item === null ? null : item.Township"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-input
          v-model="address"
          label="Address"
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-input
          v-model="phone"
          label="Contact Phone No."
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-input
          v-model="email"
          label="Email"
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-input
          v-model="time"
          label="Available Time"
          label-color="black"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-4 col-12">
        <q-input
          v-model="comment"
          label="Comment"
          label-color="black"
        />
      </div>

      <div class="col-12 offset-6 q-mt-xl">
        <q-file
          borderless
          v-model="file"
        >
          <template v-slot:prepend>
            <img
              src="~assets/profile_upload.jpg"
              style="width: 72px"
              @click.stop
            />
          </template>
        </q-file>
      </div>

      <div class="col-lg-4 col-12">
        <div class="q-py-md q-gutter-sm">
          <q-btn
            color="red"
            style="width: 250px"
            class="text-white full-width"
            rounded
            @click="submit"
          >
            <div class="ellipsis">
              {{ $t('Register') }}
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

export default {
  name: 'AddCharity',
  components: {
    ProfileHeader
  },
  data () {
    return {
      banner: false,
      name: '',
      charity: '',
      address: '',
      phone: '',
      email: '',
      time: '',
      comment: '',
      file: '',
      charties: [
        {
          label: 'Ambulance',
          value: 'Ambulance'
        },
        {
          label: 'Pharmacy',
          value: 'Pharmacy'
        },
        {
          label: 'Oxygen',
          value: 'Lab'
        },
        {
          label: 'Clinic',
          value: 'Clinic'
        }
      ],
      region: '',
      regions: [],
      township: '',
      townships: [],
      region_townships: []
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
    await this.$api.get(
      'regions'
    ).then((response) => {
      this.regions = response.data.data
    })

    await this.$api.get(
      'townships'
    ).then((response) => {
      this.townships = response.data.data
    })
  },
  watch: {
    region: function (val) {
      this.township = ''
      this.region_townships = this.townships.filter(t => t.region_id === val.id)
    }
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('charity_service', this.charity.value.toLowerCase())
      formData.append('region_id', this.region.id)
      formData.append('township_id', this.township.id)
      formData.append('address', this.address)
      formData.append('contact_number', this.phone)
      formData.append('email', this.email)
      formData.append('available_time', this.time)
      formData.append('comment', this.comment)
      formData.append('profile_image', this.file)

      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post(this.charity.value.toLowerCase(), formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$q.notify({
              type: 'positive',
              message: 'Your registration is successful'
            })
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err.response.data)
          this.$q.notify({
            type: 'negative',
            message: err.response.data.message
          })
        })
    }
  }
}
</script>
