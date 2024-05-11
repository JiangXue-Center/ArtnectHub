import React, {useState} from 'react';
import {
    StyleSheet, View,
} from 'react-native';
import SearchHistory from "../../components/MyTheme/SearchHomePageComponent/SearchHistory";
import RecommendationBox from "./RecommendationBox";
// import RecommendationBox from "./RecommendationBox";

const HomeSearchPage = ({navigation}: {navigation: any}) => {

    return (
        <View style={styles.container}>
            {/*推荐标签记录*/}
            <RecommendationBox navigation={navigation}/>
            {/*搜索历史记录*/}
            <SearchHistory navigation={navigation}/>
        </View>
    );
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

export default HomeSearchPage;