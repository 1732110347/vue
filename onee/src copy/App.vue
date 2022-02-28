<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 头部 -->
      <Header :add-todo="addTodo" />
      <!-- 列表 -->
      <List :todos="todos" :del-todo="delTodoWithIndex"  />
      <!-- 尾部 -->
      <Footer
        :todos="todos"
        :del-finished-todos="delFinishedTodos"
        :selected-all-todo="selectedAllTodo"
      />
    </div>
  </div>
</template>

<script>
// 引入组件
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  data() {
    return {
      todos: [
        { title: "dyc", finished: false },
        { title: "ppq", finished: false },
        { title: "ymq", finished: false },
      ],
    };
  },
  methods: {
    delTodoWithIndex(index) {
      console.log(this.todos[index].finished);
      this.todos.splice(index, 1);
    },
    addTodo(todo) {
      this.todos.unshift(todo);
    },
  
    selectedAllTodo(isChecked) {
      this.todos.forEach((todo) => {
        todo.finished = isChecked;
      });
    },
    delFinishedTodos() {
      this.todos = this.todos.filter((todo) => {
        return ! todo.finished;
      });
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 8px 10px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.btn-warning {
  color: #fff;
  background-color: orange;
  border: none;
}
.btn-warning:hover {
  color: #fff;
  background-color: red;
}
.btn:focus {
  outline: none;
}

/* app */
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* header */
.to-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.75),
    0 0 8px rgba(255, 0, 0, 0.6);
}

/* main */
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  line-height: 20px;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}

/* footer */
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style> 
 