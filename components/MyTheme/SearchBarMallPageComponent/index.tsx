import {Icon, Input} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity, View} from "react-native";


// 商城搜索框
const SearchBarMallPageComponent = ({navigation}: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder="Search"
                variant="rounded"
                width="75%"
                borderRadius={10}
                py={1}
                px={1}
                InputLeftElement={<Icon ml={2} size={4} color="gray.400" as={<Ionicons name="ios-search"/>}/>}
                onPressIn={() => navigation.navigate("MallPageSearchPage")}
            />
            <TouchableOpacity style={styles.textContainer}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" onPress={() => {
                    navigation.navigate("InformationPage")
                }}/>
            </TouchableOpacity>
        </View>
    );
}

export default SearchBarMallPageComponent;

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