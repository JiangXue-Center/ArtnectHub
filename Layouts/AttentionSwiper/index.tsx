import {Alert, Dimensions, StyleSheet, View} from 'react-native'
import Swiper from 'react-native-swiper'
import AttentionScreenPicturesStore from "../../Stores/AttentionScreenPicturesStore";
import {Image} from "native-base";
import {useEffect} from "react";
import instance from "../../service/http/Request";
import AttentionScreenApi from "../../api/AttentionScreenApi";

//首页轮播图
const {width} = Dimensions.get("window")
const AttentionSwiper = () => {
    const swiperStore = AttentionScreenPicturesStore.use.swiperPictures()
    const swiperStoreAxios = AttentionScreenPicturesStore.use.axiosSwiperStore()
    const {swiperPictureApi} = AttentionScreenApi()

    useEffect(() => {
        //暂时注释
        //轮播图请求
        // swiperPictureApi()
    }, []);

    return (
        <Swiper
            showsButtons={false}
            autoplay={true}
            style={styles.container}
            loop={true}
        >
            {swiperStore.map((item) => (
                <View key={item.key}>
                    <Image size={200} width={width} source={{uri: item.sources}}/>
                </View>
            ))}
        </Swiper>
    )
}

export default AttentionSwiper

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

