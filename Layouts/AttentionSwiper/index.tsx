import React, {Component} from 'react'
import {AppRegistry, Dimensions, StyleSheet, Text, View} from 'react-native'

import Swiper from 'react-native-swiper'
import AttentionScreenPicturesStore from "../../Stores/AttentionScreenPicturesStore";
import {Image} from "native-base";

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

const {width} = Dimensions.get("window")

const AttentionSwiper = () => {
    const swiperStore = AttentionScreenPicturesStore.use.pictures()


    return (
        <Swiper
            showsButtons={false}
            autoplay={true}
            style={styles.container}
            loop={true}
        >
            {swiperStore.map((item) => (
                <View>
                    <Image key={item.key} size={200} width={width} source={{uri: item.sources}}/>
                </View>
            ))}
        </Swiper>
    )
}

export default AttentionSwiper

