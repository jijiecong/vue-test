/**
 * vue的路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/movie/list', name: 'movieList',
    meta: { title: "豆瓣电影" },
    components: { default: () => import('pages/movie/list') },
  },{
    path: '/movie/detail/:id', name: 'movieDetail',
    meta: { title: "电影详情" },
    components: { default: () => import('pages/movie/detail') },
  },{
    path: '/user/list', name: 'userList',
    meta: { title: "用户" },
    components: { default: () => import('pages/user/list') },
  }, {
    path: '/500', name: '500',
    components: { default: () => import('pages/error/500') }
  }, {
    path: '*', name: 'notPage',
    components: { default: () => import('pages/error/404') }
  },

]

const router = new VueRouter({
  routes,
  mode: 'hash', //default: hash ,history
  // 页面滚动 scrollBehavior 方法接收 to 和 from 路由对象。
  // 第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
