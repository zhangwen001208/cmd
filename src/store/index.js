import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import userData from './userdata'
import admin from './admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tab,
    userData,
    admin
  }
})
