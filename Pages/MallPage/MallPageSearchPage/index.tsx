import {StyleSheet, Text, View} from "react-native";

import React from "react";
import SearchMallHistory from "../../../components/MyTheme/SearchBarSecondPageComponent/SearchMallHistory";
import RecommendationMallBox from "./RecommendationMallBox";

const MallPageSearchPage = ({navigation}: { navigation: any }) => {
    return (
        <View style={styles.container}>
            {/*推荐标签记录*/}
            <RecommendationMallBox navigation={navigation}/>
            {/*搜索历史记录*/}
            <SearchMallHistory navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});

export default MallPageSearchPage