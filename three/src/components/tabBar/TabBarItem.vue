<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isSelected"><slot name="item-icon"> </slot></div>
    <div v-else><slot name="item-icon-selected"> </slot></div>
    <div :style="selectedStyle">
      <slot name="item-title"> </slot>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "TabBarItem",
  props: {
    path: String,
    selectedColor:{
      type:String,
      default:'red'
    }
  },
  setup(props) {
    const router = useRouter();
    const itemClick = () => {
      router.replace(props.path);
    };

    const route = useRoute();
    const isSelected = computed(() => {
      return route.path.includes(props.path);
    });

const selectedStyle=computed(()=>{
  return isSelected.value?{color:props.selectedColor}:{}
})

    return {
      itemClick,
      isSelected,
      selectedStyle
    };
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
.selected {
  font-size: 20px;
  color: yellow;
}
</style>
