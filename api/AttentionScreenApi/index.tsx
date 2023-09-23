import instance from "../../service/http/Request";
import AttentionScreenPicturesStore from "../../Stores/AttentionScreenPicturesStore";

const AttentionScreenApi = () => {
    const swiperStoreAxios = AttentionScreenPicturesStore.use.axiosSwiperStore()

    //轮播图的请求
  const swiperPictureApi = () => {
    instance.get("").then(response => {
        console.log("response="+response)

    }).catch(error => {
        console.error("error="+error)
    })
  }

  const picturesApi = () => {
      instance.get("").then(response => {
          console.log("response="+response)

      }).catch(error => {
          console.error("error="+error)
      })
  }



  return {swiperPictureApi,picturesApi}
}

export default AttentionScreenApi