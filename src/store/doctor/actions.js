import * as types from './mutation-types'
import { api, axios } from 'src/boot/axios'

const actions = {
  async register ({ commit }, formData) {
    commit(types.AUTH_REQUEST)
    await axios
      .post('http://188.166.217.32/api/v1/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        commit(types.AUTH_SUCCESS, response.data)
      })
      .catch(err => {
        console.log(err.response.data)
        commit(types.AUTH_ERROR, err.response.data)
        localStorage.removeItem('access_token') // if the request fails, remove any possible user token if possible
      })
  },
  profile ({ commit, getters }) {
    commit(types.PROFILE_REQUEST)
    api.defaults.headers.Authorization = `Bearer ${getters.getDoctorToken}`
    api.get(
      'doctor_profile'
    ).then((response) => {
      commit(types.PROFILE_SUCCESS, response.data.data)
    })
  },
  async login ({ commit }, formData) {
    commit(types.AUTH_REQUEST)
    await axios
      .post('http://188.166.217.32/api/v1/login', formData)
      .then(response => {
        if (response.data.error_code === 0) {
          localStorage.setItem('access_token', response.data.access_token)
          commit(types.AUTH_SUCCESS, response.data)
        }
      })
      .catch(err => {
        commit(types.AUTH_ERROR, err.response.data)
        localStorage.removeItem('access_token') // if the request fails, remove any possible user token if possible
      })
  }
}

export default actions
