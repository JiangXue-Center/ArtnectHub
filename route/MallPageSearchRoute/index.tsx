import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MallPageSearchPage from "../../Pages/MallPage/MallPageSearchPage";
import {SearchBarMallPageComponent} from "../../components/MyTheme";
import SearchBarSecondPageComponent from "../../components/MyTheme/SearchBarSecondPageComponent";

const MallPageSearchRoute = ({navigation}: { navigation: any }) => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            {/*商城的搜索页*/}
            <Stack.Screen
                name="MallPageSearchPage"
                component={MallPageSearchPage}
                options={{
                    title: "",
                    headerRight: ()  => <SearchBarSecondPageComponent navigation={navigation}/>
                }}
            />
        </Stack.Navigator>
    )
}

export default MallPageSearchRoute