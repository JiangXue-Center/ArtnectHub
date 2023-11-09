import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native'
import Swiper from 'react-native-swiper'
import {Image} from "native-base";
import {useEffect} from "react";
import AttentionScreenPicturesStore from "../../../../Stores/AttentionScreenPicturesStore";
import MallStore from "../../../../Stores/MallPageStore/MallStore";
import {material, systemWeights} from "react-native-typography";

//商城详情页的轮播图和商品介绍
const {width} = Dimensions.get("window")
const SpuBaseInfo = () => {
    // const mallStore = MallStore.use.data()
    const spuBaseInfo = MallStore.use.data().spuBaseInfo

    return (
        <View>
            {/*<Swiper*/}
            {/*    showsButtons={false}*/}
            {/*    autoplay={false}*/}
            {/*    style={styles.container}*/}
            {/*    loop={true}*/}
            {/*>*/}
                {/*{spuBaseInfo.map((item) => (*/}
                {/*    <View key={item.id}>*/}
                {/*        <Image size={200} width={width} source={{uri: item.indexLink}} alt="图片资源缺失:mainImages"/>*/}
                {/*    </View>*/}
                {/*))}*/}
                <View>
                    <Image size={200} width={width} source={{uri: spuBaseInfo.spuImages}} alt="图片资源缺失:mainImages"/>
                </View>

            {/*</Swiper>*/}
            <View style={[styles.textContainer]}>
                <View style={[styles.textContainer1]}>
                    {/*prices*/}
                    <Text style={[styles.text1]}>￥{spuBaseInfo.price}</Text>
                    <Text style={[styles.text2]}>起</Text>
                </View>
                <Text style={[material.title,systemWeights.bold]}>
                    {spuBaseInfo.title}
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
        fontWeight: "bold"
    },
    textContainer: {
        margin: 12
    },
    textContainer1: {
        flexDirection: "row",
    },

})

