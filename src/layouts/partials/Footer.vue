<template>
  <q-footer
    bordered
    class="bg-grey-2 text-white"
  >
    <q-tabs
      no-caps
      active-color="deep-orange-10"
      indicator-color="transparent"
      class="text-grey"
      v-model="tab"
    >
      <q-tab
        name="home"
        @click="$router.push('/')"
      >
        <q-btn
          flat
          round
          dense
          icon="home"
          class="q-mr-md"
        />
      </q-tab>
      <q-tab
        name="patients"
        @click="$router.push('/patients')"
      >
        <q-btn
          flat
          round
          dense
          icon="history"
          class="q-mr-md"
        />
      </q-tab>
      <q-tab
        name="inbox"
        @click="$router.push('/inbox')"
      >
        <q-btn
          flat
          round
          dense
          icon="chat"
          class="q-mr-md"
        />
      </q-tab>
      <q-tab
        name="profile"
        @click="$router.push('/profile')"
      >
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
    return {
      tab: 'home'
    }
  }
}
</script>
