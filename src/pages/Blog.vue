<template>
  <q-page>
    <!-- <list-header /> -->
    <profile-header />
    <div class="q-pa-md row items-start q-gutter-lg">
        <q-card>
          <q-card-section>
            <img
              :src="getFile(this.blog.image)"
              v-if="this.blog.image != null"
              style="height: 200px; width: 100%"
            />
            <img
              src="~assets/ezcare.png"
              v-else
              style="height: 200px; width: 100%"
            />
            <div class="text-h6" style="padding: 5px 0" v-html="this.blog.heading">
            </div>
            <q-separator/>
            <div class="row q-gutter-sm">
              <div class="col row" style="padding: 10px 0">
                <q-icon class="fas fa-edit"></q-icon>
                <div>Posted By: Admin</div>
              </div>
              <div class="col row" style="padding: 10px 0">
                <q-icon class="fas fa-calendar-alt"></q-icon>
                <div>{{this.blog.created_at}}</div>
              </div>
            </div>
            <div class="text-h7" style="padding: 5px 0" v-html="this.blog.body">
            </div>
          </q-card-section>
        </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
export default {
  name: 'Blog',
  components: {
    // ListHeader
    ProfileHeader
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  data () {
    return {
      blogId: this.$route.params.blogId,
      blog: ''
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    await this.$api.get(
      `blog_detail/${this.blogId}`
    ).then((response) => {
      this.blog = response.data.data
      console.log(this.blog)
    })
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    }

  }
}
</script>
<style scoped>
/* .q-btn >>> .q-icon {
  font-size: 40px;
  color: purple;
}

.q-btn >>> .block {
  font-size: 12px;
} */
</style>
