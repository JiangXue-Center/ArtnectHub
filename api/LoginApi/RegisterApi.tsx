import instance from "../../service/http/Request";
import axios from "axios";

const RegisterCodeApi = ({certificate,navigation}:{certificate: string,navigation: any}) => {
    console.log("certificate:"+certificate)
    instance.post("http://192.168.103.150:7777/code",{
        certificate: certificate,
        method: 1
    },{
        headers:{
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        console.log("response:"+response.data)
        // navigation.navigate('ForgetPassword')
    }).catch(error => {
        // console.log("error:"+JSON.parse(error))
        console.error("error:"+error)
    })
}

export {RegisterCodeApi}