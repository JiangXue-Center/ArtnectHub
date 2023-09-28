import createSelectors from "../../utils/zustandSelector";
import {create} from "zustand";
import {v4 as uuidv4} from 'uuid';

interface storeType {
    searchValue: string,
}

interface SearchScreenStoreType {
    searchValueList: storeType[],
    recommendationHistory: storeType[],
    increase: (searchValue: string) => void
    increaseRecommendationHistory: (searchValue: string) => void
}

const SearchScreenStore = createSelectors(create<SearchScreenStoreType>()((set) => ({
    searchValueList: [],

    recommendationHistory: [
        {searchValue: "什么也不是"},
        {searchValue: "啥？"},
        {searchValue: "什么也不是"},
        {searchValue: "啥？"},
        {searchValue: "什么也不是"},
        {searchValue: "啥？"},
        {searchValue: "什么也不是"},
        {searchValue: "啥？"},
        {searchValue: "什么也不是"},
        {searchValue: "啥？"},
    ],

    increase: (searchValue) => set((state) => ({
        searchValueList: [
            ...state.searchValueList,
            {
                searchValue: searchValue
            }
        ]
    })),

    increaseRecommendationHistory: (searchValue) => set((state) => ({
        searchValueList: [
            ...state.searchValueList,
            {
                searchValue: searchValue
            }
        ]
    })),
})))

export default SearchScreenStore