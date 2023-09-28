import SearchScreenStore from "../../Stores/SearchScreenStore";
import {Box, Text} from "native-base";
import styleColors from "../../styles/styleColors";
import {StyleSheet} from "react-native";

//推荐部分的标签
const RecommendationBox = () => {
    const recommendationHistory = SearchScreenStore.use.recommendationHistory()
    const color = () => {
        return styleColors[Math.floor(Math.random() * styleColors.length)]
    }
    return (
        <Box borderBottomWidth="1" height="200" borderColor="gray.300" flexDirection="row" flexWrap="wrap">
            {recommendationHistory.map((item) => (
                <Box padding={4}>
                    <Box backgroundColor={color()} style={[styles.TextStyle]}>
                        <Text fontSize={14}>{item.searchValue}</Text>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default RecommendationBox

const styles = StyleSheet.create({
    TextStyle: {
        borderRadius: 20,
        padding: 2,
    }
})