import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "todo1",
        isCompleted: false,
        date: new Date().getTime(),
      },
      {
        title: "todo2",
        isCompleted: false,
        date: new Date().getTime(),
      },
    ],
  },
  getters: {},
  mutations: {
    CREATE_TODO: function (state, todoItem) {
      state.todos.push(todoItem);
    },
    DELETE_TODO: function (state, todoItem) {
      const idx = state.todos.indexOf(todoItem);
      state.todos.splice(idx, 1);
    },
  },
  actions: {
    createTodo: function ({ commit }, todoItem) {
      commit("CREATE_TODO", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
  },
  modules: {},
});
