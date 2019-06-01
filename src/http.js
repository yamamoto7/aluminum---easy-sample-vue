import axios from 'axios'
import 'babel-polyfill'

// ルート設定
axios.defaults.baseURL = `http://localhost:3000`
const http = {
  async request (method, url, data) {
    const lowerCaseMethod = method.toLowerCase()
    try {
      return await axios.request({ url, data, method: lowerCaseMethod })
    } catch (err) {
      return Promise.reject(err)
    }
  },

  async get (url) {
    try {
      return await this.request('get', url, {})
    } catch (err) {
      return Promise.reject(err)
    }
  },

  async post (url, data) {
    try {
      return await this.request('post', url, data)
    } catch (err) {
      return Promise.reject(err)
    }
  },

  async put (url, data) {
    try {
      return await this.request('put', url, data)
    } catch (err) {
      return Promise.reject(err)
    }
  },

  async delete (url) {
    try {
      return await this.request('delete', url)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export default http
