import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import {AntDesign} from "@expo/vector-icons";
import * as React from "react";
import MallPage from "../../Pages/MallPage";
import Surrounding from "../../Pages/MallPage/Surrounding";
import DrawingTools from "../../Pages/MallPage/DrawingTools";

const Drawer = createDrawerNavigator();

const MailPageDrawerRoute = () => {
    return (
        <Drawer.Navigator
            initialRouteName="MallPage"

            //drawerStyle可以给抽屉加样式
            screenOptions={{
                drawerStyle: {
                    width: 200,
                },

                drawerIcon: ({focused, color, size}) => (
                    focused ? <Ionicons name="md-checkmark-circle" size={size} color={color}/> :
                        <AntDesign name="swap" size={size} color={color}/>
                )
            }}
        >
            <Drawer.Screen name="MallPage" component={MallPage} options={{title: "商城"}}/>
            <Drawer.Screen name="DrawingTools" component={DrawingTools} options={{title: "绘画工具"}}/>
            <Drawer.Screen name="Surrounding" component={Surrounding} options={{title: "周边"}}/>
        </Drawer.Navigator>
    )
}

export default MailPageDrawerRoute