import {Dimensions, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View} from "react-native";
import MallPageStore from "../../Stores/MallPageStore";
import React, {useEffect, useState} from "react";
import {Box, Divider, Image, Text, VStack} from "native-base";
import {dataType} from "../../Stores/MallSearchDataStore";
import {AntDesign} from "@expo/vector-icons";
import ImageViewerComponent from "../../components/ImageViewerComponent";
import useImageVieWerIsTrueStore from "../../Stores/ImageViewerIsTrue";

const DrawingTools = () => {
    const MallStore = MallPageStore.use.businessStoreData()
    const [isFresh, setIsFresh] = useState(false)
    const [zoomImage, setZoomImage] = useState([{url: ""}])
    const setIsTrue = useImageVieWerIsTrueStore.use.updateIsTrue()
    useEffect(() => {
        const formattedImages = MallStore.map(item => ({
            url: item.mainImage
        }))
        setZoomImage(formattedImages)
    },[])

    const Item = ({spuId, mainImage,businessId,subTitle,price,businessName}: dataType) => {
        return (
            <SafeAreaView>
                <Box borderWidth="1" borderColor="gray.300" borderRadius="lg"
                     width={Dimensions.get("window").width / 2.2} margin={2}>
                    <VStack divider={<Divider/>} key={spuId}>
                        <Box>
                            <TouchableOpacity onPress={() => setIsTrue(true)}>
                                <Image size={100} height={200}
                                       width={Dimensions.get("window").width / 2.1}
                                       source={{uri: mainImage}}
                                       alt="图片地址错误"
                                />
                            </TouchableOpacity>
                        </Box>

                        {/*图片放大功能*/}
                        <ImageViewerComponent zoomImage={zoomImage}/>

                        <Box>
                            <Text>{subTitle}</Text>
                            <Text color="red.600" fontSize="20">￥{price}</Text>
                            <TouchableOpacity>
                                <Box alignItems="center" m={1}>
                                    <Box w="92%" backgroundColor="gray.200" justifyContent="space-between"
                                         flexDirection="row" alignItems="center" style={[styles.textType]}>
                                        <Text id={businessId} fontSize={12}>{businessName}</Text>
                                        <AntDesign name="right" size={10} color="black"/>
                                    </Box>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </VStack>
                </Box>
            </SafeAreaView>
        );
    }

    const renderItem = ({item}: ({ item: any })) => (
        <Item spuId={item.spuId} mainImage={item.mainImage} businessId={item.businessId} subTitle={item.subTitle}
              price={item.price} businessName={item.businessName}/>
    );

    const isLoading = () => {
        //开启加载动画
        setIsFresh(true)
        console.log(11111111)
        //暂时注释
        // //轮播图请求
        // swiperPictureApi()
        // //推荐部分请求
        // picturesApi()
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
            <FlatList
                data={MallStore}
                renderItem={renderItem}
                keyExtractor={item => item.spuId}
                horizontal={false}//水平布局模式
                initialScrollIndex={0}//初始化滚动索引
                initialNumToRender={3}//让数据先加载三条，它会闪一下
                numColumns={2}//指定列数，数据项必须等高 ---- 无法支持瀑布流
                inverted={false}//列表反转
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
    textType: {
        borderRadius: 10,
        padding: 2,
    }
});

export default DrawingTools