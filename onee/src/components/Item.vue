<template>
  <li 
  @mouseenter="dealShow(true)"
   @mouseleave="dealShow(false)"
  :style="{backgroundColoc:bgColor}"
  >
    <label for="">
      <input type="checkbox" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-warning" v-show="isShowDelBtn">删除</button>
  </li>
</template>
<script>
export default {
  name: "Item",
  props: {
    todo: Object,
  },
  data() {
    return {
      isShowDelBtn: false,
      bgColor:'#fff'
    };
  },
  methods: {
    dealShow(isShow) {
      this.isShowDelBtn = isShow;
      this.bgColor=isShow?'#ddd':'#fff'
    },
  },
};
</script>
<style scoped>
</style>