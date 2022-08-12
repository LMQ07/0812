import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
import main from "./module/main"
import header from "./module/header";
import footer from "./module/footer";
import createPersistedState from "vuex-persistedstate";
export default new Vuex.Store({
  // 开启模块化
  modules: {
    main,
    header,
    footer
  },
  getters: {
    list(state) {
      if (state.footer.condition === 0) {
        return state.main.todoList
      } else if (state.footer.condition === 1) {
        return state.main.todoList.filter(item => !item.done)
      } else { 
        return state.main.todoList.filter(item => item.done)
      }
    },
    sum(state, getter) {
      return   getter.list.length
    },
    checkAll(state, getter) { 
      return getter.list.every(item => item.done === true)
    }
  },
  plugins: [createPersistedState({
    key: "myToDoList",
    paths: ["main"],
    reducer(state) { // 可以指定缓存 具体到摸一个字段
        return {
          // 只储存state中的token
          main: {
            todoList: state.main.todoList,
          }
        };
      },
  })]
})