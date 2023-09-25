import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity, Dimensions, View,
} from 'react-native';
import AttentionScreenPicturesStore, {pictureType} from "../../../Stores/AttentionScreenPicturesStore";
import {Box, Divider, Image, VStack} from "native-base";
import {EvilIcons} from "@expo/vector-icons";
import AttentionSwiper from "../../../Layouts/AttentionSwiper";
import AttentionScreenApi from "../../../api/AttentionScreenApi";

const AttentionScreen = ({navigation}: {navigation: any}) => {
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
                            <TouchableOpacity onPress={()=>navigation.navigate("WorkDetailsPage")}>
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
        //暂时注释
        // //轮播图请求
        // swiperPictureApi()
        // //推荐部分请求
        picturesApi()
    }

    const refreshUp = () => {
        setIsFresh(true)
        //暂时注释
        //推荐部分请求
        // picturesApi()
    }

    setTimeout(() => {
        //模拟请求数据
        setIsFresh(false)
    }, 2000)


    return (
        <SafeAreaView style={styles.container}>
            <AttentionSwiper navigation={navigation}/>
            <FlatList
                data={cardStore}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal={false}//水平布局模式
                initialScrollIndex={0}//初始化滚动索引
                initialNumToRender={3}//让数据先加载三条，它会闪一下
                numColumns={2}//指定列数，数据项必须等高 ---- 无法支持瀑布流
                inverted={false}//列表反转
                ListHeaderComponent={<AttentionSwiper navigation={navigation}/>}
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