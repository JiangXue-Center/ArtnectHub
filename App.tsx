import LoginPageRoute from "./route";
import {NativeBaseProvider} from "native-base";

const App = () => {
    return (
        <NativeBaseProvider>
            <LoginPageRoute/>
        </NativeBaseProvider>
    )
}

export default App