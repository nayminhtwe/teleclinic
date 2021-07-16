<template>
  <div>
    <q-layout view="hHh lpR fFf">

      <Footer />

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Footer from 'src/layouts/partials/Footer.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {}
  }
}
</script>
