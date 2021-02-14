<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <div class="col-1">
        <q-btn flat round dense icon="west" class="q-mr-sm" />
      </div>
      <div class="col-10">
        <div class="absolute-center">
          <q-toolbar-title>
            Visit Details
          </q-toolbar-title>
        </div>
      </div>
      <div class="col-1">
        <q-btn flat round dense icon="apps" class="q-mr-sm" />
      </div>
    </q-toolbar>
    <q-toolbar class="q-pa-md">
      <!-- <div class="row"> -->
        <div class="col-3 col-lg-1">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          <div class="text-h6 q-ml-sm">0000</div>
        </div>
        <div class="col-8 col-lg-4">
            <div class="text-h6">Aye Aye Myint</div>
            <div class="text-subtitle2">32 years</div>
            <div class="text-subtitle2">Female</div>
            <div class="text-weight-regular">12 street,34 ward,56 City,78 Ts</div>
            <div class="text-weight-regular">09-123456789</div>
        </div>
      <!-- </div> -->
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
