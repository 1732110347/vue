<template>
  <div class="tab-bar">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tab-bar {
  background-color: red;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
}

</style>
