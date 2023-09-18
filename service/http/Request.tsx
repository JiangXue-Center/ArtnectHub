import axios from "axios";
import {BASE_URL, TIMEOUT} from "./Config";
import {ErrorTipApi} from "../../api/errorTip/ErrorTipApi";

/**封装axios文件**/
const instance = axios.create({
    baseURL: "http://192.168.137.8:7777",
    timeout: TIMEOUT
})

/**
 * http request 拦截器
 * **/
instance.interceptors.request.use(
    (config) => {
        console.log("config.data:"+config.data)
        console.log("请求成功")
        return config;
    },
    (err) => {
        //基本进不来
        console.error("请求失败err："+err)
        return Promise.reject(err);
    }
);

/**
 * http response 拦截器
 **/
instance.interceptors.response.use(
    (response) => {
        console.log("请求正确", response)
        return response;
    },
    (err) => {
        //ErrorTipApi未正确进入
        console.log("请求出错")
        ErrorTipApi
        return err
    }
);

export default instance