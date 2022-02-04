import store from '../store' // your vuex

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['doctor/isAuthenticated']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['doctor/isAuthenticated']) {
    next()
    return
  }
  next('/start/start')
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue'), beforeEnter: ifAuthenticated }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue'), beforeEnter: ifAuthenticated },
      { path: 'profile', component: () => import('pages/Profile.vue'), beforeEnter: ifAuthenticated },
      { path: 'patients', component: () => import('pages/Patients.vue'), beforeEnter: ifAuthenticated },
      { path: 'waitings', component: () => import('pages/Waitings.vue'), beforeEnter: ifAuthenticated },
      { path: 'visited', component: () => import('pages/Visited.vue'), beforeEnter: ifAuthenticated },
      { path: 'add_charity', component: () => import('pages/AddCharity.vue'), beforeEnter: ifAuthenticated },
      { path: 'charity/:type', component: () => import('src/pages/Charity.vue'), beforeEnter: ifAuthenticated },
      { path: 'doctor', component: () => import('src/pages/Doctor.vue'), beforeEnter: ifAuthenticated },
      { path: 'inbox', component: () => import('src/pages/Inbox.vue'), beforeEnter: ifAuthenticated },
      { path: 'chat/:user_id', name: 'chat', component: () => import('src/pages/Chat.vue'), beforeEnter: ifAuthenticated },
      { path: 'favourited', component: () => import('src/pages/Favourited.vue'), beforeEnter: ifAuthenticated },
      { path: 'doctor_wallet', component: () => import('src/pages/DoctorWallet.vue'), beforeEnter: ifAuthenticated },
      { path: 'patient_wallet', component: () => import('src/pages/PatientWallet.vue'), beforeEnter: ifAuthenticated },
      { path: 'transfer_consultation_fee', component: () => import('src/pages/TransferConsultationFee.vue'), beforeEnter: ifAuthenticated },
      { path: 'blogs', component: () => import('pages/Blogs.vue'), beforeEnter: ifAuthenticated },
      { path: 'blog/:blogId', component: () => import('pages/Blog.vue'), beforeEnter: ifAuthenticated },
      { path: 'directory', component: () => import('pages/Directory.vue'), beforeEnter: ifAuthenticated },
      { path: 'donation', component: () => import('pages/Donation.vue'), beforeEnter: ifAuthenticated },
      { path: 'faq', component: () => import('pages/FAQ.vue'), beforeEnter: ifAuthenticated },
      { path: 'appointment/:doctor_id', component: () => import('pages/Appointment.vue'), beforeEnter: ifAuthenticated }
    ]
  },
  {
    path: '/patient',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: ':patientId', component: () => import('pages/Patient.vue'), beforeEnter: ifAuthenticated },
      { path: ':patientId/visit', component: () => import('pages/Visit.vue'), beforeEnter: ifAuthenticated }
    ]
  },
  {
    path: '/start',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'start', component: () => import('pages/Start.vue'), beforeEnter: ifNotAuthenticated },
      { path: 'login', component: () => import('pages/Login.vue'), beforeEnter: ifNotAuthenticated },
      { path: 'register', component: () => import('pages/Register.vue'), beforeEnter: ifNotAuthenticated },
      { path: 'forget_password', component: () => import('pages/ForgetPassword.vue'), beforeEnter: ifNotAuthenticated },
      { path: 'password_reset_otp', component: () => import('pages/PasswordResetOTP.vue'), beforeEnter: ifNotAuthenticated },
      { path: 'new_password/:app_user_id', component: () => import('pages/NewPassword.vue'), beforeEnter: ifNotAuthenticated }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
