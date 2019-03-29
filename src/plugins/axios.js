import axios from 'axios'

export default ({ app, router, Vue }) => {
  axios.defaults.baseURL = process.env.API
  axios.defaults.withCredentials = true
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  /**
   * AXIOS 에러 공통 핸들러
   */
  axios.interceptors.response.use(null, ({ response }) => {
    return Promise.resolve(response)
  })

  Vue.prototype.$axios = axios
}
