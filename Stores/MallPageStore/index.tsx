import createSelectors from "../../utils/zustandSelector";
import {create} from "zustand";
import {dataType} from "../MallSearchDataStore";

interface MallPageStoreType {
    pictureList: dataType[]
}

const MallPageStore = createSelectors(create<MallPageStoreType>()((set) => ({
    pictureList: [
        {
            spuId: "1",
            mainImage: 'https://static.runoob.com/images/demo/demo3.jpg',
            businessId: '1',
            subTitle: "啥也不是",
            price: "78",
            businessName: "什么东西",
            businessLogo: "https://static.runoob.com/images/demo/demo3.jpg"
        },
        {
            spuId: "2",
            mainImage: 'https://static.runoob.com/images/demo/demo3.jpg',
            businessId: '2',
            subTitle: "啥也不是1",
            price: "78",
            businessName: "什么东西1",
            businessLogo: "https://static.runoob.com/images/demo/demo3.jpg"
        }
    ],

})))

export default MallPageStore