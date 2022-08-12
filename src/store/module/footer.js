export default {
  namespaced: true,
  state: {
    condition:0 // 0 全部 1未完成 2 已完成
  },
  mutations: {
    changeNum(state, num) {
      state.condition = num
     }
  },
  actions: {}
}