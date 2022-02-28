<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="回车"
      v-model="title"
      @keyup.enter="addItem"
    />
  </div>
</template>
<script>
export default {
  name: "Header",
  props:{
    addTodo:Function,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addItem() {
      const title = this.title.trim();
      if (!title) {
        alert("bwk");
        return;
      }
      let todo={title,finished:false}
      this.addTodo(todo)
      this.title=''
    },
  },
};
</script>
<style scoped>
</style>