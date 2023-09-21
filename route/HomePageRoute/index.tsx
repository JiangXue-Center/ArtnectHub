import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MinePage from "../../Pages/MinePage";
import TheFirstHomePageTopTabRoute from "./TheFirstHomePageTopTabRoute";
import MallPage from "../../Pages/MallPage";
import {Ionicons} from '@expo/vector-icons';
import {SearchBarFirstHomePageComponent, SearchBarMallPageComponent} from "../../components/MyTheme";
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import AIDrawingPage from "../../Pages/AIDrawingPage";
import LogoComponent from "../../components/LogoComponent";

const TabButtom = createBottomTabNavigator()


const HomePageRoute = ({navigation}: { navigation: any }) => {
    return (

        <TabButtom.Navigator screenOptions={{
            tabBarHideOnKeyboard: true
        }}>
            <TabButtom.Screen
                name="TheFirstHomePage"
                component={TheFirstHomePageTopTabRoute}
                options={{
                    title: "首页",
                    headerStyle: {
                        borderWidth: 1
                    },
                    headerTitle: () => <LogoComponent/>,
                    //搜索框
                    headerRight: () => (<SearchBarFirstHomePageComponent navigation={navigation}/>),
                    headerRightContainerStyle: {
                        alignItems: "flex-start"
                    },
                    tabBarIcon: ({focused}) => (
                        focused ? <Ionicons name="home" size={24} color="black"/> :
                            <Ionicons name="home-outline" size={24} color="black"/>
                    )
                }}/>

            <TabButtom.Screen
                name="MallPage"
                component={MallPage}
                options={{
                    title: "商城",
                    headerTitle: () => <LogoComponent/>,
                    //搜索框
                    headerRight: () => (<SearchBarMallPageComponent navigation={navigation}/>),
                    headerRightContainerStyle: {
                        alignItems: "flex-start"
                    },
                    tabBarIcon: ({focused}) => (
                        focused ? <Entypo name="shopping-cart" size={24} color="black"/> :
                            <AntDesign name="shoppingcart" size={24} color="black"/>
                    )
                }}
            />

            <TabButtom.Screen
                name="AIDrawingPage"
                component={AIDrawingPage}
                options={{
                    title: "AI绘画",
                    tabBarIcon: ({focused}) => (
                        focused ? <Entypo name="vine-with-circle" size={24} color="black"/> :
                            <Entypo name="vine" size={24} color="black"/>
                    )
                }}/>

            <TabButtom.Screen
                name="MinePage"
                component={MinePage}
                options={{
                    title: "我的",
                    tabBarIcon: ({focused}) => (
                        focused ? <Ionicons name="ios-people-sharp" size={24} color="black"/> :
                            <Ionicons name="ios-people-outline" size={24} color="black"/>
                    )
                }}
            />
        </TabButtom.Navigator>
    )
}

export default HomePageRoute