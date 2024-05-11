import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";

interface dataType {
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

interface updateStoreType {
    data: dataType[]
}

//搜索过后的商品
interface MallSearchPageType {
    searchValue: string
    // 搜索后将searchValue进行更新
    update: (searchValue: string) => void
    // 将商品放入businessStoreData，并且将data进行展示
    businessStoreData: dataType[]
    // 轮播图，暂时用不到
    swiperBusinessStoreData: dataType[]
    // 通过这个函数将请求到的数据添加到businessStoreData里
    axiosBusinessStoreData: (data: dataType) => void
    //通过这个函数将请求到的数据更新到这里

    // 请求轮播图的数据，暂时用不到
    axiosSwiperStore: (spuId: string, mainImage: string, businessId: string, subTitle: string, price: string, businessName: string,businessLogo: string) => void
}

const MallPageStore = createSelectors(create<MallSearchPageType>()((set) => ({
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

export default MallPageStore