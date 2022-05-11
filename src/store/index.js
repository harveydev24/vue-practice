import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
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
  getters: {
    completedTodosCount(state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted;
      }).length;
    },
    allTodosCount(state) {
      return state.todos.length;
    },
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {
      state.todos.push(todoItem);
    },
    DELETE_TODO: function (state, todoItem) {
      const idx = state.todos.indexOf(todoItem);
      state.todos.splice(idx, 1);
    },
    UPDATE_TODO: function (state, todoItem) {
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      });
    },
  },
  actions: {
    createTodo: function ({ commit }, todoItem) {
      commit("CREATE_TODO", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
    updateTodo({ commit }, todoItem) {
      commit("UPDATE_TODO", todoItem);
    },
  },
  modules: {},
});
