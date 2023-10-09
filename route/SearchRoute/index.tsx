import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeSearchPage from "../../Pages/HomeSearchPage";
import SearchHomePageComponent from "../../components/MyTheme/SearchHomePageComponent";
import WorkSearchPage from "../../Pages/WorkSearchPage";

const SearchRoute = ({navigation}: { navigation: any }) => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            {/*首页的搜索页*/}
            <Stack.Screen
                name="HomeSearchPage"
                component={HomeSearchPage}
                options={{
                    title: "",
                    //搜索框
                    headerRight: () => (<SearchHomePageComponent navigation={navigation}/>),
                }}

            />
            {/*搜索之后的作品页*/}
            <Stack.Screen
                name="WorkSearchPage"
                component={WorkSearchPage}
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