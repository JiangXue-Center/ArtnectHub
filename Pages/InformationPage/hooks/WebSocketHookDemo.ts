import { useEffect } from "react";
import ChatPageStore, { ChatType } from "../../../Stores/InformationStore/ChatPageStore";
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const WebSocketHookDemo = () => {
  const addChatStore = ChatPageStore.use.addChatStore();
  const userId = ChatPageStore.use.userId();

  // 创建 WebSocket 连接
  const connectWebSocket = () => {
    const socket = new SockJS('http://10.23.157.17:7111/communication');
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      { "userId": userId },
      () => {
        console.log('STOMP connection established.');
        stompClient.subscribe("/topic/messages", (message) => {
          console.log(`Received: ${message.body}`);
          // 这里可以根据收到的消息进行逻辑处理
        });
      },
      (error: any) => {
        console.error('STOMP connection failed:', error);
      }
    );

    return stompClient;
  };

  const sendMessageToServer = (data: ChatType) => {
    const stompClient = connectWebSocket();

    if (stompClient && stompClient.connected) {
      // 发送消息，确保发送的是有效的 JSON 格式
      const message = JSON.stringify({ "message": data.content });
      stompClient.send('/tonghua/chat', {}, message);
      addChatStore(data);
    } else {
      console.log('STOMP connection is not established.');
      // 可以根据需要进行重连尝试或其他处理
    }
  };

  useEffect(() => {
    // 组件挂载时建立 WebSocket 连接
    const stompClient = connectWebSocket();

    return () => {
      // 组件卸载时断开 WebSocket 连接
      if (stompClient && stompClient.connected) {
        stompClient.disconnect();
      }
    };
  }, []); // 只在组件挂载和卸载时执行

  return { sendMessageToServer };
};

export default WebSocketHookDemo;
