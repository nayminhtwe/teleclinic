<template>
  <q-page class="flex flex-center">
    <div class="q-pa-xs">
      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          color="teal"
          outlined
          v-model="email"
          label="Email"
        >
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col-lg-6 col-12 q-py-md">
        <q-input
          color="teal"
          outlined
          v-model="password"
          label="Password"
        >
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>
          </template>
        </q-input>
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
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({
      status: 'doctor/status'
    })
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('Email', this.email)
      formData.append('password', this.password)

      await this.$store.dispatch('doctor/login', formData)
      if (this.status === 'success') {
        this.$router.push('/home')
      }
    }
  }
}
</script>
