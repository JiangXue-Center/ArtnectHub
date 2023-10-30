import {Box, Divider, VStack} from "native-base";
import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {Text} from "native-base";
import {Dimensions, TouchableOpacity} from "react-native";

const {width,height} = Dimensions.get("window")
const Detail = () => {
    return (
        <Box borderRadius="md" backgroundColor="gray.200" m="4" borderRightRadius={10} borderLeftRadius={10}>
            <VStack divider={<Divider />}>
                <Box m="4" flexDirection="row">
                    <MaterialCommunityIcons name="truck-outline" size={24} color="black" />
                    <Box w={width/1.4}>
                        {/**/}
                        <Text ml="4">广东广州 至 广东东莞</Text>
                    </Box>
                    <TouchableOpacity>
                        <Feather name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                </Box>
                <Box m="4" flexDirection="row">
                    <Ionicons name="heart-outline" size={24} color="black" />
                    <Box w={width/1.4}>
                        {/*afterService*/}
                        <Text ml="4">我们提供60天无条件退货。如有问题，请联系我们的客服。</Text>
                    </Box>
                    <TouchableOpacity>
                        <Feather name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                </Box>
                <Box m="4" flexDirection="row">
                    <AntDesign name="appstore-o" size={24} color="black" />
                    <Box w={width/1.4}>
                        {/*specialSpec*/}
                        <Text ml="4">图片 图片 图片 图片 四种款式</Text>
                    </Box>
                    <TouchableOpacity>
                        <Feather name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                </Box>
                <Box m="4" flexDirection="row">
                    <AntDesign name="carryout" size={24} color="black" />
                    <Box w={width/1.4}>
                        {/*genericSpec*/}
                        <Text ml="4">款式 · 适用年龄 · 主要材质 · 尺码</Text>
                    </Box>
                    <TouchableOpacity >
                        <Feather name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                </Box>
            </VStack>
        </Box>
    )
}

export default Detail