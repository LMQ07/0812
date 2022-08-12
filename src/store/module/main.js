export default {
  namespaced: true,
  state: {
    todoList: [{
      name: "吃饭",
      done:true
    }]
  },
  mutations: {
    // 添加
    addTodo(state, payload) {
      state.todoList.unshift(payload)
     },
    // 修改
    changeTodo(state, index) { 
      state.todoList[index].done = !state.todoList[index].done
    },
    // 删除
    removeTodo(state, index) {
      state.todoList.splice(index, 1)
    },
    // 清空已完成
    clearDone(state) {
      state.todoList= state.todoList.filter(item => !item.done)
    },
    // 修改全选
    changeAll(state, condition) { 
      state.todoList.forEach(element => {
        element.done= condition
      });
    },
  },
  actions: {}
}