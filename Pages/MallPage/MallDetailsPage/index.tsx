import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import SpuBaseInfo from "./Components/SpuBaseInfo";
import Business from "./Components/Business";
import Detail from "./Components/Detail";
import MallDetailsPageFoot from "./Components/MallDetailsPageFoot";
import {Box} from "native-base";
import MallStore from "../../../Stores/MallPageStore/MallStore";
import {useEffect} from "react";
import Description from "./Components/Description";

// const data = {
//     business: {
//         businessId: 1,
//         logo: "http://www.artnecthub.com:9000/tonghua-shop/logo/583804d9-36d4-4dc8-bf82-8c5157a31e76.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FVDKOA9i72D32Dpn%2F20231031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231031T110208Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9047e62bfeda57a94ea25170f594e92152131635d48da7318db4403e933a94a9",
//         businessName: "ArtnectHub官方旗舰店"
//     },
//     spuBaseInfo: {
//         spuId: 3,
//         title: "专家级画师的专属画笔，你值得拥有",
//         spuImages: "",
//         price: 0
//     },
//     detail: {
//         description: "这款专业画师笔是专家级绘画者的专属。它的精致刷毛和精湛工艺使得绘画作品达到巅峰。",
//         genericSpec: {
//             "材质": {
//                 "笔杆材质": "雷击木",
//                 "刷毛材质": "优质马毛刷毛"
//             },
//             "型号": {
//                 "马克型号": "3300"
//             }
//         },
//         specialSpec: {
//             "款式": [
//                 "无想的一刀:雷电将军-原神联名",
//                 "雷光凄美:八重神子-原神联名",
//                 "天动万象:岩王帝君-原神联名"
//             ]
//         },
//         packingList: null,
//         afterService: "我们提供60天无条件退货。如有问题，请联系我们的客服。"
//     },
//     skuBaseInfos: [
//         {
//             skuId: 15,
//             price: 999.99,
//             image: "http://www.artnecthub.com:9000/tonghua-spu/sku_image/5fc69f32-1b4c-4c6d-882c-c3195084d13e.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FVDKOA9i72D32Dpn%2F20231031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231031T110208Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=84b97cb7494127b8ff193d35d6424c3638f695cc02b21a9491b8cc8d100d6845"
//         },
//         {
//             skuId: 16,
//             price: 999.99,
//             image: "http://www.artnecthub.com:9000/tonghua-spu/sku_image/81bb26fb-6bda-4dfc-a14e-f0bb9396a208.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FVDKOA9i72D32Dpn%2F20231031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231031T110208Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=df11162c0f3bd3faf7afa1669c03856192dc7fafdd9ab8ea0684db601b43256b"
//         },
//         {
//             skuId: 17,
//             price: 999.99,
//             image: "http://www.artnecthub.com:9000/tonghua-spu/sku_image/e6d941d4-dac9-40ef-b097-2655c90d0917.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FVDKOA9i72D32Dpn%2F20231031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231031T110208Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=03f74d960e7da897a23f110e41b92abcb7dcb1a4d0a0d667d970b826f5d2511f"
//         }
//     ]
// }

//商品详情页
const MallDetailsPage = () => {
    // const addMall = MallStore.use.updateData()
    const store = MallStore.use.data()

    // useEffect(() => {
    //     addMall(data)
    // },[])


    console.log("data: "+JSON.stringify(store))
    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <ScrollView>
                {/*轮播图和商品介绍*/}
                <SpuBaseInfo/>
                {/*商品细节详情*/}
                <Detail/>
                {/*商店*/}
                <Business/>
                {/*描述*/}
                <Description/>
            </ScrollView>
            {/*商店页脚部分*/}
            <Box position="fixed">
                <MallDetailsPageFoot/>
            </Box>
        </SafeAreaView>
    )
}

export default MallDetailsPage