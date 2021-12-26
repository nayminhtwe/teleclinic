<template>
  <q-page>
    <!-- <list-header /> -->
    <profile-header />
    <div class="q-pa-md row items-start q-gutter-lg">
        <div class="col-6 text-h6">Blogs ({{ blogs.length }})</div>
        <div class="row q-gutter-sm" v-for="blog in blogs" :key="blog.id">
            <div class="col">
                <img
                    :src="getFile(blog.image)"
                    v-if="blog.image != null"
                    style="height: 150px; max-width: 150px"
                />
                <img
                    src="~assets/ezcare.png"
                    v-else
                    style="height: 150px; max-width: 150px"
                />
            </div>
            <div class="col">
                <div class="blog-heading" v-html="blog.heading"></div>
                <div class="blog-body-trim" v-html="blog.body_trim"></div>
                <div class="read-full-article">
                <q-btn
                    color="deep-orange-10"
                    dense
                    round
                    flat
                    @click="blogdetail(blog.id)"
                    label="Read full article >"
                    no-caps
                ></q-btn>
                </div>
            </div>
        </div>
        <!-- <div>
        <q-dialog v-model="blog_popup" full-width persistent>
            <q-card>
            <q-card-section>
                <img
                :src="getFile(blog.image)"
                v-if="blog.image != null"
                style="height: 200px; width: 100%"
                />
                <img
                src="~assets/ezcare.png"
                v-else
                style="height: 140px; max-width: 150px"
                />
                <div class="text-h6" style="padding: 5px 0" v-html="blog.heading">
                </div>
                <q-separator/>
                <div class="row q-gutter-sm">
                <div class="col row" style="padding: 10px 0">
                    <q-icon class="fas fa-edit"></q-icon>
                    <div> By Admin</div>
                </div>
                <div class="col row" style="padding: 10px 0">
                    <q-icon class="fas fa-calendar-alt"></q-icon>
                    <div>{{blog.created_at}}</div>
                </div>
                </div>
                <div class="text-h7" style="padding: 5px 0" v-html="blog.body">
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn
                flat
                label="Ok"
                color="primary"
                v-close-popup
                />
            </q-card-actions>
            </q-card>
        </q-dialog>
        </div> -->
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantes } from 'src/boot/constantes.js'
import ProfileHeader from 'src/layouts/partials/Header/ProfileHeader.vue'
export default {
  name: 'Blogs',
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
      alert: false,
      view: 'list',
      blogs: [],
      blog_popup: false
    }
  },
  async created () {
    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    await this.$api.get(
      'blog'
    ).then((response) => {
      this.blogs = response.data.data
      console.log(this.blogs)
    })
  },
  methods: {
    getFile (path) {
      return `${constantes.SERVER_MEDIA}${path}`
    },
    blogdetail (id) {
      this.$router.push(`/blog/${id}`)
    }
    // async readBlog () {
    //   await this.$api.get(
    //     'blog'
    //   ).then((response) => {
    //     this.blogs = response.data.data
    //   })
    //   this.blog_popup = true
    // }

  }
}
</script>
<style scoped>
.blog-heading {
  width: auto; /* 133px */
  height: auto; /* 19px */
  overflow: visible;
  /* white-space: pre; */
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.blog-body-trim {
  width: auto; /* 183px */
  height: auto; /* 77px */
  /* white-space: pre; */
  overflow: visible;
  padding-top: 5px;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #969696;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
}

.read-full-article_ {
  width: auto; /* 162px */
  height: auto; /* 19px */
  overflow: visible;
  white-space: pre;
  font-weight: 699;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #cd3700;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
}

/* .q-btn >>> .q-icon {
  font-size: 40px;
  color: purple;
}

.q-btn >>> .block {
  font-size: 12px;
} */
</style>
