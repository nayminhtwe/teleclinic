const getters = {
  isAuthenticated: state => !!state.token,
  getDoctorToken: state => state.token,
  getDoctorProfile: state => state.current,
  status: state => state.status
}

export default getters
