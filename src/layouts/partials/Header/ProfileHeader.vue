<template>
  <q-header
    elevated
    class="bg-primary text-white"
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
        <div class="absolute-center">
          <q-toolbar-title class="text-red">
            EZ Care
          </q-toolbar-title>
        </div>
      </div>
    </q-toolbar>
    <q-toolbar
      class="q-pa-md"
      inset
    >
      <!-- <div class="row">
        <div class="col-9">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
        </div>
        <div class="col-9">
          <div class="text-h6">Welcome Back</div>
        </div>
      </div> -->
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
