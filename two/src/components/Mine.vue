<template>
    <div id="mine">
      我的
      <div>
          <div class="content">
              <div class="content-nav">
                  <router-link to="/mine/order" >订单</router-link><br>
                  <router-link to="/mine/msg" >信息</router-link>
              </div>
              <router-view></router-view>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"Mine"
}
</script>

<style scoped>
#mine{
    width: 600px;
    height: 500px;
    background-color:green ;
 
}
.content{
    display: flex;
}
.content-nav{
    widows: 80px;
    background-color: goldenrod;
}
</style>