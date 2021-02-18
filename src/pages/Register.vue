<template>
  <q-page class="flex flex-center">
    <div class="q-pa-xs">
      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="name"
          label="Name"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="qualifications"
          label="Qualifications"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="contact_number"
          label="Contact Number"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="email"
          label="Email"
        />
      </div>
      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="password"
          label="Password"
          type="password"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          standout="bg-teal text-white"
          v-model="password_confirmation"
          label="Password Confirm"
          type="password"
        />
      </div>

      <div class="col-lg-6 col-12 q-py-md">

        <q-btn
          round
          color="primary"
          icon="add"
          @click="addInput"
        />

      </div>

      <div
        class="col-lg-6 col-12 q-py-md"
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
      </div>

      <div class="q-py-md q-gutter-sm">
        <q-btn
          color="primary"
          style="width: 250px"
          @click="submit"
        >
          <div class="ellipsis">
            Login
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      qualifications: '',
      contact_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      file_name: '',
      files: [
        { data: '' }
      ]
    }
  },
  methods: {
    addInput () {
      this.files.push({ data: '' })
    },
    clearInput (id) {
      this.files.splice(id, 1)
    },
    submit () {
      const formData = new FormData()
      formData.append('Name', this.name)
      formData.append('Qualifications', this.qualifications)
      formData.append('Contact_Number', this.contact_number)
      formData.append('Email', this.email)
      formData.append('password', this.password)
      formData.append('password_confirmation', this.password_confirmation)
      formData.append('file_name', 'certificate')
      for (const file of this.files) {
        formData.append('certificate_file[]', file.data)
      }

      this.$axios.post('http://188.166.217.32/api/v1/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(response => console.log(response.data.access_token))
        .catch(function () {
          console.log('FAILURE!!')
        })
    }
  }
}
</script>
