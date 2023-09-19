//失败提示
import {Alert} from "react-native";

export const ErrorTipApi = (err: any) => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                Alert.alert(err.response.data.error.details);
                break;

            case 401:
                Alert.alert("未授权，请登录");
                break;
                //
            case 403:
                Alert.alert("拒绝访问");
                break;

            case 404:
                Alert.alert("请求地址出错");
                break;

            case 408:
                Alert.alert("请求超时");
                break;

            case 500:
                Alert.alert("服务器内部错误");
                break;

            case 501:
                Alert.alert("服务未实现");
                break;

            case 502:
                Alert.alert("网关错误");
                break;

            case 503:
                Alert.alert("服务不可用");
                break;

            case 504:
                Alert.alert("网关超时");
                break;

            case 505:
                Alert.alert("HTTP版本不受支持");
                break;
            default:
                Alert.alert("找不到资源")
        }
    }
}