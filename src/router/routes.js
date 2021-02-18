import store from '../store' // your vuex

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['doctor/isAuthenticated']) {
    next()
    return
  }
  next('/home')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['doctor/isAuthenticated']) {
    next()
    return
  }
  next('/login/login')
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue'), beforeEnter: ifAuthenticated },
      { path: 'profile', component: () => import('pages/Profile.vue'), beforeEnter: ifAuthenticated }
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
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue'), beforeEnter: ifNotAuthenticated },
      { path: 'register', component: () => import('pages/Register.vue'), beforeEnter: ifNotAuthenticated }
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
