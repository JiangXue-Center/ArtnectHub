import {Icon, Input} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity, View} from "react-native";

const SearchBarFirstHomePageComponent = ({navigation}:{navigation:any}) => {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder="Search"
                variant="rounded"
                width="80%"
                borderRadius={10}
                py={1}
                px={1}
                InputLeftElement={<Icon ml={2} size={4} color="gray.400" as={<Ionicons name="ios-search" />} />}
            />
            <TouchableOpacity style={styles.textContainer}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" onPress={() => {navigation.navigate("InformationPage")}}/>
            </TouchableOpacity>
        </View>
    );
}

export default SearchBarFirstHomePageComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // 水平布局
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10, // 左右边距
        borderRadius: 10,
    },
    input: {
        flex: 1, // Input元素占据剩余空间
    },
    textContainer: {
        marginLeft: 10, // 在Input元素和Text之间添加间距
        padding: 5,
        borderRadius: 10,
    }
});
