import { Center, Image, View,Text, Flex } from "native-base"
import MallStore from "../../../../../Stores/MallPageStore/MallStore"

const MallDetailsPageTitle = () => {
    const store = MallStore.use.data()
    return (
        <View display="flex" flexDirection="row" alignItems="center">
            <Image
                size={10}
                borderRadius={100}
                //resizeMode="contain"解决图片显示不全的方法
                resizeMode="contain"
                source={{uri: store.business.logo}}
                alt="同画" />
            <Text fontSize="xl">商品详情页</Text>
        </View>
    )
} 

export default MallDetailsPageTitle