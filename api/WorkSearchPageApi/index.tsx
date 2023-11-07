import Token from "../../Token";
import WorkDetailsStore from "../../Stores/WorkDetailsStore";
import WorkSearchPageStore from "../../Stores/WorkSearchPageStore";
import Request from "../../service/http/Request";

const WorkSearchPageApi = (navigation: any) => {
    const picturesAxios = WorkSearchPageStore.use.axiosPictures()
    const {token} = Token()
    const updateStore = WorkDetailsStore.use.update()
    const store = WorkDetailsStore.use.pictures()
    const {instance} = Request()

    //轮播图的请求
    const swiperPictureApi = () => {
        instance.get("").then(response => {
            console.log("response=" + response)

        }).catch(error => {
            console.error("error=" + error)
        })
    }

    const goToWorkDetailsPageApi = async (id: string) => {
        try {
            const response = await instance.get(`artwork/vo/id/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            const responseData = response.data.data;

            updateStore({
                id: responseData.id,
                authorId: responseData.authorId,
                userName: responseData.username,
                authorAvatar: responseData.authorAvatar,
                caption: responseData.caption,
                tags: responseData.tags,
                imageCollection: responseData.imageCollection,
                publishTime: responseData.publishTime
            });

            console.log("store:" + JSON.stringify(store));
            navigation.navigate("WorkDetailsPage");
        } catch (error) {
            console.error("error:" + error);
        }
        // navigation.navigate("WorkDetailsPage");
    };



    return {swiperPictureApi, goToWorkDetailsPageApi}
}

export default WorkSearchPageApi