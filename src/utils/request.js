import axios from 'axios'

let instance = axios.create({
    baseURL: '/api',
    timeout: 3000
})

instance.interceptors.request.use(config=>{
    let url = config.url
    let data = config.data
    console.log("url-->" + url + ", data->" + data);
    if(url !== "get_token"){
        let token = localStorage.getItem("token")
        config.headers["x-access-token"] = token
        console.log("token->"+token);
    }
    return config
})

instance.interceptors.response.use(res=>{
    //请求成功对响应数据做处理

    let data = res.data
    console.log("响应-->"+JSON.stringify(data));
    return data //该返回对象会传到请求方法的响应对象中
},err=>{
    return Promise.reject(err);
})

export default instance
