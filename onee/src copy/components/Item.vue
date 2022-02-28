<template>
  <li
    @mouseenter="dealShow(true)"
    @mouseleave="dealShow(false)"
    :style="{ backgroundColor: bgColor }"
  >
    <label for="">
      <input type="checkbox"  />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-warning" v-show="isShowDelBtn" @click="delItem">
      删除
    </button>
  </li>
</template>
<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    index: Number,
    delTodo: Function,
  },
  data() {
    return {
      isShowDelBtn: false,
      bgColor: "#fff",
  
    };
  },
  methods: {
  
    dealShow(isShow) {
      this.isShowDelBtn = isShow;
      this.bgColor = isShow ? "#ddd" : "#fff";
    },
    delItem() {
      if (window.confirm("确定吗")) {
        this.delTodo(this.index);
      }
    },
  },

};
</script>
<style scoped>
</style>