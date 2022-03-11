<template>
  <div>
    <button @click="getReq()">fa</button>
  </div>
</template>

<script>
import axios from "./http/index.js";
export default {
  setup() {
    const getReq = () => {
      axios(
        "http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001",

        {
          id: "lk001",
          name: "like",
          age: 10,
        }
      )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return {
      getReq,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
