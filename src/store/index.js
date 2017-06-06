/**
 * 状态管理器
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import movie from  './modules/movie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    movie,
  }
})
