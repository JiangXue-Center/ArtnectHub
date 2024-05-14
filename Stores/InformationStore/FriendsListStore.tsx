import { create } from "zustand";
import createSelectors from "../../utils/zustandSelector";

export interface FriendsListStoreDataType {
  userId: string,
  username: string,
  avatarUrl: string,
}

interface FriendsListStoreType {
  FriendsListData: FriendsListStoreDataType[],
  addFriendsListData: (friendsList: FriendsListStoreDataType) => void
}
  
const FriendsListStore = createSelectors(create<FriendsListStoreType>()((set) => ({
  FriendsListData: [
    // { userId: "7b5309ca-fd40-4ff5-b4fb-9d1a7aaffa0a", username: "黄晖原", avatar: "uweio"},
  ],
  addFriendsListData: (friendsList) => {
    const existingData = FriendsListStore.getState().FriendsListData;
    const isExisting = existingData.some(
      (item) => item.userId === friendsList.userId
    );
    if (!isExisting) {
      set((state) => ({
        FriendsListData: [
          ...state.FriendsListData,
          {
            userId: friendsList.userId,
            username: friendsList.username,
            avatarUrl: friendsList.avatarUrl,
          }
        ]
      }))
    } else {
      console.log("内容已存在，未添加到数据中");
    }
  }
})))

export default FriendsListStore