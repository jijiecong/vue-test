/**
 *
 * 自定义插件
 *
 * @Date: 2017/3/23 18:29
 *
 */
import dateFormat from 'common/plugins/date'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import qs from 'qs'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $dateFormat: {
      value: dateFormat
    },
    $NProgress: {
      value: NProgress
    },
    $qs: {
      value: qs
    }
  })
}

export default {
  install
}
