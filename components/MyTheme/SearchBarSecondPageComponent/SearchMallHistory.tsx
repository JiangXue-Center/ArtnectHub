import {Box, Text} from "native-base";
import {StyleSheet, TouchableOpacity} from "react-native";
import MallSearchScreenStore from "../../../Stores/MallSearchPageStore";
import SearchMallPageApi from "../../../api/SearchMallPageApi";

const SearchMallHistory = ({navigation}:{navigation: any}) => {
    const searchValueList = MallSearchScreenStore.use.searchValueList()
    const removeValueList = MallSearchScreenStore.use.removeSearchValueList()
    const {sendSearchValueHttp} = SearchMallPageApi(navigation)

    //向后端发送请求
    const sendSearch = (searchValue:string) => {
        sendSearchValueHttp(searchValue)
    }

    return (
        <Box borderColor="gray.300">
            <Box flexDirection="row" justifyContent="space-between" padding="4">
                <Text>搜索历史</Text>
                <TouchableOpacity onPress={() => removeValueList()}>
                    <Text>清空历史记录</Text>
                </TouchableOpacity>
            </Box>
            <Box borderColor="gray.300" flexDirection="row" flexWrap="wrap" padding={4}>
                {searchValueList.map((item) => (
                    <Box paddingRight={2} paddingBottom={2}>
                        <Box backgroundColor="gray.300" style={[styles.TextStyle]}>
                            <TouchableOpacity onPress={() => sendSearch(item.searchValue)}>
                                <Text p={2} fontSize={14}>{item.searchValue}</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default SearchMallHistory

const styles = StyleSheet.create({
    TextStyle: {
        borderRadius: 10,
        padding: 2,
    }
})