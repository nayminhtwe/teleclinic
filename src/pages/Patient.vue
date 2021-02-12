<template>
  <q-page>
    <detail-header />
    <div class="flex flex-center">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    </div>
  </q-page>
</template>

<script>
import DetailHeader from 'src/layouts/partials/Header/DetailHeader.vue'
export default {
  name: 'Patient',
  components: {
    DetailHeader
  }
}
</script>
