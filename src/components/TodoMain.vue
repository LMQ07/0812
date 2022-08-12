<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="item.done ? 'completed' : ''" v-for="item,index in list" :key="index">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="item.done" @change="doneThing(index)"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="clear(index)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import { mapState,mapMutations, mapGetters} from 'vuex';
export default {
  mounted() { 
    console.log(this.todoList);
    console.log(this.list);
  },
  computed: {
    // 获取仓库里面的数据
    ...mapState("main", ["todoList"]),
    ...mapGetters(["list"])
  },
  methods: {
    ...mapMutations("main", ["changeTodo", "removeTodo"]),
    // 修改时间
    doneThing(index) { 
      this.changeTodo(index)
    },
    // 清除事件
    clear(index) {
      this.removeTodo(index)
    } 
  },
}
</script>
