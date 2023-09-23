import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeSearchPage from "../../Pages/HomeSearchPage";
import SearchHomePageComponent from "../../components/MyTheme/SearchHomePageComponent";

const SearchRoute = (navigation: any) => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeSearchPage"
                component={HomeSearchPage}
                options={{
                    title: "",
                    //搜索框
                    headerRight: () => (<SearchHomePageComponent navigation={navigation}/>),

                }}

            />
        </Stack.Navigator>
    )
}

export default SearchRoute