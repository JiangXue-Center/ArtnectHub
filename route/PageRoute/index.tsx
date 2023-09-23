import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PasswordLogin, ForgetPassword, Login, CodeLogin} from "../../Pages/LoginPage";
import {NavigationContainer} from "@react-navigation/native";
import Register from "../../Pages/LoginPage/Register";
import RestPassword from "../../Pages/LoginPage/RestPassword";
import NewPassword from "../../Pages/LoginPage/NewPassword";
import HomePageRoute from "../HomePageRoute";
import {NativeBaseProvider} from "native-base";
import InformationPage from "../../Pages/InformationPage";
import SearchRoute from "../SearchRoute";

const Stack = createNativeStackNavigator()
const LoginPageRoute = () => {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="PhoneLogin" component={CodeLogin} options={{headerShown: false}}/>
                    <Stack.Screen name="EmailLogin" component={PasswordLogin} options={{headerShown: false}}/>
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{title: "重设密码"}}/>
                    <Stack.Screen name="RestPassword" component={RestPassword} options={{title: "设置密码"}}/>
                    <Stack.Screen name="Register" component={Register} options={{title: "注册"}}/>
                    <Stack.Screen name="NewPassword" component={NewPassword} options={{title: "重设密码"}}/>
                    <Stack.Screen name="HomePageRoute" component={HomePageRoute} options={{headerShown: false}}/>
                    <Stack.Screen name="InformationPage" component={InformationPage} options={{title: "消息"}}/>
                    <Stack.Screen name="HomeSearchPage" component={SearchRoute} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

export default LoginPageRoute