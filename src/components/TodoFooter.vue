<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{sum}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="footer.condition === 0 ? 'selected':''" href="javascript:;" @click="changeCondition(0)" >全部</a>
      </li>
      <li>
        <a :class="footer.condition === 1 ? 'selected':''" href="javascript:;" @click="changeCondition(1)">未完成</a>
      </li>
      <li>
        <a :class="footer.condition === 2 ? 'selected':''" href="javascript:;" @click="changeCondition(2)">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="cleardone">清除已完成</button>
  </footer>
</template>

<script>

import { mapMutations,mapGetters,mapState} from 'vuex';
export default {
  methods: {
  ...mapMutations("main",["clearDone"]),
    cleardone() {
      console.log(1);
      this.clearDone()
    },
      ...mapMutations("footer",["changeNum"]),
    //  改变当前页面显示是全部还是完成
    changeCondition(num) {
      this.changeNum(num)
      // console.log(this.footer.condition);
    }
  },
  computed: {
    ...mapGetters(["sum"]),
    ...mapState(["footer"])
  }
}
</script>
