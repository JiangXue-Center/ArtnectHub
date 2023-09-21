//关注界面的轮播图
import AttentionSwiper from "../../../Layouts/AttentionSwiper";
import {Dimensions, SafeAreaView, ScrollView, View} from "react-native";
import AttentionScreenPicturesStore from "../../../Stores/AttentionScreenPicturesStore";
import {Box, Divider, Image, VStack} from "native-base";

const AttentionScreen = () => {
    const cardStore = AttentionScreenPicturesStore.use.pictures()
    return (
        <SafeAreaView>
            <ScrollView>
                <AttentionSwiper/>
                <View style={{flex: 2, flexDirection: "row",flexWrap: "wrap",alignItems: "center",justifyContent: "center"}}>
                    {cardStore.map((item) => (
                        <Box borderWidth="1" borderRadius="md" width={Dimensions.get("window").width/2.2} margin={2}>
                            <VStack divider={<Divider />} height={250} key={item.key}>
                                <Box>
                                    <Image resizeMode="contain" size={100} height={200} width={Dimensions.get("window").width/2.1} source={{uri: item.sources}} />
                                </Box>
                                <Box px="4" pb="4">
                                    GeekyAnts
                                </Box>
                            </VStack>

                            <VStack divider={<Divider />} height={200} key={item.key}>
                                <Box>
                                    <Image resizeMode="contain" size={100} height={150} width={Dimensions.get("window").width/2.1} source={{uri: item.sources}} />
                                </Box>
                                <Box px="4" pb="4">
                                    GeekyAnts
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

