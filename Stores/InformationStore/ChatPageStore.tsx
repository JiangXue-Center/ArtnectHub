import { create } from "zustand";
import createSelectors from "../../utils/zustandSelector";

export enum ChatEnum {
  Text
}

export interface ChatType {
  content: string,
  sender: string,
  messageTime: number,
  type: ChatEnum,
  avatarUrl: string,
  senderName: string
}

// 消息列表
interface ChatStoreType {
  ChatStore: ChatType[],
  addChatStore: (ChatStore: ChatType) => void
  userId: string
  setUserId: (userId: string) => void
}

const ChatPageStore = createSelectors(create<ChatStoreType>()((set) => ({
  ChatStore: [],
  addChatStore: (Chat) => {
    const existingData = ChatPageStore.getState().ChatStore;
    const isExisting = existingData.some(
      (item) => item.messageTime === Chat.messageTime
    );
    if (!isExisting) {
      set((state) => ({
        ChatStore: [
          ...state.ChatStore,
          {
            content: Chat.content,
            sender: Chat.sender,
            messageTime: Chat.messageTime,
            type: Chat.type,
            avatarUrl: Chat.avatarUrl,
            senderName: Chat.senderName
          }
        ]
      }))
    } else {
      console.log("内容已存在，未添加到数据中");
    }
  },

  userId: "",

  setUserId: (userId) => set(() => ({
    userId: userId
  }))

})))

export default ChatPageStore