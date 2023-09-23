// //关注界面的轮播图
// import AttentionSwiper from "../../../Layouts/AttentionSwiper";
// import {Alert, Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
// import AttentionScreenPicturesStore from "../../../Stores/AttentionScreenPicturesStore";
// import {Box, Divider, Image, VStack} from "native-base";
// import {useState} from "react";
// import {AntDesign, EvilIcons} from "@expo/vector-icons";
//
// const AttentionScreen = ({navigation}: { navigation: any }) => {
//     const cardStore = AttentionScreenPicturesStore.use.pictures()
//     return (
//         <SafeAreaView>
//             <ScrollView>
//                 <AttentionSwiper/>
//                 <View style={{
//                     flex: 2,
//                     flexDirection: "row",
//                     // columnGap: 2,
//                     flexWrap: "wrap",
//                     alignItems: "center",
//                     justifyContent: "center"
//                 }}>
//                     {cardStore.map((item) => (
//                         <Box borderWidth="1" borderColor="gray.300" borderRadius="lg"
//                              width={Dimensions.get("window").width / 2.2} margin={2}>
//                             <VStack divider={<Divider/>} height={250} key={item.key}>
//                                 <Box>
//                                     <TouchableOpacity>
//                                         <Image size={100} height={200}
//                                                width={Dimensions.get("window").width / 2.1}
//                                                source={{uri: item.sources}}
//
//                                         />
//                                     </TouchableOpacity>
//                                 </Box>
//                                 <Box px="4" pb="4" flexDirection="row" justifyContent="space-between"
//                                      alignItems="center">
//                                     <View>
//                                         <Image
//                                             size={30}
//                                             borderRadius={100}
//                                             // resizeMode="contain"解决图片显示不全的方法
//                                             resizeMode="contain"
//                                             source={{uri: item.userSvg}}
//                                             alt="同画"/>
//                                         <Text>{item.userName}</Text>
//                                     </View>
//                                     <View style={{alignItems: "center", justifyContent: "center", borderColor: "gray"}}>
//                                         <EvilIcons name="heart" size={24} color="black"/>
//                                         <Text>{item.like}</Text>
//                                     </View>
//                                 </Box>
//                             </VStack>
//                         </Box>
//                     ))}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }
//
// export default AttentionScreen


import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity, Dimensions, View, ScrollView, Alert
} from 'react-native';
import AttentionScreenPicturesStore, {pictureType} from "../../../Stores/AttentionScreenPicturesStore";
import {Box, Divider, Image, VStack} from "native-base";
import {EvilIcons} from "@expo/vector-icons";
import AttentionSwiper from "../../../Layouts/AttentionSwiper";
import AttentionScreenApi from "../../../api/AttentionScreenApi";

const AttentionScreen = () => {
    const cardStore = AttentionScreenPicturesStore.use.pictures()
    const [isFresh, setIsFresh] = useState(false)
    const {swiperPictureApi, picturesApi} = AttentionScreenApi()

    const Item = ({key, sources, userId, userName, like, userSvg}: pictureType) => {
        return (
            <SafeAreaView>
                <Box borderWidth="1" borderColor="gray.300" borderRadius="lg"
                     width={Dimensions.get("window").width / 2.2} margin={2}>
                    <VStack divider={<Divider/>} height={250} key={key}>
                        <Box>
                            <TouchableOpacity>
                                <Image size={100} height={200}
                                       width={Dimensions.get("window").width / 2.1}
                                       source={{uri: sources}}
                                />
                            </TouchableOpacity>
                        </Box>
                        <Box px="4" pb="4" flexDirection="row" justifyContent="space-between"
                             alignItems="center">
                            <View>
                                <Image
                                    size={30}
                                    borderRadius={100}
                                    // resizeMode="contain"解决图片显示不全的方法
                                    resizeMode="contain"
                                    source={{uri: userSvg}}
                                    alt="同画"/>
                                <Text>{userName}</Text>
                            </View>
                            <View style={{alignItems: "center", justifyContent: "center", borderColor: "gray"}}>
                                <EvilIcons name="heart" size={24} color="black"/>
                                <Text>{like}</Text>
                            </View>
                        </Box>
                    </VStack>
                </Box>
            </SafeAreaView>
        );
    }
    const renderItem = ({item}: ({ item: any })) => (
        <Item key={item.key} sources={item.sources} userId={item.userId} userName={item.userName} like={item.like}
              userSvg={item.userSvg}/>
    );

    const isLoading = () => {
        //开启加载动画
        setIsFresh(true)
        console.log(11111111)
        swiperPictureApi()
        picturesApi()
    }

    const refreshUp = () => {
        setIsFresh(true)
        picturesApi()
    }

    setTimeout(() => {
        //模拟请求数据
        setIsFresh(false)
    }, 2000)


    return (
        <SafeAreaView style={styles.container}>
            <AttentionSwiper/>
            <FlatList
                data={cardStore}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal={false}//水平布局模式
                initialScrollIndex={0}//初始化滚动索引
                initialNumToRender={3}//让数据先加载三条，它会闪一下
                numColumns={2}//指定列数，数据项必须等高 ---- 无法支持瀑布流
                inverted={false}//列表反转
                ListHeaderComponent={<AttentionSwiper/>}
                //refreshing下拉刷新,true的话下拉刷新的动画会一直存在，加载时调用的函数onRefresh
                refreshing={isFresh}
                onRefresh={() => isLoading()}
                // 上拉刷新,
                onEndReachedThreshold={0.1}//触底比率，0.1表示距离底部还有10%
                onEndReached={() => refreshUp()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});

export default AttentionScreen;