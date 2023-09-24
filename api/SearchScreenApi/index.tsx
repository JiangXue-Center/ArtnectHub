import instance from "../../service/http/Request";
import useLoginPageStore from "../../Stores/LoginPageStore";
import SearchScreenStore from "../../Stores/SearchScreenStore";

//首页的搜索框请求
const SearchScreenApi = () => {
    const token = useLoginPageStore.use.Authorization()
    const increaseValve = SearchScreenStore.use.increase()
    const sendSearchValueHttp = (searchValue: string) => {
        console.log(111)
        console.log("value=" + searchValue)

        // console.log("token="+token)

        //写错了，等等回来看
        increaseValve(searchValue)

        // instance.post("",{
        //     searchValue: searchValue
        // },{
        //    headers: {
        //        Authorization: token,
        //        "Content-Type" : ""
        //    }
        // }).then(response => {
        //     console.log("response="+response)
        //     //从这里拿到response.data后放到列表里渲染出来
        //     increaseValve(response.data.data)
        // }).catch(error => {
        //     console.error("error="+error)
        // })
    }

    return {sendSearchValueHttp}
}

export default SearchScreenApi