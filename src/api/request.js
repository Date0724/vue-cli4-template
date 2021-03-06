import axios from 'axios'
// import Qs from 'qs'

const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  // easy-mock服务挂了，暂时不使用了
  // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128'
  timeout: 60000
})

service.interceptors.request.use(config => {
  return config
}, () => {
  return Promise.reject(new Error())
})

service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  } else {
    Promise.reject(new Error())
  }
}, () => {
  return Promise.reject(new Error())
})

export default service
