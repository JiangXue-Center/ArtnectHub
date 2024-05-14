import Token from "../../Token"
import Request from "../../service/http/Request";
import FollowPeopleStore, { FollowPeopleDataType } from "../../Stores/InformationStore/FollowPeopleStore";
import FriendsListStore, { FriendsListStoreDataType } from "../../Stores/InformationStore/FriendsListStore";
import ChatPageStore, { ChatType } from "../../Stores/InformationStore/ChatPageStore";
import { useState } from "react";

const InformationPageApi = () => {
  const { token } = Token()
  const { instance } = Request()
  const addMessageList = FollowPeopleStore.use.addFollowPeopleData()
  const addData = FriendsListStore.use.addFriendsListData()
  const addChatStore = ChatPageStore.use.addChatStore()
  const [num, setNum] = useState(1)
  const getMessageListApi = () => {
    instance.get("/message/list", {
      headers: {
        "Authorization": token
      }
    }).then(response => {
      const resData = response.data.data
      resData.forEach((element: FollowPeopleDataType) => {
        addMessageList(element)
      });

    }).catch(error => {
      console.error("err:" + error)
    })
  }

  const getFriendListApi = () => {
    instance.get("/user/follows", {
      headers: {
        "Authorization": token
      }
    }).then(res => {
      const resData = res.data.data
      resData.forEach((element: FriendsListStoreDataType) => {
        addData(element)
      });
    }).catch(err => {
      console.error(err);
    })
  }

  const ChatRecord = (userId: string) => {
    instance.get(`/message/user/${userId}/offset/${num}/size/50`, {
      headers: {
        "Authorization": token
      }
    }).then(res => {
      const resData = res.data.data
      resData.forEach((element: ChatType) => {
        addChatStore(element)
      });
      setNum(num + 1)
    }).catch(err => {
      console.error(err);
    })
  }

  return { getMessageListApi, getFriendListApi, ChatRecord }
}

export default InformationPageApi