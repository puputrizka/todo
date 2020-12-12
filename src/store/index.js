import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import todo from "./todo";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todo
  }
});
