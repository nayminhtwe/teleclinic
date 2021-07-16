export default function () {
  return {
    token: localStorage.getItem('access_token') || '',
    refreshToken: '',
    current: {
      app_user_id: null,
      error_code: null,
      name: null,
      patient_info: null
    },
    status: '',
    message: '',
    errors: []
  }
}
