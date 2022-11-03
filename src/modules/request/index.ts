import axios from 'axios'

interface RequestOption {
  url: string
  params?: any
  data?: any
}

interface Response<T> {
  data: T
  status: number
}

const api = {
  get: async (option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option

    try {
      const res = await axios.get<T>(url, {
        params,
        data,
      })
      return {
        data: res.data,
        status: res.status,
      }
    } catch (e) {}
  },
}

export default api
