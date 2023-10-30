import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native'
import Swiper from 'react-native-swiper'
import {Image} from "native-base";
import {useEffect} from "react";
import AttentionScreenPicturesStore from "../../../../Stores/AttentionScreenPicturesStore";

//商城详情页的轮播图和商品介绍
const {width} = Dimensions.get("window")
const SpuBaseInfo = () => {
    const swiperStore = AttentionScreenPicturesStore.use.swiperPictures()
    const swiperStoreAxios = AttentionScreenPicturesStore.use.axiosSwiperStore()

    return (
        <View>
            <Swiper
                showsButtons={false}
                autoplay={false}
                style={styles.container}
                loop={true}
            >
                {swiperStore.map((item) => (
                    <View key={item.id}>
                        <Image size={200} width={width} source={{uri: item.indexLink}} alt="图片资源缺失:mainImages"/>
                    </View>
                ))}
            </Swiper>
            <View style={[styles.textContainer]}>
                <View style={[styles.textContainer1]}>
                    {/*prices*/}
                    <Text style={[styles.text1]}>￥15</Text>
                    <Text style={[styles.text2]}>起</Text>
                </View>
                <Text style={[styles.text3]}>
                    title:专家级画师的专属画笔，你值得拥有
                </Text>
            </View>
        </View>
    )
}

export default SpuBaseInfo

const styles = StyleSheet.create({
    container: {
        height: 200
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text2: {
        color: "red",
        fontSize: 12,
        margin: 8
    },
    text3: {
        fontSize: 20,
        fontWeight: "bold"
    },
    textContainer: {
        margin: 12
    },
    textContainer1: {
        flexDirection: "row",
    },

})

