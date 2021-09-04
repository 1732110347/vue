<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import httpService from "../service/http";

export default {
  name: 'Home',
  data() {
    return {
      count:0
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
     httpService.getData()
  },
}
</script>
