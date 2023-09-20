import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import AttentionScreen from "../../../Pages/HomePage/Components/AttentionScreen";
import RecommendScreen from "../../../Pages/HomePage/Components/RecommendScreen";
import NewProductScreen from "../../../Pages/HomePage/Components/NewProductScreen";
import RankingScreen from "../../../Pages/HomePage/Components/RankingScreen";


const Tab = createMaterialTopTabNavigator();

// 首页的topTab路由
const TheFirstHomePageTopTabRoute = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AttentionScreen" component={AttentionScreen} options={{title: "关注"}}/>
            <Tab.Screen name="RecommendScreen" component={RecommendScreen} options={{title: "推荐"}}/>
            <Tab.Screen name="NewProductScreen" component={NewProductScreen} options={{title: "新作"}}/>
            <Tab.Screen name="RankingScreen" component={RankingScreen} options={{title: "榜单"}}/>
        </Tab.Navigator>
    );
}

export default TheFirstHomePageTopTabRoute