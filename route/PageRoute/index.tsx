import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PasswordLogin, ForgetPassword, Login, CodeLogin } from "../../Pages/LoginPage";
import Register from "../../Pages/LoginPage/Register";
import RestPassword from "../../Pages/LoginPage/RestPassword";
import NewPassword from "../../Pages/LoginPage/NewPassword";
import HomePageRoute from "../HomePageRoute";
import InformationPage from "../../Pages/InformationPage/LikePeople";
import SearchRoute from "../SearchRoute";
import WorkDetailsPage from "../../Pages/HomePage/WorkDetailsPage/Components";
import HeaderTitleLeft from "../../Pages/HomePage/WorkDetailsPage/Components/HeaderTitleLeft";
import MallPageSearchPage from "../../Pages/MallPage/MallPageSearchPage";
import MallPageSearchRoute from "../MallPageSearchRoute";
import Token from "../../Token";
import MallDetailsPage from "../../Pages/MallPage/MallDetailsPage";
import MallDetailsPageTitle from "../../Pages/MallPage/MallDetailsPage/Components/MallDetailsPageTitle";
import InformationRoute from "../InforMationRoute";
import ChatPage from "../../Pages/InformationPage/Components/ChatPage";
import ChatTitle from "../../Pages/InformationPage/Components/ChatTitle";

const Stack = createNativeStackNavigator()
const LoginPageRoute = () => {
  const { token } = Token()
  return (
    <Stack.Navigator>
      {token ?
        <Stack.Screen name="HomePageRoute" component={HomePageRoute} options={{ headerShown: false }} /> :
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      }
      {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="HomePageRoute" component={HomePageRoute} options={{ headerShown: false }} /> */}
      <Stack.Screen name="PhoneLogin" component={CodeLogin} options={{ headerShown: false }} />
      <Stack.Screen name="EmailLogin" component={PasswordLogin} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: "重设密码" }} />
      <Stack.Screen name="RestPassword" component={RestPassword} options={{ title: "设置密码" }} />
      <Stack.Screen name="Register" component={Register} options={{ title: "注册" }} />
      <Stack.Screen name="NewPassword" component={NewPassword} options={{ title: "重设密码" }} />
      <Stack.Screen name="InformationPage" component={InformationRoute} options={{ title: "消息" }} />
      <Stack.Screen name="HomeSearchPage" component={SearchRoute} options={{ headerShown: false }} />
      <Stack.Screen
        name="WorkDetailsPage"
        component={WorkDetailsPage}
        options={{
          title: "",
          headerLeft: () => (
            <HeaderTitleLeft />
          )
        }} />
      <Stack.Screen
        name="MallPageSearchPage"
        component={MallPageSearchRoute}
        options={{
          headerShown: false
        }} />
      <Stack.Screen name="MallDetailsPage" component={MallDetailsPage}
        options={{
          headerTitle: () => <MallDetailsPageTitle />
        }} />
      <Stack.Screen name="ChatPage" component={ChatPage} options={{
        title: "聊天",
        headerTitle: () => <ChatTitle/>
      }}/>
    </Stack.Navigator>
  )
}

export default LoginPageRoute