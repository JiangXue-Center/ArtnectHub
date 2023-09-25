import {Box, Center, Image, Text} from "native-base";
import WorkDetailsStore from "../../../../Stores/WorkDetailsStore";

const HeaderTitleLeft = () => {
    //获取title的信息
    const store = WorkDetailsStore.use.pictures()

    return (
        <Box flex={1} flexDirection="row" alignItems={"center"} ml={4}>
            <Center>
                <Image
                    size={50}
                    borderRadius={100}
                    //resizeMode="contain"解决图片显示不全的方法
                    resizeMode="contain"
                    source={{uri: store.authorAvatar}}
                    alt="同画"/>
            </Center>
            <Box pl={4}>
                <Text fontSize={16}>{store.userName}</Text>
            </Box>
        </Box>
    )
}

export default HeaderTitleLeft