<template>
  <div id="circle">
    quanz
    <p>{{ $route.query.name }}</p>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "Circle",
  setup() {
    let route = useRoute()
    console.log(route.query);
  },
};
</script>

<style scoped>
#circle {
  width: 450px;
  height: 600px;
  background-color: firebrick;
}
</style>