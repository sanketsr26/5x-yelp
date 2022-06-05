import axios from "axios"
import applyCaseMiddleware from "axios-case-converter"
import config from "./config"

const Axios = axios.create({
  baseURL: "http://localhost:8081/https://api.yelp.com/v3",
  timeout: 30 * 1000
})

Axios.interceptors.request.use(
  async cfg => {
    const { YELP_API_SECRET } = config
    cfg.headers.Authorization = `Bearer ${YELP_API_SECRET}`
    return cfg
  },

  error => {
    return Promise.reject(error)
  }
)

const CustomAxios = applyCaseMiddleware(Axios)

export default CustomAxios
