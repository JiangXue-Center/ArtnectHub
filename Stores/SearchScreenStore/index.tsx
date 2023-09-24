import createSelectors from "../../utils/zustandSelector";
import {create} from "zustand";
import { v4 as uuidv4 } from 'uuid';

interface storeType {
    searchValue: string,
    // id: string
}

interface SearchScreenStoreType {
    searchValueList: storeType[],
    increase: (searchValue: string) => void
}

const SearchScreenStore = createSelectors(create<SearchScreenStoreType>()((set) => ({
    searchValueList: [
        { searchValue: "1"}
    ],

    increase: (searchValue) => set((state) => ({
        searchValueList: [
            ...state.searchValueList,
            {
                // id: uuidv4(),
                searchValue: searchValue
            }
        ]
    }))
})))

export default SearchScreenStore