import {Icon, Input} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {MaterialIcons} from '@expo/vector-icons';
import SearchScreenApi from "../../../api/SearchScreenApi";
import SearchHistory from "./SearchHistory";
import SearchScreenStore from "../../../Stores/SearchScreenStore";

// 首页搜索框
const SearchHomePageComponent = ({navigation}: { navigation: any }) => {
    const [isTrue, setIsTrue] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const increaseValve = SearchScreenStore.use.increase()
    const {sendSearchValueHttp} = SearchScreenApi(navigation)

    const deleteSearch = () => {
        setIsTrue(!isTrue)
        console.log("deleteValue=" + searchValue)
        //按下取消就可以将搜索框内的内容清空
        setSearchValue("")
    }

    const sendSearch = () => {
        //这里写请求
        if (searchValue){
            increaseValve(searchValue)
            sendSearchValueHttp(searchValue)
        }

        // navigation.navigate("WorkSearchPage")
        // if (searchValue){
        //     sendSearchValueHttp(searchValue)
        // }
    }

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder="search"
                variant="rounded"
                width="75%"
                borderRadius={10}
                py={1}
                px={1}
                value={searchValue}
                onChangeText={searchValue => {
                    searchValue ? setIsTrue(false) : setIsTrue(true)
                    setSearchValue(searchValue)
                    //每敲一个字都可以向后端发送一次请求，暂时注释，先砍掉
                    // sendSearchValueHttp(searchValue)
                }}
                InputLeftElement={<Icon ml={2} size={4} color="gray.400" as={<Ionicons name="ios-search"/>}/>}
                InputRightElement={
                    isTrue ? <MaterialIcons name="cancel" size={30} color="gray"/> :
                        <MaterialIcons name="cancel" size={30} color="black" onPress={deleteSearch}/>
                }
            />
            <TouchableOpacity style={styles.textContainer}>
                <Text onPress={sendSearch}>搜索</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SearchHomePageComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // 水平布局
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 10,
    },
    input: {
        flex: 1, // Input元素占据剩余空间
    },
    textContainer: {
        // marginLeft: 2, // 在Input元素和Text之间添加间距
        padding: 8,
        borderRadius: 10,
    }
});
