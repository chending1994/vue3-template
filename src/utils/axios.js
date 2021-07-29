import axios from 'axios'

const err = (error) => {
  return Promise.reject(error)
}

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL, // api base_url
  timeout: 15000 // 请求超时时间
})

service.interceptors.request.use(config => {
  config.headers['token'] = 'xxxx' // 让每个请求携带自定义 token 请根据实际情况自行修改
  return config
}, err)


service.interceptors.response.use((response) => {
  return response.data
})

export {
  service as axios
}