import instance from "../../service/http/Request";
import Token from "../../Token";
import MallSearchScreenStore from "../../Stores/MallSearchPageStore";
import MallSearchDataStore from "../../Stores/MallSearchDataStore";

//首页的搜索框请求
const SearchMallPageApi = (navigation: any) => {
    const increaseRecommendationList = MallSearchScreenStore.use.increaseRecommendationHistory()
    const dataAxios = MallSearchDataStore.use.axiosBusinessStoreData()
    const {token} = Token()
    const updateData = MallSearchDataStore.use.update()

    //点击搜索然后请求
    const sendSearchValueHttp = (searchValue: string) => {
        console.log(111)
        console.log("value=" + searchValue)
        //将搜索关键词存入store里
        updateData(searchValue)
        //跳转到商品搜索完的页面
        // navigation.navigate("")

        instance.get(`sh/keyword/${searchValue}`, {
            headers: {
                'Authorization': token,
            }
        }).then(response => {
            const responseData = response.data.data
            responseData.forEach((item: any) => {
                dataAxios({
                    spuId: item.spuId,
                    mainImage: item.mainImage,
                    businessId: item.businessId,
                    subTitle: item.subTitle,
                    price: item.price,
                    businessName: item.businessName,
                    businessLogo: item.businessLogo
                });
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

export default SearchMallPageApi