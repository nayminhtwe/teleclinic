<template>
  <q-page class="flex flex-center">
    <div class="q-pa-xs">
      <div class="text-center q-mb-xl">
        <q-avatar size="72px">
          <img src="~assets/ezcare.png" />
        </q-avatar>
      </div>
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
      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="name"
          label="Name"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="qualifications"
          label="Qualifications"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="contact_number"
          label="Contact Number"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="email"
          label="Email"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="password"
          label="Password"
          type="password"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="password_confirmation"
          label="Confirm Password"
          type="password"
          label-color="white"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="text-center q-mb-xl">
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

      <div class="text-h6 q-py-sm">
        Certificates
      </div>

      <div class="col-lg-6 col-12 q-py-md">

        <q-btn
          round
          color="primary"
          icon="add"
          @click="addInput"
        />

      </div>

      <!-- <div
        class="row col-lg-6 col-12 q-py-md"
        v-for="(file, id) in files"
        :key="id"
      >
        <q-file
          filled
          bottom-slots
          v-model="file.data"
          label="Certificates"
          counter
        >
          <template v-slot:prepend>
            <q-icon
              name="cloud_upload"
              @click.stop
            />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click.prevent="clearInput(id)"
              class="cursor-pointer"
            />
          </template>
        </q-file>
      </div> -->
      <div
        class="row"
        v-for="(file, id) in files"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="file.name"
            label="Name"
            label-color="white"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="file.data"
            label="File"
            label-color="white"
            counter
            :rules="[val => !!val || 'Field is required']"
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                color="white"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>

      <div class="q-py-md q-gutter-sm">
        <q-btn
          color="white"
          style="width: 250px"
          class="text-black"
          rounded
          @click="submit"
        >
          <div class="ellipsis">
            Register
          </div>
        </q-btn>
      </div>
      <div class="q-py-md text-center">
        <q-btn
          flat
          color="white"
          label="Login"
          @click="$router.push('/login/login')"
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
      qualifications: '',
      contact_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      file_name: '',
      files: [
        { name: '', data: '' }
      ]
    }
  },
  computed: {
    ...mapState({
      message: state => state.doctor.message,
      errors: state => state.doctor.errors
    }),
    ...mapGetters({
      status: 'doctor/status'
    })
  },
  methods: {
    addInput () {
      this.files.push({ name: '', data: '' })
    },
    clearInput (id) {
      this.files.splice(id, 1)
    },
    async submit () {
      const formData = new FormData()
      formData.append('Name', this.name)
      formData.append('Qualifications', this.qualifications)
      formData.append('Contact_Number', this.contact_number)
      formData.append('Email', this.email)
      formData.append('password', this.password)
      formData.append('password_confirmation', this.password_confirmation)
      formData.append('file_name', 'certificate')
      for (const file of this.files) {
        if (!!file.name && !!file.data) {
          formData.append('certificate_file[]', file.data, file.name)
        }
      }

      await this.$store.dispatch('doctor/register', formData)
      if (this.status === 'success') {
        this.$router.push('/')
      }

      if (this.status === 'error') {
        this.banner = true
      }
    }
  }
}
</script>
