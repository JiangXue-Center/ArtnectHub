import instance from "../../service/http/Request";
import DetermineInputType from "../../components/VerificationCode";

//请求验证码
const SendCode = ({certificate}) => {

    const method = DetermineInputType(certificate)

    console.log("certificate:" + certificate)

    instance.post("http://192.168.103.150:7777/code", {
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

//在设置密码进行下一步操作
const ResetPasswordNextStep = (data,navigation) => {
    instance.post("",{
        certificate: data.certificate,
        code: data.code
    }).then(response => {
        console.log("response:"+response)
        navigation.navigate("RestPassword")
    }).catch(error => {
        console.error("error:"+error)
    })
}

export {SendCode,ResetPasswordNextStep}