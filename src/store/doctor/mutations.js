import * as types from './mutation-types'
const mutations = {
  [types.AUTH_REQUEST] (state) {
    state.status = 'loading'
  },

  [types.AUTH_SUCCESS] (state, payload) {
    state.status = 'success'
    state.token = payload.access_token
    state.current = payload.doctor
    state.message = payload.message
  },

  [types.AUTH_ERROR] (state) {
    state.status = 'error'
  },
  [types.PROFILE_REQUEST] (state) {
    state.status = 'loading'
  },

  [types.PROFILE_SUCCESS] (state, payload) {
    state.status = 'success'
    state.current = payload
  },

  [types.PROFILE_ERROR] (state) {
    state.status = 'error'
  }
}

export default mutations
