<template>
  <q-page>
    <list-header />
    <div class="flex flex-center">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    </div>
  </q-page>
</template>

<script>
import ListHeader from 'src/layouts/partials/Header/ListHeader.vue'
export default {
  name: 'Home',
  components: {
    ListHeader
  }
}
</script>
