import instance from "../../service/http/Request";
import useLoginPageStore from "../../Stores/LoginPageStore";
import SearchScreenStore from "../../Stores/SearchScreenStore";
import WorkSearchPageStore from "../../Stores/WorkSearchPageStore";
import Token from "../../Token";
import WorkDetailsStore from "../../Stores/WorkDetailsStore";

//首页的搜索框请求
const SearchScreenApi = (navigation: any) => {
    const increaseRecommendationList = SearchScreenStore.use.increaseRecommendationHistory()
    const picturesAxios = WorkSearchPageStore.use.axiosPictures()
    const {token} = Token()
    const updateData = WorkSearchPageStore.use.update()

    //点击搜索然后请求
    const sendSearchValueHttp = (searchValue: string) => {
        console.log(111)
        console.log("value=" + searchValue)
        //将搜索关键词存入store里
        updateData(searchValue)
        navigation.navigate("WorkSearchPage")

        instance.post(`artwork/vo/keyword/${searchValue}`,{
            searchValue: searchValue
        },{
           headers: {
               'Authorization': token,
           }
        }).then(response => {
            const responseData = response.data.data
            responseData.forEach((item: any) => {
                picturesAxios({
                    id: item.id,
                    indexLink: item.indexLink,
                    authorId: item.authorId,
                    userName: item.username,
                    likes: item.likes,
                    authorAvatar: item.authorAvatar,
                });
            });
        }).catch(error => {
            console.error("error="+error)
        })
    }

    //获取推荐
    const getRecommendationList = () => {
        instance.get("", {
            headers: {
                'Authorization': token
            }
        }).then(response => {
            console.log("response=" + response)
            //拿到response数据后渲染到搜索区的推荐区域
            increaseRecommendationList(response.data.data)
        }).catch(error => {
            console.log("error:" + error)
        })
    }

    return {sendSearchValueHttp, getRecommendationList}
}

export default SearchScreenApi