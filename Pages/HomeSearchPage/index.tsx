import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity, ScrollView
} from 'react-native';
import SearchHistory from "../../components/MyTheme/SearchHomePageComponent/SearchHistory";
import SearchScreenStore from "../../Stores/SearchScreenStore";

const HomeSearchPage = () => {
    const [itemId, setItemId] = useState('')
    const data = SearchScreenStore.use.searchValueList()

    const Item = ({id, searchValue}: ({ id: string, searchValue: string })) => {
        const backgroundColor = id === itemId ? "yellow" : "#f9c2ff"
        return (
            <TouchableOpacity
                style={[styles.item, {backgroundColor}]}
                onPress={() => {
                    setItemId(id)
                }}
            >
                <Text style={styles.title}>{searchValue}id:{id}</Text>
            </TouchableOpacity>
        );
    }
    const renderItem = ({item}: ({ item: any })) => (
        <Item id={item.id} searchValue={item.searchValue}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                // keyExtractor={item => item.id}
                horizontal={false}//水平布局模式
                initialScrollIndex={0}//初始化滚动索引
                initialNumToRender={6}//让数据先加载三条，它会闪一下
                numColumns={1}//指定列数，数据项必须等高 ---- 无法支持瀑布流
                inverted={false}//列表反转
                extraData={itemId}//
            />
            <ScrollView>
                <SearchHistory/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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