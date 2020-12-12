import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  todoList: []
};

const modules = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

export default modules;
