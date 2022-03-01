//引入
import { createRouter,createWebHashHistory  } from "vue-router";
import Home from './../components/Home.vue';
import Mine from './../components/Mine.vue';
import News from './../components/News.vue';
import Circle from './../components/Circle.vue';
import MineMsg from './../components/MineMsg.vue';
import MineOrder from './../components/MineOrder.vue';
//创建路由对象
const routes =[
    {path:'/',redirect:'home'},
    {path:'/home',component:Home},
    {
        path:'/mine',
        component:Mine,
        children:[
            {path:'msg',component:MineMsg},
            {path:'order',component:MineOrder}
        ]
    },
    {path:'/circle',component:Circle},
    {path:'/news/:id',component:News},
]

const router=createRouter({
    history:createWebHashHistory(),
    routes,
    linkActiveClass:'current'
})
//导出路由对象
export default router








