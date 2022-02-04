<template>
  <q-page>
    <profile-header />
    <q-dialog
      v-model="alert"
      full-width
    >
      <q-card>
        <q-card-section align="center">
          <q-icon
            size="md"
            name="far fa-thumbs-up"
            class="q-pa-sm"
            color="blue"
          />
          <div class="text-h4">Success</div>
        </q-card-section>

        <q-separator />

        <q-card-section
          class="q-pa-lg"
          align="center"
        >
          {{ this.message }}
        </q-card-section>

        <q-separator />

        <q-card-actions align="center">
          <q-btn
            flat
            label="OK"
            color="red"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="card"
      full-width
    >
      <q-card
        class="my-card"
        id="charity_info"
      >
        <div class="row q-pa-xs">
          <div class="col-3">
            <q-avatar size="4em">
              <img
                :src="getFile(charity.profile_image)"
                v-if="charity.profile_image"
              >
              <img
                src="~assets/ezcare.png"
                v-else
              >
            </q-avatar>
          </div>
          <div class="col-7">
            <div class="col text-subtitle1 ellipsis">
              {{ charity.name }}
            </div>
          </div>
          <div class="col-2">
            <q-btn
              round
              :color="charity.favorite_status ? 'primary' : 'black'"
              icon="favorite"
              class="absolute"
              size="md"
              @click="favourite(charity.id)"
            />
          </div>
        </div>
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-card-section class="q-gutter-xs">
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="negative"
                />
                {{ charity.name }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="fas fa-stethoscope"
                  class="q-pa-sm"
                  color="secondary"
                />
                {{ charity.charity_service }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="fas fa-graduation-cap"
                  class="q-pa-sm"
                  color="accent"
                />
                {{ charity.address }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="far fa-clock"
                  class="q-pa-sm"
                  color="primary"
                />
                {{ charity.available_time }}
              </div>
            </q-card-section>
          </q-card>
        </div>
        <q-card-actions>
          <div class="col q-px-md">
            <q-btn
              class="full-width"
              v-close-popup
              color="primary"
              label="Call"
              size="md"
              type="a"
              :href="'tel:'+charity.contact_number"
            />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- <q-dialog
      v-model="card"
      full-width
    >
      <q-card class="my-card">
        <q-img
          :src="getFile(charity.profile_image)"
          v-if="charity.profile_image"
        />

        <q-img
          src="~assets/ezcare.png"
          v-else
        />
        <q-card-section>
          <q-btn
            fab
            :color="charity.favorite_status ? 'primary' : 'black'"
            icon="favorite"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            @click="favourite(charity.id)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ charity.name }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            {{ charity.available_time }}
          </div>
          <div class="text-subtitle1">
            {{ charity.address }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <div class="col column items-center">
            <q-btn
              v-close-popup
              color="primary"
              label="Call"
              size="md"
              type="a"
              :href="'tel:'+charity.contact_number"
            />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog> -->
    <div class="q-pa-sm">
      <div class="q-gutter-y-xs">
        <q-tabs
          v-model="tab"
          dense
          inline-label
          active-color="white"
          active-bg-color="red"
        >
          <q-tab
            name=""
            :label="$t('All')"
            no-caps
          />
          <q-tab
            v-for="region in regions"
            :key="region.id"
            :name="region.id"
            :label="$t(region.Region)"
            no-caps
          />
        </q-tabs>
      </div>
    </div>
    <!-- <div class="q-pa-sm">
      <div class="q-gutter-y-xs">
        <q-tabs
          v-model="tab"
          inline-label
          dense
          active-color="white"
          active-bg-color="red"
          @click="getCharity()"
        >
          <q-tab
            name="all"
            label="All"
            no-caps
          />
          <q-tab
            name="favourite"
            label="Favourite"
            no-caps
          />
        </q-tabs>
      </div>
    </div> -->
    <div class="q-py-lg">
      <div
        class="text-h5 q-mb-md"
        v-if="charity_type =='lab'"
      >
        Find your Oxygen
      </div>
      <div
        class="text-h5 q-mb-md"
        v-else
      >
        Find your {{ charity_type }}
      </div>
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="search"
          @keyup="inserted"
          dense="dense"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              @click="filter"
            />
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pa-xs q-gutter-md">
      <!-- <RecycleScroller
        class="scroller"
        :items="charities"
        :minItemSize="30"
        key-field="id"
        v-slot="{ item }"
      >
        <div>
          <div class="row col-12">
            <div
              class="col-3 column justify-center"
              @click="popup(item)"
            >
              <q-avatar size="60px">
                <img
                  :src="getFile(item.profile_image)"
                  v-if="item.profile_image"
                />
                <img
                  src="~assets/ezcare.png"
                  v-else
                />
              </q-avatar>
            </div>
            <div
              class="col-7"
              @click="popup(item)"
            >
              <div class="text-h6">{{ item.name }}</div>
              <div>{{ item.address }}</div>
            </div>
            <div class="col-2 column justify-center">
              <q-icon
                name="favorite"
                class="border-icon"
                :class="item.favorite_status ? 'text-black' : 'text-white'"
                size="md"
                @click="favourite(item.id)"
              />
            </div>
          </div>
        </div>
      </RecycleScroller> -->
      <div
        v-for="charity in charities"
        :key="charity.id"
        class="card-box"
      >
        <div class="row col-12">
          <div
            class="col-3 column justify-center"
            @click="popup(charity)"
          >
            <q-avatar size="60px">
              <img
                :src="getFile(charity.profile_image)"
                v-if="charity.profile_image"
              />
              <img
                src="~assets/ezcare.png"
                v-else
              />
            </q-avatar>
          </div>
          <div
            class="col-7"
            @click="popup(charity)"
          >
            <div class="text-h6">{{ charity.name }}</div>
            <div>{{ charity.address }}</div>
          </div>
          <div class="col-2 column justify-center">
            <q-icon
              name="favorite"
              class="border-icon"
              :class="charity.favorite_status ? 'text-black' : 'text-white'"
              size="md"
              @click="favourite(charity.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'

export default {
  name: 'Charity',
  components: {
    ProfileHeader
  },
  data () {
    return {
      banner: false,
      alert: false,
      card: false,
      charity: {},
      charities: [],
      regions: [],
      search: '',
      timeout: null,
      message: '',
      tab: '',
      charity_type: this.$route.params.type
    }
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    }),
    getFavouriteStatus () {
      return this.charity.favorite_status ? 'black' : 'primary'
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    await this.$api.get(
      'regions'
    ).then((response) => {
      this.regions = response.data.data
    })

    await this.filter()
  },
  watch: {
    tab: function (val) {
      this.filter()
    }
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    popup (charity) {
      this.charity = charity
      this.card = true
    },
    async filter () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      await this.$api.get(
        `filter_${this.charity_type}?name=${this.search}&region_id=${this.tab}`
      ).then((response) => {
        this.charities = response.data.data
      })
      // if (this.tab === 'all') {
      //   this.$api.get(
      //     `filter_${this.charity_type}?name=${this.search}`
      //   ).then((response) => {
      //     this.charities = response.data.data
      //   })
      // }
      // if (this.tab === 'favourite') {
      //   this.$api.get(
      //     `get_favorite_${this.charity_type}?name=${this.search}`
      //   ).then((response) => {
      //     this.charities = response.data.data
      //   })
      // }
    },
    inserted () {
      // clear timeout variable
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.filter()
      }, 1000)
    },
    favourite (id) {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post(
        `favorite_${this.charity_type}/${id}`
      ).then((response) => {
        this.message = response.data.message
        this.alert = true
        this.filter()
        if (this.charity.id === id) this.charity.favorite_status = !this.charity.favorite_status
      })
    },
    async getCharity () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.search = ''
      if (this.tab === 'all') {
        this.$api.get(
          `get_${this.charity_type}`
        ).then((response) => {
          this.charities = response.data.data
        })
      }
      if (this.tab === 'favourite') {
        this.$api.get(
          `get_favorite_${this.charity_type}?name=${this.search}`
        ).then((response) => {
          this.charities = response.data.data
        })
      }
    }
  }
}
</script>

<style scoped>
.border-icon {
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
}

.card-box {
  box-shadow: 2px 2px 22px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 12px;
  padding: 15px;
}

.q-tab {
  border-radius: 20px;
}
</style>
