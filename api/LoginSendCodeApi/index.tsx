import DetermineInputType from "../../components/VerificationCode/DetermineInputTypeCode";
import Request from "../../service/http/Request";

//请求验证码
const LoginSendCodeApi = ({certificate}: { certificate: string }) => {
    const {instance} = Request()
    const method = DetermineInputType(certificate)

    console.log("certificate:" + certificate)

    instance.post("/auth/code", {
        certificate: certificate,
        method: method
    }, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        console.log("response:" + response.data)
    }).catch(error => {
        console.error("error:" + error)
    })


}

export default LoginSendCodeApi