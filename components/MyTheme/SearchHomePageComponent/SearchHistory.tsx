import SearchScreenStore from "../../../Stores/SearchScreenStore";
import {Box, Text} from "native-base";
import styleColors from "../../../styles/styleColors";
import {StyleSheet} from "react-native";

const SearchHistory = () => {
    const searchValueList = SearchScreenStore.use.searchValueList()
    const color = () => {
        return styleColors[Math.floor(Math.random() * styleColors.length)]
    }
    return (
        <Box borderColor="gray.300" flexDirection="row" flexWrap="wrap">
            <Box flexDirection="row" justifyContent="space-between" flex="1" alignItems="center" padding="4">
                <Text>搜索历史</Text>
                <Text>展开</Text>
            </Box>
            {searchValueList.map((item) => (
                <Box padding={4}>
                    <Box backgroundColor={color()} style={[styles.TextStyle]}>
                        <Text fontSize={14}>{item.searchValue}</Text>
                    </Box>
                </Box>
            ))}
            <Box alignItems="center" justifyContent="center">
                <Text>清空历史记录</Text>
            </Box>
        </Box>
    )
}

export default SearchHistory

const styles = StyleSheet.create({
    TextStyle: {
        borderRadius: 20,
        padding: 2,
    }
})