<template>
  <q-page>
    <profile-header />
    <div class="q-py-lg">
      <div class="text-h5 q-mb-md">Find your {{ charity_type }}</div>
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="text"
          :dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pa-xs q-gutter-md">
      <div
        v-for="charity in charities"
        :key="charity.id"
      >
        <div class="row col-12">
          <div class="col-3">
            <q-avatar size="60px">
              <img
                :src="getFile(charity.profile_image)"
                v-if="charity.profile_image"
              />
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                v-else
              />
            </q-avatar>
          </div>
          <div class="col-7">
            <div class="text-h6">{{ charity.name }}</div>
            <div>{{ charity.address }}</div>
          </div>
          <div class="col-2">
            <q-icon
              name="favorite"
              class="text-black"
              size="md"
            />
          </div>
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
  name: 'AddCharity',
  components: {
    ProfileHeader
  },
  data () {
    return {
      banner: false,
      charities: [],
      charity_type: this.$route.params.type
    }
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  created () {
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.get(
      `get_${this.charity_type}`
    ).then((response) => {
      this.charities = response.data.data
    })
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }
  }
}
</script>
