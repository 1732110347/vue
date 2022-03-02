//引入
import { createRouter, createWebHashHistory } from "vue-router";
import Home from './../components/Home.vue';
import Mine from './../components/Mine.vue';
import News from './../components/News.vue';
import Circle from './../components/Circle.vue';
import MineMsg from './../components/MineMsg.vue';
import MineOrder from './../components/MineOrder.vue';
//创建路由对象
const routes = [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home, meta: { title: '首页' } },
    {
        path: '/mine',
        component: Mine,
        children: [
            { path: 'order', component: MineOrder, meta: { title: '1' } },
            { path: 'msg', component: MineMsg, meta: { title: '2' } },
         
        ]
        , meta: { title: '我的' }
    },
    { path: '/circle', component: Circle, meta: { title: '圈子' } },
    { path: '/news/:id', component: News, meta: { title: '新闻' } },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'current'
})

//全局路由的前置守卫 to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
}
)

//导出路由对象
export default router








