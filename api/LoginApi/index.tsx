import RequestHttp from "../../service/http/Request";
import useLoginPageStore from "../../Stores/LoginPageStore";

const LoginApi = () => {
    const {instance} = RequestHttp()
    const {setToken} = useLoginPageStore()
    //验证码登陆
    const codeLoginMethod = ({data, method, navigation}: { data: any, method: string, navigation: any }) => {
        console.log("data=" + data.certificate)
        instance.post("/auth/login", {
            certificate: data.certificate,
            verifyCode: data.verifyCode,
            method: method
        }).then(response => {
            console.log("token="+response.data.data.Authorization)
            //获取token
            // navigation.navigate("HomePageRoute")
        }).catch(error => {
            console.error(error)
        })
    }

    const passwordLoginMethod = ({data, method, navigation}: { data: any, method: string, navigation: any }) => {
        console.log("data="+data.certificate)
        instance.post("/auth/login", {
            certificate: data.certificate,
            verifyCode: data.verifyCode,
            method: method
        }).then(response => {
            //获取token
            setToken(response.data.data.Authorization)
            // navigation.navigate("HomePageRoute")
        }).catch(error => {
            console.error("error=" + error)
        })
    }

    return {codeLoginMethod, passwordLoginMethod}
}

export default LoginApi