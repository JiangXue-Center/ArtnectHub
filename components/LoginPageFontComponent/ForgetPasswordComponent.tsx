import {StyleSheet, Text, View} from "react-native";
import {Inter_900Black, useFonts} from "@expo-google-fonts/inter";

const ForgetPasswordComponent = () => {
    const [fontSloaded,fontError] = useFonts({
        Inter_900Black
    })
    if (!fontSloaded && !fontError){
        return null
    }
    return (
        <View style={[styles.container]}>
            <Text style={[styles.font]}>重设密码</Text>
        </View>
    )
}

export default ForgetPasswordComponent

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

    },
    font: {
        marginTop: 100,
        fontSize: 30,
        fontFamily: "Inter_900Black"
    },
})