 <template>
  <TabBar>
    <TabBarItem path="/home" selectedColor="pink">
      <template v-slot:item-icon>
        <img src="./../assets/imgs/$.png" alt="" />
      </template>
      <template v-slot:item-icon-selected>
        <img src="./../assets/imgs/img.png" alt="" />
      </template>
      <template v-slot:item-title>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/course">
      <template v-slot:item-icon>
        <img src="./../assets/imgs/img.png" alt="" />
      </template>
      <template v-slot:item-icon-selected>
        <img src="./../assets/imgs/img39.png" alt="" />
      </template>
      <template v-slot:item-title>
        <div>选课</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/friends">
      <template v-slot:item-icon>
        <img src="./../assets/imgs/img39.png" alt="" />
      </template>
      <template v-slot:item-icon-selected>
        <img src="./../assets/imgs/img88.png" alt="" />
      </template>
      <template v-slot:item-title>
        <div>朋友圈</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/study">
      <template v-slot:item-icon>
        <img src="./../assets/imgs/img88.png" alt="" />
      </template>
      <template v-slot:item-icon-selected>
        <img src="./../assets/imgs/user.png" alt="" />
      </template>
      <template v-slot:item-title>
        <div>学习</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/mine">
      <template v-slot:item-icon>
        <img src="./../assets/imgs/user.png" alt="" />
      </template>
      <template v-slot:item-icon-selected>
        <img src="./../assets/imgs/$.png" alt="" />
      </template>
      <template v-slot:item-title>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>
 <script>
import TabBar from "./../components/tabBar/TabBar.vue";
import TabBarItem from "./../components/tabBar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
 <style scoped>
</style>
 
 