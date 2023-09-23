import {Icon, Input} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {MaterialIcons} from '@expo/vector-icons';

// 首页搜索框
const SearchHomePageComponent = ({navigation}: { navigation: any }) => {
    const [isTrue, setIsTrue] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder="Search"
                variant="rounded"
                width="76%"
                borderRadius={10}
                py={1}
                px={1}
                value={searchValue}
                onChangeText={searchValue => {
                    setIsTrue(!isTrue)
                    setSearchValue(searchValue)
                }}
                InputLeftElement={<Icon ml={2} size={4} color="gray.400" as={<Ionicons name="ios-search"/>}/>}
                InputRightElement={
                    isTrue ? <MaterialIcons name="cancel" size={24} color="black"/> :
                        <MaterialIcons
                            name="cancel" size={24}
                            color="gray"
                            onPress={() => {
                                setIsTrue(!isTrue)
                                console.log("value="+searchValue)
                                setSearchValue("")
                            }}
                        />
                }
                // onPressIn={() => navigation.navigate("HomeSearchPage")}
            />
            <TouchableOpacity style={styles.textContainer}>
                <Text>搜索</Text>
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
        marginLeft: 2, // 在Input元素和Text之间添加间距
        padding: 8,
        borderRadius: 10,
    }
});
