<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="index"  :index="index" :todo="todo" :del-todo="delTodo" 
  
    />
  </ul>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "List",
  props: {
    todos: Array,
    delTodo:Function
  },
  components: {
    Item,
  },


};
</script>
<style scoped>
</style>