import { bgStyle } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }: { roomId: string, }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

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

// 第 2 个挑战 共 5 个挑战: 打开和关闭状态同步 
export function App2() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(false);

  useEffect(() => {
    if (!canMove) return;

    function handleMove(e: PointerEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        是否允许移动
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}

// 第 3 个挑战 共 5 个挑战: 寻找过时值的错误
export function App3() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(false);


  useEffect(() => {

    function handleMove(e: PointerEvent) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        是否允许移动
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}
