import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// can also create an axios instance specifically for the backend API
// const api = axios.create({ baseURL: 'http://188.166.217.32/api/v1/', headers: { Authorization: '' } })
const api = axios.create({ baseURL: 'http://booking.local/api/v1/', headers: { Authorization: '' } })
Vue.prototype.$api = api

export { axios, api }
