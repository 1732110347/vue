import { createStore } from 'vuex'

const moduleA = {
    state: () => ({
        name: 'xxxxxx'
    }),
    mutations: {

    },
    actions: {},
}
//创建一个store对象
const store = createStore({
    state: {//全局共享的状态 数据存放
        counter: 0,

    },

    mutations: {//同步提交状态
        INCREMENT(state) {
            state.counter++
        },
        INCREMENT1(state, num) {
            state.counter += num;


        },

    },
    actions: {//提交操作给mutations
        increment({ commit }) {
            commit('INCREMENT')
        },
        increment1({ commit }, num) {
            setTimeout(() => {
                commit('INCREMENT1', num)
            }, 2000)

        }
    },
    modules: {
        a: moduleA
    }
})

//导出
export default store









