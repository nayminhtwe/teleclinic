<template>
  <q-page class="flex flex-center">
    <div class="q-pa-xs">
      <div class="col-lg-6 col-12 q-py-md">
        <q-input color="teal" outlined v-model="text" label="Username">
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col-lg-6 col-12 q-py-md">
        <q-input color="teal" outlined v-model="text" label="Password">
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>
          </template>
        </q-input>
      </div>

      <div class="q-py-md q-gutter-sm">
        <q-btn color="primary" style="width: 250px">
          <div class="ellipsis">
            Login
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login'
}
</script>
