<template>
  <div>
    <h2>s{{ $store.state.counter }}</h2>
    <button @click="add()">1</button>
    <button @click="add1(23)">2</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const add = () => {
      store.dispatch("increment");
    };
    const add1 = (num) => {
      store.dispatch("increment1",num);
    };
    return {
      add,
      add1,
    };
  },
};
</script>

<style>
</style>
