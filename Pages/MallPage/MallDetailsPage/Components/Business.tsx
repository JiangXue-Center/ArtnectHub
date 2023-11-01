import {Box, Button, Image, Text, VStack} from "native-base";
import {Dimensions, TouchableOpacity} from "react-native";
import {useState} from "react";

const {width, height} = Dimensions.get("window")
const Business = () => {
    const [isTrue, setIsTrue] = useState(false)

    return (
        <Box borderRadius="md" backgroundColor="gray.200" m="4" borderRightRadius={10} borderLeftRadius={10}>
            <VStack>
                <Box flexDirection="row">
                    <Image source={{uri: 'https://static.runoob.com/images/demo/demo3.jpg'}} borderRadius="md" m={2}
                           size={80} h={height / 10} w={width / 6} alt="图片资源丢失"/>
                    <Text mt={2} fontWeight="bold">ArtnectHub官方旗舰店</Text>
                    {isTrue ?
                        <Button mt={2} ml={8} size={8} w={16} rounded={20} backgroundColor="gray.200"
                                onPress={() => setIsTrue(false)}
                        >
                            <Text>√ 已关注</Text>
                        </Button> :
                        <Button mt={2} ml={8} size={8} w={16} rounded={20} backgroundColor="lightBlue.400"
                                onPress={() => setIsTrue(true)}
                        >
                            <Text>+ 关注</Text>
                        </Button>
                    }
                </Box>
                <Box flexDirection="row" w={width}>
                    <Button w={width / 2.2} variant="ghost"><Text>进店逛逛</Text></Button>
                    <Button w={width / 2.2} variant="ghost"><Text>全部宝贝</Text></Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default Business