import {Alert, Dimensions, StyleSheet, View, Modal, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import AttentionScreenPicturesStore from "../../Stores/AttentionScreenPicturesStore";
import {Image} from "native-base";
import {useEffect, useState} from "react";
import instance from "../../service/http/Request";
import AttentionScreenApi from "../../api/AttentionScreenApi";
import ImageViewer from "react-native-image-zoom-viewer";
import ImageViewerComponent from "../../components/ImageViewerComponent";
import useImageVieWerIsTrueStore from "../../Stores/ImageViewerIsTrue";

//商城首页轮播图
const {width} = Dimensions.get("window")
const MallPageSwiper = () => {
    const swiperStore = AttentionScreenPicturesStore.use.swiperPictures()
    const swiperStoreAxios = AttentionScreenPicturesStore.use.axiosSwiperStore()
    // const {swiperPictureApi} = AttentionScreenApi()

    // const [isTrue,setIsTrue] = useState(false)
    const [zoomImage, setZoomImage] = useState([{url: ""}])
    const setIsTrue = useImageVieWerIsTrueStore.use.updateIsTrue()


    useEffect(() => {
        //暂时注释
        //轮播图请求
        // swiperPictureApi()
        const formattedImages = swiperStore.map(item => ({
            url: item.indexLink
        }))
        setZoomImage(formattedImages)
    }, []);

    return (
        <View>
            <Swiper
                showsButtons={false}
                autoplay={true}
                style={styles.container}
                loop={true}
            >
                {swiperStore.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity onPress={() => setIsTrue(true)}>
                            <Image size={200} width={width} source={{uri: item.indexLink}} alt="图片资源未找到"/>
                        </TouchableOpacity>
                    </View>
                ))}

            </Swiper>
            {/*图片放大功能*/}
            <ImageViewerComponent zoomImage={zoomImage}/>
        </View>
    )
}

export default MallPageSwiper

const styles = StyleSheet.create({
    container: {
        height: 200
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

