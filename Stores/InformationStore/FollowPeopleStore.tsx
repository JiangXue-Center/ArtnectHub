import { create } from "zustand";
import createSelectors from "../../utils/zustandSelector";

export interface FollowPeopleDataType {
  userId: string,
  username: string,
  avatar: string,
  unReadMessageNumber: number,
  lastMessage: string,
  lastMessageTime: string
}

// 消息列表
interface FollowPeopleType {
  followPeopleData: FollowPeopleDataType[],
  addFollowPeopleData: (followPeople: FollowPeopleDataType) => void
}

const FollowPeopleStore = createSelectors(create<FollowPeopleType>()((set) => ({
  followPeopleData: [],
  addFollowPeopleData: (followPeople) => {
    const existingData = FollowPeopleStore.getState().followPeopleData;
    const isExisting = existingData.some(
      (item) => item.userId === followPeople.userId
    );
    if (!isExisting) {
      set((state) => ({
        followPeopleData: [
          ...state.followPeopleData,
          {
            userId: followPeople.userId,
            username: followPeople.username,
            avatar: followPeople.avatar,
            unReadMessageNumber: followPeople.unReadMessageNumber,
            lastMessage: followPeople.lastMessage,
            lastMessageTime: followPeople.lastMessageTime
          }
        ]
      }))
    } else {
      console.log("内容已存在，未添加到数据中");
    }
  }
})))

export default FollowPeopleStore