import Request from "../../service/http/Request";
import AttentionScreenPicturesStore from "../../Stores/AttentionScreenPicturesStore";
import Token from "../../Token";
import WorkDetailsStore from "../../Stores/WorkDetailsStore";

const AttentionScreenApi = (navigation: any) => {
    const swiperStoreAxios = AttentionScreenPicturesStore.use.axiosSwiperStore()
    const picturesAxios = AttentionScreenPicturesStore.use.axiosPictures()
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

    const picturesApi = () => {
        instance.get("artwork/index", {
            headers: {
                "Authorization": token
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
            console.error("error=" + error)
        })

        // const {data,error,mutate} = useSWR("artwork/index", (url: string) => instance.get(url, {
        //         headers: {
        //             "Authorization": token
        //         }
        //     }).then(response => {
        //         const responseData = response.data.data
        //         responseData.forEach((item: any) => {
        //             picturesAxios({
        //                 id: item.id,
        //                 indexLink: item.indexLink,
        //                 authorId: item.authorId,
        //                 userName: item.username,
        //                 likes: item.likes,
        //                 authorAvatar: item.authorAvatar,
        //             });
        //         });
        //     }).catch(error => {
        //         console.error("error:" + error)
        //     })
        // )
        //
        // return {
        //     data,
        //     error,
        //     isLoading: !error || !data,
        //     reload: mutate
        // }

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
    };


    return {swiperPictureApi, picturesApi, goToWorkDetailsPageApi}
}

export default AttentionScreenApi