import axios from 'axios'
export default {
    getData() {
        axios({
            method: "post",
            url: "/api/getData",
            data: { name: "jack" },
        })
            .then((response) => {
                //这里使用了ES6的语法
                console.log(response); //请求成功返回的数据
            })
            .catch((error) => {
                console.log(error); //请求失败返回的数据
            });
    }
}
