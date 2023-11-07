import useLoginPageStore from "../../Stores/LoginPageStore";
import SearchScreenStore from "../../Stores/SearchScreenStore";
import WorkSearchPageStore from "../../Stores/WorkSearchPageStore";
import Token from "../../Token";
import WorkDetailsStore from "../../Stores/WorkDetailsStore";
import {useState} from "react";
import Request from "../../service/http/Request";

//首页的搜索框请求
const SearchScreenApi = (navigation: any) => {
    const increaseRecommendationList = SearchScreenStore.use.increaseRecommendationHistory()
    const picturesAxios = WorkSearchPageStore.use.axiosPictures()
    const {token} = Token()
    const updateData = WorkSearchPageStore.use.update()
    const [num, setNum] = useState(1)
    const {instance} = Request()


    //点击搜索然后请求
    const sendSearchValueHttp = (searchValue: string) => {
        console.log("value=" + searchValue)
        //将搜索关键词存入store里
        updateData(searchValue)
        navigation.navigate("WorkSearchPage")

        instance.get(`artwork/vo/keyword/${searchValue}/offset/${num}/size/20`, {
            headers: {
                'Authorization': token,
            }
        }).then(response => {
            const responseData = response.data.data

            console.log("responseData:" + JSON.stringify(responseData))
            responseData.forEach((item: any) => {
                picturesAxios({
                    id: item.id,
                    indexLink: item.indexLink,
                    authorId: item.authorId,
                    userName: item.username,
                    likes: item.likes,
                    authorAvatar: item.authorAvatar,
                });
                //页数
                setNum(num + 1)
            });
        }).catch(error => {
            console.error("error=" + error)
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