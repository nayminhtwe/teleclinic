<template>
  <q-footer
    bordered
    class="bg-primary text-white"
  >
    <q-tabs
      no-caps
      active-color="primary"
      indicator-color="transparent"
      class="text-grey"
      v-model="tab"
    >
      <q-tab name="home">
        <q-btn
          flat
          round
          dense
          icon="home"
          class="q-mr-md"
        />
      </q-tab>
      <q-tab name="waiting">
        <q-btn
          flat
          round
          dense
          icon="history"
          class="q-mr-md"
        />
      </q-tab>
      <q-tab name="home">
        <q-btn
          flat
          round
          dense
          icon="local_hospital"
          class="q-mr-md"
        />
      </q-tab>
      <q-tab name="home">
        <q-btn
          flat
          round
          dense
          icon="account_circle"
          class="q-mr-md"
        />
      </q-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>
