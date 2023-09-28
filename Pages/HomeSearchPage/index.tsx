import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import SearchHistory from "../../components/MyTheme/SearchHomePageComponent/SearchHistory";
import RecommendationBox from "./RecommendationBox";
// import RecommendationBox from "./RecommendationBox";

const HomeSearchPage = () => {

    return (
        <SafeAreaView style={styles.container}>
            {/*推荐标签记录*/}
            <RecommendationBox/>
            {/*搜索历史记录*/}
            <SearchHistory/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});

export default HomeSearchPage;