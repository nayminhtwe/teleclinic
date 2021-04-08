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
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="text-center q-my-lg">
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

      <div class="q-py-md q-gutter-sm">
        <q-btn
          color="red"
          style="width: 250px"
          class="text-white"
          rounded
          @click="submit"
        >
          <div class="ellipsis">
            Register
          </div>
        </q-btn>
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
        'ambulance',
        'pharmacy',
        'lab',
        'clinic'
      ]
    }
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('charity_service', this.charity)
      formData.append('address', this.address)
      formData.append('contact_number', this.phone)
      formData.append('email', this.email)
      formData.append('available_time', this.time)
      formData.append('comment', this.comment)
      formData.append('profile_image', this.file)

      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post(this.charity, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          if (response.data.error_code === '0') {
            this.$router.push('/')
          }
        }).catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>
