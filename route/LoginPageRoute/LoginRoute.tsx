import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ForgetPassword, PhoneLogin} from "../../Pages/LoginPage";

const Stack = createNativeStackNavigator()

const LoginRoute = () => {
  return(
      <Stack.Navigator>
          <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{headerShown: false}} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}

export default LoginRoute