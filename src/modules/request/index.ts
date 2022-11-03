import axios, { AxiosRequestConfig } from 'axios'
import { NEXT_PUBLIC_RESAS_API_KEY } from '~/const/uri'

interface RequestOption {
  url: string
  params?: any
  data?: any
}

interface Response<T> {
  data: T
  status: number
}

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers['X-API-KEY'] = NEXT_PUBLIC_RESAS_API_KEY
  return config
})

const api = {
  get: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option
    const res = await axios.get<T>(url, {
      params,
      data,
    })
    return {
      data: res.data,
      status: res.status,
    }
  },
}

export default api
