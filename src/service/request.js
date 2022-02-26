//封装网络基本
import axios from "axios";

export default function request(params) {
    if (Object.prototype.toString.call(params) != '[object Object]') {
        throw Error("所传参数必须是对象类型");
    } else {
        //创建axios实例
        const instance = axios.create({
            baseURL: "http://192.168.1.167:3000",
            timeout: 6666
        });
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response.data;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
        return instance(params);
    }
}
