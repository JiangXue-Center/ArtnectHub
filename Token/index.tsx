import useLoginPageStore from "../Stores/LoginPageStore";

//将token进行封装
const Token = () => {
    const {Authorization} = useLoginPageStore()
    const token = Authorization
    return {token}
}

export default Token