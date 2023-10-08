import createSelectors from "../../utils/zustandSelector";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface storeType {
    searchValue: string,
}

interface SearchScreenStoreType {
    //历史记录
    searchValueList: storeType[],
    //推荐信息
    recommendationHistory: storeType[],
    //添加历史记录
    increase: (searchValue: string) => void
    //删除所有历史记录
    removeSearchValueList: () => void
    //获取后端传过来的推荐信息
    increaseRecommendationHistory: (searchValue: string) => void
}

const SearchScreenStore = createSelectors(create<SearchScreenStoreType>()(persist((set) => ({
    searchValueList: [],

    recommendationHistory: [],

    increase: (searchValue) => set((state) => ({
        searchValueList: [
            ...state.searchValueList,
            {
                searchValue: searchValue
            }
        ],

    })),

    removeSearchValueList: () => set((state) => ({
        searchValueList: []
    })),

    increaseRecommendationHistory: (searchValue) => set((state) => ({
        recommendationHistory: [
            ...state.recommendationHistory,
            {
                searchValue: searchValue
            }
        ]

    })),
    }), {
    //将历史记录searchValueList保存到AsyncStorage
        name: "searchValueList",
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state =>
            Object.fromEntries(
                Object.entries(state).filter(
                    ([key]) => ["searchValueList"].includes(key)
                )
            )
    }
)))

export default SearchScreenStore