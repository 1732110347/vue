<template>
  <router-view></router-view>
  <main-tab-bar> </main-tab-bar>
</template>

<script>
import MainTabBar from "./components/MainTabBar.vue";


export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/common.css";
</style>
