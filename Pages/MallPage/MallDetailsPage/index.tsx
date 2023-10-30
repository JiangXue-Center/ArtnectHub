import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import SpuBaseInfo from "./Components/SpuBaseInfo";
import Business from "./Components/Business";
import Detail from "./Components/Detail";
import MallDetailsPageFoot from "./Components/MallDetailsPageFoot";
import {Box} from "native-base";

//商品详情页
const MallDetailsPage = () => {
    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <ScrollView>
                {/*轮播图和商品介绍*/}
                <SpuBaseInfo/>
                {/*商品细节详情*/}
                <Detail/>
                {/*商店*/}
                <Business/>
            </ScrollView>
            {/*商店页脚部分*/}
            <Box position="fixed">
                <MallDetailsPageFoot/>
            </Box>
        </SafeAreaView>
    )
}

export default MallDetailsPage