<template>
  <q-page>
    <profile-header />
    <q-dialog
      v-model="card"
      full-width
    >
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ charity.name }}
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating
            v-model="stars"
            :max="5"
            size="32px"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            {{ charity.available_time }}
          </div>
          <div class="text-caption text-grey">
            {{ charity.address }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            color="primary"
            label="Reserve"
          />
          <q-btn
            v-close-popup
            flat
            color="primary"
            round
            icon="event"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
        <div
          class="row col-12"
          @click="popup(charity)"
        >
          <div class="col-3 column justify-center">
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
          <div class="col-2 column justify-center">
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
      card: false,
      charity: {},
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

    this.charities = [
      {
        id: 1,
        name: 'Aung Aung',
        address: 'tamwe'
      },
      {
        id: 2,
        name: 'Maung Maung',
        address: 'pathein'
      }
    ]
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    popup (charity) {
      this.charity = charity
      this.card = true
    }
  }
}
</script>
