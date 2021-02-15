<template>
  <q-page>
    <list-header />
    <div class="q-pa-md row items-start q-gutter-lg">
      <div class="col-12 text-h6">Patients In Waiting Room (5)</div>
      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md row items-start q-gutter-lg">
      <div class="col-12 text-h6">Your Patients (36)</div>
      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card" style="width: 10em">
        <q-avatar size="5em" rounded>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          />
        </q-avatar>

        <q-card-section>
          <div class="text-weight-regular">Mg Mg</div>
          <div class="text-weight-regular">Male, 38years</div>
          <div class="text-weight-regular">Back Pain</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
    <!-- <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div> -->
  </q-page>
</template>

<script>
import ListHeader from 'src/layouts/partials/Header/ListHeader.vue'
export default {
  name: 'Home',
  components: {
    ListHeader
  },
  data () {
    return {
      slide: 1
    }
  }
}
</script>
