import {StyleSheet, View} from "react-native";
import {LoginFontComponent} from "../../components/LoginPageFontComponent";
import {useState} from "react";
import {EmailLogin, PhoneLogin} from "./index";
import {Button} from "native-base";

const Login = ({navigation}: { navigation?: any }) => {
    const [state, setState] = useState(true)
    return (
        <View>
            <LoginFontComponent/>
            <View style={[styles.button]}>
                <Button colorScheme={state ? "gray" : "darkBlue"} onPress={() => setState(false)} borderRadius="none">验证码登陆</Button>
                <Button colorScheme={state ? "darkBlue" : "gray"} onPress={() => setState(true)} borderRadius="none">账号密码登陆</Button>
            </View>
            <View>
                {state ? <EmailLogin navigation={navigation}/> : <PhoneLogin navigation={navigation}/>}
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50
    }
})