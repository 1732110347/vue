<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="./assets/imgs/$.png" alt="">
      <div>首页</div>
    </div>
     <div class="tab-bar-item">
        <img src="./assets/imgs/img.png" alt="">
      <div>课程</div>
    </div>
     <div class="tab-bar-item">
        <img src="./assets/imgs/img39.png" alt="">
      <div>朋友圈</div>
    </div>
     <div class="tab-bar-item">
        <img src="./assets/imgs/img88.png" alt="">
      <div>学习</div>
    </div>
     <div class="tab-bar-item">
        <img src="./assets/imgs/user.png" alt="">
      <div>我的</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
.tab-bar{
  background-color: red;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
}
.tab-bar-item{
  flex: 1;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
</style>
