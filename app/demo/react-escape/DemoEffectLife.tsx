import { bgStyle } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }: { roomId: string, }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  });

  return (
    <>
      <h1>欢迎来到 {roomId} 聊天室！</h1>
      <input style={bgStyle}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  );
}

export function ChatApp() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        选择聊天室：{' '}
        <select style={bgStyle}
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">所有</option>
          <option value="travel">旅游</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <hr style={{ width: '16rem', }} />
      <ChatRoom roomId={roomId} />
    </>
  );
}
function createConnection(serverUrl: string, roomId: string) {
  // 实际的实现将会连接到服务器
  return {
    connect() {
      console.log('✅ 建立连接 "' + roomId + '" 聊天室位于 ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ 断开连接 "' + roomId + '" 聊天室位于 ' + serverUrl);
    }
  };
}
