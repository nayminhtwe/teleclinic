<template>
  <!-- <q-header class="bg-white">
    <q-toolbar>
      <q-img
        src="~assets/cover.jpg"
        style="max-width: 400px; height: 200px;"
      />
    </q-toolbar>
  </q-header> -->
  <!-- <q-img src="~assets/cover.jpg" /> -->
  <q-carousel
    height="15em"
    animated
    v-model="slide"
    infinite
    :autoplay="autoplay"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      v-for="(image, index) in images"
      :key="index"
      :name="index"
      :img-src="getFile(image.profile_picture)"
    />
  </q-carousel>
</template>

<script>
import { constantes } from 'src/boot/constantes.js'
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  },
  props: ['images'],
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }
  }
}
</script>
