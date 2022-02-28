<template>
  <div class="todo-footer">
    <label for="">
      <input type="checkbox" name="" id="" />
    </label>
    <span> <span>已完成{{}}件</span>/总计{{todos.length}}件</span>
    <button class="btn btn-warning" @click="delFinishedTodos">清除</button>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props:{
    todos:Array,
    selectedAllTodo:Function,
    delFinishedTodos:Function,
   
  }
};
</script>
<style scoped>
</style>