import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Avatar, Box, Button, Divider, HStack, Input, Text, VStack } from 'native-base';
import ChatPageStore, { ChatEnum, ChatType } from '../../../Stores/InformationStore/ChatPageStore';
import Token from '../../../Token';
import InformationPageApi from '../../../api/InformationPageApi';
import WebSocketHookDemo from '../hooks/WebSocketHookDemo';

const { width, height } = Dimensions.get("window");

const ChatPage = ({ route, navigation }: { route: any, navigation: any }) => {
  const Store = ChatPageStore.use.ChatStore();
  const { token } = Token();
  const [isFresh, setIsFresh] = useState(false);
  const [text, setText] = useState("")
  const { ChatRecord } = InformationPageApi()
  const { sendMessageToServer } = WebSocketHookDemo()
  const { userId, avatarUrl, senderName } = route.params
  const setUserId = ChatPageStore.use.setUserId()

  useEffect(() => {
    ChatRecord(userId)
    setUserId(userId)
  }, [])

  const renderItem = ({ item }: { item: ChatType }) => {
    return (
      <Item item={item} />
    );
  };

  const isLoading = () => {
    setIsFresh(true);
    // 进行加载的 API 调用
  };

  const refreshUp = () => {
    setIsFresh(true);
    // 进行刷新的 API 调用
  };

  setTimeout(() => {
    setIsFresh(false);
  }, 2000);

  const send = () => {
    console.log("text:" + text);
    // sendMessageToServer()
    const date = new Date()
    const unixDate = Math.floor(date.getTime() / 1000)
    const data: ChatType = {
      content: text,
      sender: token,
      messageTime: unixDate,
      type: ChatEnum.Text,
      avatarUrl: avatarUrl,
      senderName: senderName
    }

    sendMessageToServer(data)
  }

  const Item = ({ item }: { item: ChatType }) => {
    const isCurrentUser = token === item.sender;
    const alignPosition = isCurrentUser ? "flex-end" : "flex-start";

    return (
      <HStack
        space="4"
        m={2}
        justifyContent={alignPosition}
        alignItems="flex-end"
        style={{ marginTop: isCurrentUser ? 'auto' : 0 }} // 将他人的消息置于顶部
      >
        {!isCurrentUser && (
          <Avatar
            size="sm"
            source={{
              uri: `${item.avatarUrl}`
            }}
          />
        )}
        <Box
          borderRadius="md"
          bgColor={isCurrentUser ? "#3b86ff" : "#f3f4f6"}
          p={2}
          maxWidth={3 * width / 4}
        >
          <Text color={isCurrentUser ? "white" : "black"}>
            {item.content}
          </Text>
        </Box>
        {isCurrentUser && (
          <Avatar
            size="sm"
            source={{
              uri: `${item.avatarUrl}`
            }}
          />
        )}
      </HStack>
    );
  };

  return (
    <VStack flex={1} bgColor="white">
      <FlatList
        data={Store}
        renderItem={renderItem}
        refreshing={isFresh}
        onRefresh={isLoading}
        initialScrollIndex={0}//初始化滚动索引
        initialNumToRender={50}//让数据先加载三条，它会闪一下
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', margin: 10 }} // 将内容放置在底部
      />
      <HStack p={4} alignItems="center" bgColor="white" borderTopWidth={1} borderTopColor="gray.200">
        <Input flex={1} placeholder="输入消息..."
          onChangeText={setText}
          value={text}
        />
        <Button ml={2} onPress={() => send()}>发送</Button>
      </HStack>
    </VStack>
  );
};

export default ChatPage;
