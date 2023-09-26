import {Alert, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'
import {Box, Image, Input, Text} from "native-base";
import {useEffect, useState} from "react";
import WorkDetailsStore from "../../../../Stores/WorkDetailsStore";
import {Entypo} from "@expo/vector-icons";
import styleColors from "../../../../styles/styleColors";

//首页轮播图
const {width, height} = Dimensions.get("window")
const AttentionSwiper = ({navigation}: { navigation: any }) => {

    const [isTrue, setIsTrue] = useState(true)

    //对应不同下标设置不同的颜色
    const color = () => {
        return styleColors[Math.floor(Math.random() * styleColors.length)]
    }

    const store = WorkDetailsStore.use.pictures()

    const goSearch = () => {
      Alert.alert("已点击")
    }

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <ScrollView>
                <Swiper
                    showsButtons={false}
                    autoplay={true}
                    style={styles.container}
                    loop={true}
                >
                    {store.imageCollection.map((item) => (
                        <TouchableOpacity>
                            <Image size={400} width={width} source={{uri: item}} alt="啥也没有"/>
                        </TouchableOpacity>
                    ))}
                </Swiper>

                <Box padding={4}>
                    <Text fontSize={18}>{store.caption}</Text>
                    <Box flexDirection="row" padding={2}>
                        {store.tags.map((item) => (
                            <Box mr={2}>
                                <Box backgroundColor={color()} style={[styles.TextStyle]}>
                                    <Text onPress={() => goSearch()} fontSize={14}>#{item}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Text fontSize={10}>{store.publishTime}</Text>
                </Box>

                <Box borderWidth="1" borderColor="gray.300" width={width} height={height}>
                    <Text p={4}>评论2</Text>
                </Box>
            </ScrollView>
            <Box position={"fixed"} backgroundColor="white" style={[styles.buttomTab]} flexDirection="row"
                 alignItems="center" justifyContent="flex-start">
                <Input placeholder="填写" variant="rounded" mb={4} ml={2} p={2} width={width / 2.3}/>
                <Box padding={4}>
                    {isTrue ? <Entypo name="star" size={24} color="black" onPress={() => setIsTrue(!isTrue)}/> :
                        <Entypo name="star-outlined" size={24} color="black" onPress={() => setIsTrue(!isTrue)}/>}
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default AttentionSwiper

const styles = StyleSheet.create({
    container: {
        height: 400
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttomTab: {
        width: width,
        height: 60
    },
    TextStyle: {
        borderRadius: 20,
        padding: 2,
    }
})

