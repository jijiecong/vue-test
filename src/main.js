/**
 *
 * 主程序入口
 *
 */
//导入样式
import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import App from './App.vue'
//导入路由组件
import router from './router'
//导入请求框架
import request from './request'
//导入element组件
import ElementUI from 'element-ui'
//导入状态管理器
import store from 'store'
//导入plugins自定义插件
import plugins from 'common/plugins'

//使用request
Vue.use(request)
//使用element-ui
Vue.use(ElementUI)
//使用plugins自定义插件
Vue.use(plugins)

new Vue({
  router,
  store,
  ...App
}).$mount('mainbody')
