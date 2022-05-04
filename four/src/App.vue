<template>
  <input type="text" class="a" />
  <div class="c">
    <van-search v-model="value" placeholder="请输入搜索关键词" class="b" />
  </div>
  <!-- <van-button class="btn" type="primary" @click="TipDialog"
    >提示弹出框</van-button
  >
  <van-button class="btn" type="primary" @click="Dialog"
    >（确认、取消）的弹出框</van-button
  >
  <div>
    <h3>同一个for循环列表,绑定不同的点击事件</h3>
    <div class="list" v-for="(item, index) in items" :key="index">
      <p>{{ item.title }}：{{ item.styl }}</p>
      <button type="button" @click="update(item.num)">更新</button>
    </div>
  </div>
  <ul v-for="(item, index) in aaa" :key="index">
    <li @click="up(item.num)">{{ item.num }}</li>
  </ul> -->



  
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const value = ref("");
    return {
      value,
      items: [
        {
          id: "001",
          title: "更新1",
          styl: "更新一内容",
          num: "updateone",
        },
        {
          id: "002",
          title: "更新2",
          styl: "更新二内容",
          num: "updatetwo",
        },
      ],
      aaa: [
        {
          num: 1,
        },
        {
          num: 2,
        },
      ],
    };
  },
  methods: {
    up(methodsNums) {
      //触发这个参数的方法
      this[methodsNums]();
    },
   
    1() {
      console.log("更新1");
    },
    2() {
      console.log("更新2");
    },
    update(methodsNums) {
      //触发这个参数的方法
      this[methodsNums]();
    },
    updateone() {
      console.log("更新1");
    },
    updatetwo() {
      console.log("更新2");
    },
    //  提示弹出框
    TipDialog() {
      this.$dialog
        .alert({
          // title:'标题呀',
          message: "弹框内容",
        })
        .then(() => {
          console.log("点击了确认");
          console.log(this.value);
        });
    },

    //（确认、取消）的弹出框
    Dialog() {
      this.$dialog
        .confirm({
          title: "标题奥",
          message: "哈哈哈哈，嗯嗯，Just do it",
          confirmButtonColor: "red",
        })
        .then(() => {
          console.log("点击了确认");
        })
        .catch(() => {
          console.log("点击了取消");
        });
    },
  },
};
</script>

<style scoped>


.van-search__content{
    background: yellow !important;
}
.van-cell ::v-deep .van-button {
  background: yellow;
}
.a {
  background: yellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.van-search__content {
 background: yellow !important;
}
</style>
