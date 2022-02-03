<template>
  <q-page>
    <home-header :images="cover_images" />
    <!-- content -->
    <div class="row items-start">
      <q-card class="my-card">
          <div class="f-a-qs text-center" style="padding-top: 20px">FAQs</div>
        <q-card-section>
          <div v-for="faq in faqs" :key="faq.id">
            <div class="row no-wrap" style="padding-top: 20px">
              <q-icon
                size="sm"
                name="far fa-question-circle"
                class="q-sm question"
                color="red"
              />
              <div class="text1" v-html="faq.question" />
            </div>
            <div class="row no-wrap" >
              <q-icon
                size="sm"
                name="far fa-comment-dots"
                class="q-sm answer"
                color="teal"
              />
              <div class="text2" v-html="faq.answer" />
            </div>
            <q-separator/>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeHeader from 'src/layouts/partials/Header/HomeHeader.vue'

export default {
  name: 'FAQ',
  components: {
    // ProfileHeader,
    HomeHeader
  },
  computed: {
    ...mapGetters({
      getDoctorProfile: 'doctor/getDoctorProfile',
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  data () {
    return {
      faqs: [],
      cover_images: []
    }
  },
  async created () {
    // cordova.plugins.firebase.messaging.getToken().then(function (token) {
    //   console.log('Got device token: ', token)
    // }).catch(error => {
    //   console.log(error)
    // })

    if (!this.getDoctorProfile.app_user_id) {
      await this.$store.dispatch('doctor/profile')
    }

    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`

    await this.$api.get('cover_images').then(response => {
      console.log(response)
      this.cover_images = response.data.data
    })

    await this.$api.get('faq').then(response => {
      console.log(response)
      this.faqs = response.data.data
    })
  }
}
</script>

<style scoped>
.my-card {
  /* width: 390px; */
  width: 100%;
  height: 100%;
  min-height: 500px;
  /* height: 652px; */
  box-shadow: 2px 2px 22px -5px rgba(0, 0, 0, 0.25);
  background-color: #fdfdfd;
  overflow: visible;
  border-radius: 50px 50px 0px 0px;
}
.f-a-qs {
  width: auto; /* 49px */
  height: auto; /* 24px */
  white-space: pre;
  overflow: visible;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold",
    "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display",
    "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 1.2;
  padding: 10px;
}
.question {
  padding: 0 10px;
}
.text1 {
  width: auto; /* 313px */
  height: auto; /* 48px */
  /* white-space: pre; */
  overflow: visible;
  font-weight: 599;
  font-family: ".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.answer {
  padding: 0 10px;
}
.text2 {
  width: auto; /* 310px */
  height: auto; /* 58px */
  overflow: visible;
  font-family: ".SFNSDisplay", "SFProDisplay-Regular", "SFUIDisplay-Regular", ".SFUIDisplay", "-apple-system", "BlinkMacSystemFont", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
}
</style>
