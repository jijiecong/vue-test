/**
 * 电影数据存储
 * */
// 默认状态 state
const state = {
  hotMovies:['111']
}

// getters
const getters = {
  getHotMovies: state => {
    return state.hotMovies
  }
}

// actions
const actions = {
  setHotMovies({ commit }, data){
    commit('set_hotMovies', data || false)
  }
}

// mutations
const mutations = {
  set_hotMovies(state, data){
    state.hotMovies = data || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
