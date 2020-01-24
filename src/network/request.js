import axios from 'axios'

export function request(config){

    //创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })


    //请求拦截器
    instance.interceptors.request.use(config =>{

        return config;
    },err =>{
        return err;
    })

    //响应拦截器
    instance.interceptors.response.use(res =>{

        //返回data数据
        return res.data
    },err =>{
        if(err && err.response){
            switch (err.response.status) {
                case 404:   
                        err.message="路径资源找不到，错误！"
                    break;
                case 401:   
                        err.message="未授权！"
                    break;
                default:
                    break;
            }
            return err;
        }
    })

    //3、发送网络请求
    instance(config)
}