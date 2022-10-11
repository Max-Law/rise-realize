import Vue from 'vue';
import Vuex from 'vuex';
import { RiseStore } from 'vue-rise-realize';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    ...RiseStore,
  },
});
