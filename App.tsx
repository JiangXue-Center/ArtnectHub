import Toast from "react-native-toast-message";
import { NativeBaseProvider } from "native-base";
import Route from "./route";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Route />
        <Toast />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App