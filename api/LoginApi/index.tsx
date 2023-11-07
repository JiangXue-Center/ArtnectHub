import useLoginPageStore from "../../Stores/LoginPageStore";
import Request from "../../service/http/Request";


const LoginApi = () => {
    const {setToken} = useLoginPageStore()
    const {instance} = Request()
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
            setToken(response.data.data.Authorization)
            navigation.navigate("HomePageRoute")
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
            navigation.navigate("HomePageRoute")
        }).catch(error => {
            console.error("error=" + error)
        })
    }

    return {codeLoginMethod, passwordLoginMethod}
}

export default LoginApi