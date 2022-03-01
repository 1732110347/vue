<template>
    <div id="news">
      我的
      <p>{{$route.params.id}}</p>
    </div>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name:"News",
    setup(){
        const route =useRoute()
        console.log(route.params.id);
    }
}
</script>

<style scoped>

#news{
    width:450px;
    height: 600px;
    background-color: blue;
}
</style>