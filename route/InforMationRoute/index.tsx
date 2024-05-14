import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FollowPeople from "../../Pages/InformationPage/FollowPeople";
import LikePeople from "../../Pages/InformationPage/LikePeople";
import FriendsList from "../../Pages/InformationPage/FriendsList";

const Tab = createMaterialTopTabNavigator();
const InformationRoute = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="FriendsList" component={FriendsList} options={{ title: "好友列表" }} />
            <Tab.Screen name="FollowPeople" component={FollowPeople} options={{ title: "消息" }} />
            <Tab.Screen name="LikePeople" component={LikePeople} options={{ title: "点赞" }} />

        </Tab.Navigator>
    )
}

export default InformationRoute