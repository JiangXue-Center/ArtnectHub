import instance from "../../service/http/Request";
import DetermineInputType from "../../components/VerificationCode/DetermineInputTypeCode";
import useLoginPageStore from "../../Stores/LoginPageStore";

//请求验证码
const SendCode = ({certificate}: { certificate: string }) => {

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

export {SendCode}