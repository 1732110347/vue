<template>
  <div>
    <!-- 导航 -->
    <div id="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/mine">我的</router-link>
      <router-link :to="'/news/' + newsId">新闻</router-link>
      <router-link
        :to="{
          path: '/circle',
          query: { name: 'lk', site: 'it.com', age: 10 },
        }"
        >qz</router-link
      >
      <!-- <button @click="home()">shouye</button>
          <button @click="mine()">wde</button> -->
      <!-- <button @click="news()">新闻</button>
          <button @click="circle()">圈子</button> -->
    </div>
    <!-- 路由出口 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// import { useRouter } from "vue-router";
import router from "./router";
import { ref } from "vue";

export default {

  setup() {
    const newsId = ref("lk001");
    // const router = useRouter();
    const home = () => {
      // router.push("/home");
    };
    const mine = () => {
      router.push("/mine");
    };
    const news = () => {
      router.push("/news/" + newsId.value);
    };
    const circle = () => {
      router.push({
        path: "/circle",
        query: { name: "l22k", site: "it.com", age: 10 },
      });
    };
    return {
      home,
      mine,
      newsId,
      news,
      circle,
    };
  },
};
</script>

<style>
</style>
