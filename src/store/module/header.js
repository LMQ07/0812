export default {
  namespaced: true,
  state: {
    todoThing:""
  },
  mutations: {
    changeThing(state, newTodo) {
      console.log(newTodo);
      state.todoThing = newTodo
     }
  },
  actions: {}
}