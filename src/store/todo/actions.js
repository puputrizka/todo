import axios from "axios";

export default {
  async getTodoList({ commit }) {
    // const url = "http://localhost:8000/api/todos";
    const url = "https://jsonplaceholder.typicode.com/todos";
    const config = {
      url,
      method: "get"
    };
    const response = await axios(config);
    commit("setTodoList", response.data);
    return response.data;
  },
  async deleteTodoList({ dispatch }, payload) {
    // const url = "http://localhost:8000/api/todos/" + payload;
    const url = "https://jsonplaceholder.typicode.com/todos/" + payload;
    const config = {
      url,
      method: "delete"
    };
    const response = await axios(config);
    dispatch("getTodoList");
    return response.data;
  },
  async addTodoList({ dispatch }, payload) {
    // const url = "http://localhost:8000/api/todos";
    const url = "https://jsonplaceholder.typicode.com/todos";
    const config = {
      url,
      method: "post",
      data: payload
    };
    const response = await axios(config);
    dispatch("getTodoList");
    return response.data;
  },
  async updateTodoList({ dispatch }, payload) {
    // const url = "http://localhost:8000/api/todos" + payload.id;
    const url = "https://jsonplaceholder.typicode.com/todos/" + payload.id;
    const config = {
      url,
      method: "put",
      data: {
        userId: payload.userId,
        id: payload.id,
        title: payload.title,
        completed: payload.completed
      }
    };
    const response = await axios(config);
    dispatch("getTodoList");
    return response.data;
  }
};
