import axios from "axios";

//请求拦截
axios.interceptors.request.use((config)=>{
    config.abc='xx'
    return config;
},(error)=>{
    return Promise.error(error)
})



export default function ajax(url = '', params = '', type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise
        // 判断请求类型
        if (type.toUpperCase() === 'GET') {
            promise = axios({
                url: url,
                params
            })

        } else if (type.toUpperCase() === 'POST') {
            promise = axios({
                method: 'post',
                url,
                data: params
            })
        }
        //返回处理
        promise.then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}