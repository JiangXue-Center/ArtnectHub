import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {EmailLogin, ForgetPassword, Login, PhoneLogin} from "../Pages/LoginPage";
import {NavigationContainer} from "@react-navigation/native";
import Register from "../Pages/LoginPage/Register";
import RestPassword from "../Pages/LoginPage/RestPassword";
import NewPassword from "../Pages/LoginPage/NewPassword";

const Stack = createNativeStackNavigator()
const LoginPageRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{headerShown: false}}/>
                <Stack.Screen name="EmailLogin" component={EmailLogin} options={{headerShown: false}}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{title: "重设密码"}}/>
                <Stack.Screen name="RestPassword" component={RestPassword} options={{title: "设置密码"}}/>
                <Stack.Screen name="Register" component={Register} options={{title: "注册"}}/>
                <Stack.Screen name="NewPassword" component={NewPassword} options={{title: "重设密码"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginPageRoute