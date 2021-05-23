<template>
  <q-header
    elevated
    class="bg-red text-white"
  >
    <q-toolbar>
      <div class="col-1">
        <q-btn
          flat
          round
          dense
          icon="west"
          class="q-mr-sm"
          @click="$router.go(-1)"
          v-if="$route.fullPath !== '/'"
        />
      </div>
      <div class="col-10">
        <!-- <div class="absolute-center">
          <q-toolbar-title>
            EZ Care
          </q-toolbar-title>
        </div> -->
      </div>
    </q-toolbar>
    <q-toolbar
      class="q-pa-xs"
      inset
    >
      <div class="col-2 offset-1">
        <q-avatar
          size="72px"
          v-if="user.profile_image"
        >
          <img :src="getFile(user.profile_image.profile_picture)" />
        </q-avatar>
        <q-avatar
          size="72px"
          v-else
        >
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>
      </div>
      <div class="col-8 offset-1">
        <div
          class="text-h5"
          v-if="!user.hide_my_info"
        >{{ user.name }}</div>
        <div
          class="text-h5"
          v-else
        >EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(user.id) }}</div>
        <div v-if="user.status == 1">
          <div class="text-h6">{{ user.qualifications }}</div>
          <div class="text-h6">{{ user.specialization }}</div>
        </div>

        <div v-if="user.status == 2">
          <div class="text-h6">{{ user.age }}</div>
          <div class="text-h6">{{ user.gender }}</div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { constantes } from 'src/boot/constantes.js'
export default {
  data () {
    return {
      user: this.$route.params.user
    }
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }
  }
}
</script>
