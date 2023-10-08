import SearchScreenStore from "../../../Stores/SearchScreenStore";
import {Box, Text} from "native-base";
import {StyleSheet, TouchableOpacity} from "react-native";

const SearchHistory = () => {
    const searchValueList = SearchScreenStore.use.searchValueList()

    const removeValueList = SearchScreenStore.use.removeSearchValueList()

    return (
        <Box borderColor="gray.300">
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" padding="4">
                <Text>搜索历史</Text>
                <TouchableOpacity onPress={() => removeValueList()}>
                    <Text>清空历史记录</Text>
                </TouchableOpacity>
            </Box>
            <Box borderColor="gray.300" flexDirection="row" flexWrap="wrap" padding={4}>
                {searchValueList.map((item) => (
                    <Box paddingRight={2} paddingBottom={2}>
                        <Box backgroundColor="gray.300" style={[styles.TextStyle]}>
                            <Text p={2} fontSize={14}>{item.searchValue}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default SearchHistory

const styles = StyleSheet.create({
    TextStyle: {
        borderRadius: 10,
        padding: 2,
    }
})