/**
 * 用户信息存储
 */
import * as types from './types'

// 默认状态 state
const state = {
  businessId: null,
  is_login: false,
  user_info: null
}

// getters
const getters = {
  getIsLogin: state => {
    return state.is_login
  },
  getUserInfo: state => {
    return state.user_info
  },
  getBusinessId: state => {
    return state.businessId
  }
}

// actions
const actions = {
  setUser({ commit }, data){
    commit(types.SET_IS_LOGIN, data.login || false)
    commit(types.SET_USER_INFO, data.userInfo || null)
  },
  setUserInfo({ commit }, data){
    commit(types.SET_USER_INFO, data)
  },
  setIsLogin({ commit }, data){
    commit(types.SET_IS_LOGIN, data)
  },
  setBusinessId({ commit }, data){
    commit(types.SET_BUSINESS_ID, data)
  }
}

// mutations
const mutations = {
  [types.SET_BUSINESS_ID](state, data){
    state.businessId = data || null
  },
  [types.SET_IS_LOGIN](state, data){
    state.is_login = data || false
  },
  [types.SET_USER_INFO](state, data){
    state.user_info = data || {}
    state.businessId = data.businessId || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
