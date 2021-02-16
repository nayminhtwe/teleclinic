<template>
  <q-page>
    <profile-header />
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      />
    </div>
  </q-page>
</template>

<script>
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
export default {
  name: 'Home',
  components: {
    ProfileHeader
  }
}
</script>
