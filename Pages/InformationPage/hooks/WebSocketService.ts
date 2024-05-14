// WebSocketService.ts
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const socket = new SockJS('http://10.23.157.17:7111/communication'); // 这里的地址根据你的后端配置而定
const stompClient = Stomp.over(socket);

export default stompClient;