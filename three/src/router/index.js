//引入
import { createRouter, createWebHashHistory } from "vue-router";
const Home = () => import('./../pages/home/Home.vue')
const Course = () => import('./../pages/course/Course.vue')
const Friends = () => import('./../pages/friends/Friends.vue')
const Study = () => import('./../pages/study/Study.vue')
const Mine = () => import('./../pages/mine/Mine.vue')

//创建路由对象
const routes = [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home, meta: { title: '首页' } },
    { path: '/course', component: Course, meta: { title: '选课' } },
    { path: '/friends', component: Friends, meta: { title: '朋友' } },
    { path: '/study', component: Study, meta: { title: '学习' } },
    { path: '/mine', component: Mine, meta: { title: '我的' } },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // linkActiveClass: 'current'
})

//全局路由的前置守卫 to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext
// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     next()
// }
// )

//导出路由对象
export default router








