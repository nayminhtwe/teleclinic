export default function () {
  return {
    token: localStorage.getItem('access_token') || '',
    refreshToken: '',
    current: null,
    status: '',
    message: '',
    errors: []
  }
}
