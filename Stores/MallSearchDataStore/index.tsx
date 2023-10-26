import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";

export interface dataType {
    //spuId就是商品的spuId
    spuId: string,
    //图片的图像地址
    mainImage: string,
    //老板id
    businessId: string,
    //商品简介
    subTitle: string,
    //商品价格
    price: string,
    //商店名
    businessName: string,
}

//搜索过后的商品
interface MallSearchPageType {
    searchValue: string
    update: (searchValue: string) => void
    businessStoreData: dataType[]
    swiperBusinessStoreData: dataType[]
    axiosBusinessStoreData: (picture: dataType) => void
    axiosSwiperStore: (spuId: string, mainImage: string, businessId: string, subTitle: string, price: string, businessName: string,businessLogo: string) => void
}

const MallSearchDataStore = createSelectors(create<MallSearchPageType>()((set) => ({
    searchValue: "",

    update: (searchValue) => set((state) => ({
        ...state,
        searchValue: searchValue
    })),


    businessStoreData: [],

    swiperBusinessStoreData: [],

    //更新列表
    axiosBusinessStoreData: ({spuId, mainImage, businessId, subTitle, price, businessName}) => set((state) => ({
        businessStoreData: [...state.businessStoreData, {
            spuId: spuId,
            mainImage: mainImage,
            businessId: businessId,
            subTitle: subTitle,
            price: price,
            businessName: businessName,
        }]
    })),
    //暂时用不到
    axiosSwiperStore: (spuId: string, mainImage: string, businessId: string, subTitle: string, price: string, businessName: string,businessLogo:string) => set((state) => ({
        swiperBusinessStoreData: [...state.swiperBusinessStoreData, {
            spuId: spuId,
            mainImage: mainImage,
            businessId: businessId,
            subTitle: subTitle,
            price: price,
            businessName: businessName,
            businessLogo: businessLogo
        }]
    })),
})))

export default MallSearchDataStore