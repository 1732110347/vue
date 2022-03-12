<template>
  <div>
    <!-- <h2>s{{ $store.state.counter }}</h2>
    <button @click="increment()">1</button>
    <button @click="increment1(23)">2</button> -->
    <h2>{{ $store.state.college }}</h2>
    <button @click="change()">1</button>
     <h2>{{ $store.state.a.name }}</h2>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const change = () => {
      store.commit('CHANGE')
    };
    return {
      counter: computed(() => store.state.counter),
      increment: () => store.dispatch("increment"),
      increment1: (num) => store.dispatch("increment1", num),
      change
    };
  },
};
</script>

<style>
</style>
