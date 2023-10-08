import SearchScreenStore from "../../Stores/SearchScreenStore";
import {Box, Text} from "native-base";
import {StyleSheet} from "react-native";
import {useEffect} from "react";
import SearchScreenApi from "../../api/SearchScreenApi";

//搜索推荐部分的标签
const RecommendationBox = () => {
    const recommendationHistory = SearchScreenStore.use.recommendationHistory()
    const {getRecommendationList} = SearchScreenApi()

    //向后端发送一次请求
    useEffect(() => {
        //暂时注释
        // getRecommendationList()
    }, []);

    return (
        <Box borderBottomWidth="1" height="200" borderColor="gray.300" flexDirection="row" flexWrap="wrap" padding={4}>
            {recommendationHistory.map((item) => (
                <Box paddingRight={2} paddingBottom={2}>
                    <Box backgroundColor="gray.300" style={[styles.TextStyle]}>
                        <Text p={2} fontSize={14}>{item.searchValue}</Text>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default RecommendationBox

const styles = StyleSheet.create({
    TextStyle: {
        padding: 2,
        borderRadius: 10
    }
})