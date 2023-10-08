import instance from "../../service/http/Request";
import useLoginPageStore from "../../Stores/LoginPageStore";
import SearchScreenStore from "../../Stores/SearchScreenStore";

//首页的搜索框请求
const SearchScreenApi = () => {
    const token = useLoginPageStore.use.Authorization()
    const increaseValve = SearchScreenStore.use.increase()
    const increaseRecommendationList = SearchScreenStore.use.increaseRecommendationHistory()
    const sendSearchValueHttp = (searchValue: string) => {
        console.log(111)
        console.log("value=" + searchValue)
        //将搜索的历史记录存入store里
        increaseValve(searchValue)

        // instance.post(`artwork/vo/keyword/${searchValue}`,{
        //     searchValue: searchValue
        // },{
        //    headers: {
        //        'Authorization': token,
        //    }
        // }).then(response => {
        //     console.log("response="+response)
        //     //从这里拿到response.data后是放到搜索后的列表里
        // }).catch(error => {
        //     console.error("error="+error)
        // })
    }

    const getRecommendationList = () => {
      instance.get("",{
          headers: {
              'Authorization': token
          }
      }).then(response => {
          console.log("response="+response)
          //拿到response数据后渲染到搜索区的推荐区域
          increaseRecommendationList(response.data.data)
      }).catch(error => {
          console.log("error:"+error)
      })
    }

    return {sendSearchValueHttp,getRecommendationList}
}

export default SearchScreenApi