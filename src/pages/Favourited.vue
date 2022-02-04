<template>
  <q-page>
    <profile-header />
    <q-dialog
      v-model="alert"
      full-width
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Success</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ this.message }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="doctor_card"
      full-width
    >
      <q-card
        class="my-card"
        id="doctor_info"
      >
        <div class="row q-pa-xs">
          <div class="col-3">
            <q-avatar size="4em">
              <img
                :src="getFile(charity.profile_image.profile_picture)"
                v-if="charity.profile_image"
              >
              <img
                src="~assets/ezcare.png"
                v-else
              >
            </q-avatar>
          </div>
          <div class="col-7">
            <div
              class="col text-subtitle1 ellipsis"
              v-if="!charity.hide_my_info"
            >
              {{ charity.name }}
            </div>
            <div
              class="col text-subtitle1 ellipsis"
              v-else
            >
              EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(charity.id) }}
            </div>
            <!-- <div>Hello</div> -->
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
              <div
                class="text-subtitle2"
                v-if="!charity.hide_my_info"
              >
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="negative"
                />
                {{ charity.name }}
              </div>
              <div
                class="text-subtitle2"
                v-else
              >
                <q-icon
                  size="xs"
                  name="far fa-user"
                  class="q-pa-sm"
                  color="negative"
                />
                EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(charity.id) }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="fas fa-stethoscope"
                  class="q-pa-sm"
                  color="secondary"
                />
                {{ charity.specialization }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="fas fa-graduation-cap"
                  class="q-pa-sm"
                  color="accent"
                />
                {{ charity.qualifications }}
              </div>
              <q-separator />
              <div class="text-subtitle2">
                <q-icon
                  size="xs"
                  name="fas fa-language"
                  class="q-pa-sm"
                  color="pink"
                />
                <template v-for="language in charity.available_language">
                  {{ language.language }}
                </template>
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
              v-if="getDoctorProfile.status == 2"
              v-close-popup
              color="primary"
              label="Message"
              size="md"
              @click="$router.push({ name: 'chat', params: { user_id: charity.app_user_id, user: charity } })"
            />
            <q-btn
              class="full-width q-my-md"
              v-if="getDoctorProfile.status == 2"
              v-close-popup
              color="primary"
              label="Appointment"
              size="md"
              @click="$router.push({ path: `appointment/${charity.app_user_id}` })"
            />
            <q-btn
              v-if="getDoctorProfile.status == 0"
              v-close-popup
              color="primary"
              label="Message"
              size="md"
              @click="register = true"
            />
          </div>
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
    <div class="q-pa-sm">
      <div class="q-gutter-y-xs">
        <q-tabs
          v-model="charity_type"
          inline-label
          dense
          active-color="white"
          active-bg-color="red"
          @click="getCharity()"
        >
          <q-tab
            name="doctor"
            label="Doctors"
            no-caps
          />
          <q-tab
            name="clinic"
            label="Clinics"
            no-caps
          />
          <q-tab
            name="ambulance"
            label="Ambulances"
            no-caps
          />
          <q-tab
            name="pharmacy"
            label="Pharmacy"
            no-caps
          />
          <q-tab
            name="lab"
            label="Oxygen"
            no-caps
          />
        </q-tabs>
      </div>
    </div>
    <!-- <div class="q-py-lg">
      <div class="text-h5 q-mb-md">Find your favourited</div>
      <div class="col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4">
        <q-input
          rounded
          outlined
          placeholder="Search"
          v-model="search"
          dense="dense"
          @blur="filter"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              @click="filter"
            />
          </template>
        </q-input>
      </div>
    </div> -->
    <div
      class="q-pa-xs q-gutter-md"
      v-if="charity_type == 'doctor'"
    >
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
                :src="getFile(charity.profile_image.profile_picture)"
                v-if="charity.profile_image"
              />
              <!-- <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                v-else
              /> -->
              <img
                src="~assets/ezcare.png"
                v-else
              />
            </q-avatar>
          </div>
          <div
            class="col-7 column justify-center"
            @click="popup(charity)"
          >
            <div
              class="text-h6"
              v-if="!charity.hide_my_info"
            >{{ charity.name }}</div>
            <div
              class="text-h6"
              v-else
            >EZCare Doctor {{ new Intl.NumberFormat("en", { minimumIntegerDigits: 3,minimumSignificantDigits: 1, useGrouping: false}).format(charity.id) }}</div>
            <div>{{ charity.qualifications }}</div>
          </div>
          <div class="col-2 column justify-center">
            <q-icon
              name="favorite"
              class="border-icon text-white"
              :class="charity.favorite_status ? 'text-black' : 'text-white'"
              size="md"
              @click="favourite(charity.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="q-pa-xs q-gutter-md"
      v-else
    >
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
              <!-- <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                v-else
              /> -->
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
  name: 'AddCharity',
  components: {
    ProfileHeader
  },
  data () {
    return {
      banner: false,
      alert: false,
      card: false,
      doctor_card: false,
      charity: {},
      charities: [],
      search: '',
      message: '',
      tab: '',
      charity_type: 'doctor'
    }
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
    this.getCharity()
  },
  watch: {
    charity_type: function (val) {
      this.getCharity()
    }
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    popup (charity) {
      this.charity = charity
      this.charity_type === 'doctor' ? this.doctor_card = true : this.card = true
    },
    filter () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.get(
        `get_favorite_${this.charity_type}?name=${this.search}`
      ).then((response) => {
        this.charities = response.data.data
      })
    },
    favourite (id) {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api.post(
        `favorite_${this.charity_type}/${id}`
      ).then((response) => {
        this.message = response.data.message
        this.alert = true
        this.getCharity()
      })
    },
    getCharity () {
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.search = ''
      this.$api.get(
        `get_favorite_${this.charity_type}?name=${this.search}`
      ).then((response) => {
        this.charities = response.data.data
      })
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
