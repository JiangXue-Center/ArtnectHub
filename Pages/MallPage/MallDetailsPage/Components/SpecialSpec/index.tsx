import {Dimensions, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {Actionsheet, Box, Button, Divider, Image, Modal, Text, useDisclose, VStack} from "native-base";
import {useState} from "react";
import MallStore from "../../../../../Stores/MallPageStore/MallStore";

const {width, height} = Dimensions.get("window")
const SpecialSpec = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const [getIndexOf, setIndexOf] = useState<number>()

    const mallData = MallStore((state) => state.data)
    const specialSpec = mallData?.detail?.specialSpec
    const skuBaseInfos = mallData?.skuBaseInfos


    const getIndex = (indexof: number) => {
        setIndexOf(indexof)
    }

    const materialNum = Object.keys(specialSpec)

    return (
        <Box m="4" flexDirection="row">
            <AntDesign name="appstore-o" size={24} color="black"/>
            <Box w={width / 1.4}>
                {/*specialSpec*/}
                <Text ml="4">图片 图片 图片 图片 四种款式</Text>
            </Box>
            <TouchableOpacity onPress={() => onOpen()}>
                <Feather name="chevron-right" size={24} color="black"/>
            </TouchableOpacity>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>

                    <Box>
                        <Box w={width} h={height/8}>
                            {
                                skuBaseInfos.map((item, index) => (
                                    <Box flexDirection="row" key={index}>
                                        <Box borderRadius="10" bg="gray.100" w={width / 4} m={2}>
                                            <Image
                                                key={index}
                                                source={{uri: item.image}}
                                                alt="图片"
                                                size="32"
                                                w={width / 4}
                                                h={height / 10}
                                                resizeMode="contain"
                                                display={index === getIndexOf ? "flex" : "none"}
                                            />
                                        </Box>
                                        <Box justifyContent="flex-end" ml={4}>
                                            <Text display={index === getIndexOf ? "flex" : "none"}
                                                  fontWeight="bold"
                                                  color="red.500"
                                                  fontSize="20"
                                            >￥{item.price}</Text>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box flex="1" position="relative">
                            <ScrollView>
                                <Box mt={4}>
                                    {materialNum.map((key, index) => (
                                        <Box key={index} mb={4}>
                                            <VStack divider={<Divider/>}>
                                                <Text fontSize="16" ml={2}>
                                                    {key}
                                                </Text>

                                                <Box>
                                                    {
                                                        specialSpec[key].map((item, indexof) => (
                                                            <TouchableOpacity onPress={() => getIndex(indexof)}
                                                                              key={indexof}>
                                                                <Box borderRadius="20" p={2} m={1}
                                                                     bg={indexof === getIndexOf ? "lightBlue.300" : "gray.200"}>
                                                                    <Text>{item}</Text>
                                                                </Box>
                                                            </TouchableOpacity>
                                                        ))
                                                    }
                                                </Box>
                                            </VStack>
                                        </Box>
                                    ))}
                                </Box>
                            </ScrollView>
                            <Box position="fixed">
                                <TouchableOpacity>
                                    <Box w={width} h={60} bg="lightBlue.300" justifyContent="center"
                                         alignItems="center">
                                        <Text>加入购物车</Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>


                </Actionsheet.Content>
            </Actionsheet>
        </Box>
    )
}

export default SpecialSpec

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        height: height,
        width: width
    },
})