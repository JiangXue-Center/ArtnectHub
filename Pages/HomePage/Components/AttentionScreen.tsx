import React, {useEffect, useMemo, useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity, Dimensions, View, Alert,
} from 'react-native';
import AttentionScreenPicturesStore, {pictureType} from "../../../Stores/AttentionScreenPicturesStore";
import {Box, Divider, Image, VStack} from "native-base";
import {EvilIcons} from "@expo/vector-icons";
import AttentionScreenApi from "../../../api/AttentionScreenApi";

const AttentionScreen = ({navigation}: { navigation: any }) => {
    const cardStore = AttentionScreenPicturesStore.use.pictures()
    const [isFresh, setIsFresh] = useState(false)
    const {picturesApi, goToWorkDetailsPageApi} = AttentionScreenApi(navigation)

    useEffect(() => {
        //获取推荐页的图片的信息
        picturesApi()
    }, [navigation]);

    //发送请求去到作品详情页
    const goWorkDetailsPage = ({id}: { id: string, navigation: any }) => {
        //暂时注释
        goToWorkDetailsPageApi(id)
        // navigation.navigate("WorkDetailsPage");
    }
    const Item = ({id, indexLink, authorId, userName, likes, authorAvatar}: pictureType) => {

        return (
            <SafeAreaView>
                <Box borderWidth="1" borderColor="gray.300" borderRadius="lg"
                     width={Dimensions.get("window").width / 2.2} margin={2}>
                    <VStack divider={<Divider/>} height={250} key={id}>
                        <Box>
                            <TouchableOpacity onPress={() => goWorkDetailsPage({id, navigation})}>
                                <Image size={100} height={200}
                                       width={Dimensions.get("window").width / 2.1}
                                       source={{uri: indexLink}}
                                    // 解决图片缓存问题
                                       resizeMethod="resize"
                                       alt="找不到了"
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
                                    source={{uri: authorAvatar}}
                                    alt="同画"
                                    //解决图片缓存问题
                                    resizeMethod="resize"
                                />
                                <Text>{userName}</Text>
                            </View>
                            <View style={{alignItems: "center", justifyContent: "center", borderColor: "gray"}}>
                                <EvilIcons name="heart" size={24} color="black"/>
                                <Text>{likes}</Text>
                            </View>
                        </Box>
                    </VStack>
                </Box>
            </SafeAreaView>
        );
    }

    const renderItem = ({item}: ({ item: any })) => (
        <Item id={item.id} authorId={item.authorId} authorAvatar={item.authorAvatar} likes={item.likes}
              indexLink={item.indexLink} userName={item.userName}/>
    );

    const isLoading = () => {
        //开启加载动画
        setIsFresh(true)
        //暂时注释
        // //推荐部分请求
        picturesApi()
    }

    const refreshUp = () => {
        setIsFresh(true)
        //暂时注释
        //推荐部分请求
        picturesApi()
    }

    setTimeout(() => {
        //模拟请求数据
        setIsFresh(false)
    }, 2000)

    return (
        <SafeAreaView style={styles.container}>
            {/*<AttentionSwiper navigation={navigation}/>*/}
            <FlatList
                data={cardStore}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}//水平布局模式
                initialScrollIndex={0}//初始化滚动索引
                initialNumToRender={20}//让数据先加载20条，它会闪一下
                numColumns={2}//指定列数，数据项必须等高 ---- 无法支持瀑布流
                inverted={false}//列表反转
                // ListHeaderComponent={<AttentionSwiper navigation={navigation}/>}
                // refreshing下拉刷新,true的话下拉刷新的动画会一直存在，加载时调用的函数onRefresh
                refreshing={isFresh}
                onRefresh={() => isLoading()}
                // 上拉刷新
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