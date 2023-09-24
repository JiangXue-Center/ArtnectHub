import SearchScreenStore from "../../../Stores/SearchScreenStore";
import {ScrollView, Text} from "react-native";

const SearchHistory = () => {
    const searchValueList = SearchScreenStore.use.searchValueList()
    return (
        <ScrollView>
            {searchValueList.map((item) => (
                <Text>{item.searchValue}</Text>
            ))}
        </ScrollView>
    )
}

export default SearchHistory