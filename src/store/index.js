import Vue from 'vue'
import vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(vuex)

export default new vuex.Store({
  state,
  actions,
  getters,
  mutations
})
