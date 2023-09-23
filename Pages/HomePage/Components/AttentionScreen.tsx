//关注界面的轮播图
import AttentionSwiper from "../../../Layouts/AttentionSwiper";
import {Dimensions, SafeAreaView, ScrollView, Text, View} from "react-native";
import AttentionScreenPicturesStore from "../../../Stores/AttentionScreenPicturesStore";
import {Box, Divider, Image, VStack} from "native-base";
import {useState} from "react";
import {AntDesign, EvilIcons} from "@expo/vector-icons";

const AttentionScreen = () => {
    const cardStore = AttentionScreenPicturesStore.use.pictures()
    return (
        <SafeAreaView>
            <ScrollView>
                <AttentionSwiper/>
                <View style={{
                    flex: 2,
                    flexDirection: "row",
                    // columnGap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {cardStore.map((item) => (
                        <Box borderWidth="1" borderColor="gray.300" borderRadius="lg" width={Dimensions.get("window").width / 2.2} margin={2}>
                            <VStack divider={<Divider/>} height={250} key={item.key}>
                                <Box>
                                    <Image size={100} height={200}
                                           width={Dimensions.get("window").width / 2.1} source={{uri: item.sources}}/>
                                </Box>
                                <Box px="4" pb="4" flexDirection="row" justifyContent="space-between"
                                     alignItems="center">
                                    <View>
                                        <Image
                                            size={30}
                                            borderRadius={100}
                                            //resizeMode="contain"解决图片显示不全的方法
                                            resizeMode="contain"
                                            source={{uri: item.userSvg}}
                                            alt="同画"/>
                                        <Text>{item.userName}</Text>
                                    </View>
                                    <View style={{alignItems: "center",justifyContent: "center",borderColor: "gray"}}>
                                        <EvilIcons name="heart" size={24} color="black" />
                                        <Text>{item.like}</Text>
                                    </View>
                                </Box>
                            </VStack>
                        </Box>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AttentionScreen

