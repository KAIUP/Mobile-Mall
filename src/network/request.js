//封装axios
import axios from 'axios'
export function request(config) {
  const AxiosOne = axios.create({
    baseURL: "http://106.54.54.237:8000/api/wh",
    // timeout: 5000
  })

  // AxiosOne.interceptors.request.use(config => {
  //   return config
  // }, err => {
  //   console.log(err);

  // })
  // AxiosOne.interceptors.response.use(result => {

  //   return result
  // }, err => {
  //   console.log(err);

  // })
  return AxiosOne(config)
}