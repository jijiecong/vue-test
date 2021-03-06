/**
 *  axios配置.
 */

//导入模块
import axios from 'axios'
import {result_code} from 'common/request_api'

const install = (Vue) => {
  if (install.installed) return
  install.installed = true

  let $vue = Vue.prototype || Vue
  let h = new Vue().$createElement

  const no_privilege_notify = (url) => {
    let val = h('a',
      {
        attrs: {
          href: url
        },
        style: 'color: teal'
      },
      '您没有拥有操作该功能的权限，如果需要申请点击该提示'
    )
    $vue.$notify.warning({
      title: '权限限制',
      message: val
    })
  }
  //设置默认根地址,请求前缀
  axios.defaults.baseURL = ''
  //设置请求超时设置
  axios.defaults.timeout = 10000
  //设置请求时的header
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

  //添加请求拦截器
  axios.interceptors.request.use(
    (config) => {
      //在发送请求之前做某事
 //     config.url = 'vueApi' + '/rpGhd6BD' + config.url
      config.url = '/api' + config.url
      return config
    },
    (error) => {
      //请求错误时做些事
      return Promise.reject(error)
    }
  )

  /**
   * 添加响应拦截器
   * 判断返回码,做特殊处理
   */
  axios.interceptors.response.use(
    (response) => {
      //没有登录的响应拦截,跳转登录页(登录页地址,后端传入)
      if (response.data.code === result_code.unlogin) {
        $vue.$message.warning('您没有登录，请先前往登录')
        setTimeout(() => {
          window.location.href = response.data.data
        }, 1000)
        return
      }
      return response
    },
    (error) => {
      return error
    }
  )

  //设置axios到Vue上
  Vue.axios = axios

  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios
      }
    },
    $http: {
      get() {
        return axios
      }
    }
  })
}

export default {
  install
}
