import {Box, Text} from "native-base";
import {StyleSheet, TouchableOpacity} from "react-native";
import {useEffect} from "react";
import MallSearchScreenStore from "../../../Stores/MallSearchPageStore";
import SearchMallPageApi from "../../../api/SearchMallPageApi";

//搜索推荐部分的标签
const RecommendationMallBox = ({navigation}: { navigation: any }) => {
    const recommendationHistory = MallSearchScreenStore.use.recommendationHistory()
    const {getRecommendationList,sendSearchValueHttp} = SearchMallPageApi(navigation)

    //向后端发送一次请求
    useEffect(() => {
        //暂时注释
        // getRecommendationList()
    }, []);

    //向后端发送请求
    const sendSearch = (searchValue:string) => {
        sendSearchValueHttp(searchValue)
    }

    return (
        <Box borderBottomWidth="1" height="200" borderColor="gray.300" flexDirection="row" flexWrap="wrap" padding={4}>
            {recommendationHistory.map((item) => (
                <Box paddingRight={2} paddingBottom={2}>
                    <Box backgroundColor="gray.300" style={[styles.TextStyle]}>
                        <TouchableOpacity onPress={() => sendSearch(item.searchValue)}>
                            <Text p={2} fontSize={14}>{item.searchValue}</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default RecommendationMallBox

const styles = StyleSheet.create({
    TextStyle: {
        padding: 2,
        borderRadius: 10
    }
})