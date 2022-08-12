<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="msg"
      @keyup.enter="btn"
    />
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
// 第四种
// const { mapMutations} = createNamespacedHelpers("header")
export default {
  data() {
    return {
      msg: this.$store.state.header.todoThing
    }
  },
  methods: {
    // 第二种
    // ...mapMutations(['header/changeThing']),
    // 第三种
    ...mapMutations("header", ["changeThing"]),
      ...mapMutations("main",["addTodo"]),
    // 第四种
    // ...mapMutations(["changeThing"]),
    btn() { 
      // 第一种方法
      // this.$store.commit("header/changeThing",this.msg)
      // 第二种
      // this['header/changeThing'](this.msg)
      // 第三第四种
      this.changeThing(this.msg)
       // 触发添加列表的事件
      this.addTodo({
        name: this.msg,
        
      })
      this.msg = ""

     
    }
  }
}
</script>
