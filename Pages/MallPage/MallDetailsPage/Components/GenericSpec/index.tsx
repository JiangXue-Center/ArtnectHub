import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {Actionsheet, Box, Divider, Text, useDisclose, VStack} from "native-base";

const {width, height} = Dimensions.get("window")

//款式 · 适用年龄 · 主要材质 · 尺码
const GenericSpec = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const myObject = {
        "材质": {
            "笔杆材质": "雷击木",
            "刷毛材质": "优质马毛刷毛"
        }
    };
    // const materialName = Object.keys(myObject.材质)[1]; // 获取对象的属性名称


    return (
        <Box m="4" flexDirection="row">
            <AntDesign name="carryout" size={24} color="black"/>
            <Box w={width / 1.4}>
                {/*genericSpec*/}
                <Text ml="4">款式 · 适用年龄 · 主要材质 · 尺码</Text>
            </Box>
            <TouchableOpacity onPress={() => onOpen()}>
                <Feather name="chevron-right" size={24} color="black"/>
            </TouchableOpacity>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Box w="100%" h="100%" px={4}>
                        <Box alignItems="center">
                            <Text fontSize="16">
                                产品参数
                            </Text>
                        </Box>

                        <Box mt={8}>
                            <VStack divider={<Divider/>}>
                                <Box mt="4" mb="4">
                                    <Box flexDirection="row">
                                        <Box>
                                            <Text>笔杆材质</Text>
                                        </Box>
                                        <Box ml="10">
                                            <Text>雷击木</Text>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box mt="4" mb="4">
                                    <Box flexDirection="row">
                                        <Box>
                                            <Text>笔杆材质</Text>
                                        </Box>
                                        <Box ml="10">
                                            <Text>雷击木</Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box mt="4" mb="4">
                                    <Box flexDirection="row">
                                        <Box>
                                            <Text>笔杆材质</Text>
                                        </Box>
                                        <Box ml="10">
                                            <Text>雷击木</Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box mt="4" mb="4">
                                    <Box flexDirection="row">
                                        <Box>
                                            <Text>笔杆材质</Text>
                                        </Box>
                                        <Box ml="10">
                                            <Text>雷击木</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </VStack>
                        </Box>
                    </Box>

                </Actionsheet.Content>
            </Actionsheet>
        </Box>
    )
}

export default GenericSpec

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        height: height,
        width: width
    },
})