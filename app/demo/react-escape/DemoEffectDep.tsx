import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";

export function TimerDep1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ 创建定时器');
    const id = setInterval(() => {
      console.log('⏰ Interval');
      setCount(v => v + 1);
    }, 1000);
    return () => {
      console.log('❌ 清除定时器');
      clearInterval(id);
    };
  }, []);

  return <h1>计数器: {count}</h1>
}

// 第 2 个挑战 共 4 个挑战: 修复重新触发动画的问题
function Welcome({ duration }: { duration: number }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current as HTMLHeadingElement);
    animation.start(duration);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
      欢迎
    </h1>
  );
}

export function WelcomeApp() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0.5rem", alignItems: "flex-start", }}>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={e => setDuration(Number(e.target.value))}
        />
        <br />
        淡入 interval: {duration} ms
      </label>
      <button onClick={() => setShow(!show)} style={btnStyle}>
        {show ? '移除' : '显示'}
      </button>
      <hr style={{ width: "60%" }}/>
      {show && <Welcome duration={duration} />}
    </div>
  );
}
class FadeInAnimation {
  node: HTMLElement;
  startTime: number | null = null;
  frameId: number | null = null;
  duration = 0;

  constructor(node: HTMLElement) {
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    const timePassed = performance.now() - (this.startTime as number);
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    this.node.style.opacity = progress.toString();
  }
  stop() {
    cancelAnimationFrame(this.frameId as number);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}

// 第 3 个挑战 共 4 个挑战: 修复聊天重新连接的问题
export default function ChatRoomDepApp() {
  const [isDark, setIsDark] = useState(true);
  const [roomId, setRoomId] = useState('所有');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  const options = {
    serverUrl: serverUrl,
    roomId: roomId
  };

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      gap: "0.5rem", padding: "0.5rem", alignItems: "flex-start",
      backgroundColor: isDark ? '#222' : 'gray',
      color: isDark ? '#eee' : 'black',
    }}>
      <button onClick={() => setIsDark(!isDark)} style={btnStyle}>
        切换主题
      </button>
      <label>
        服务器地址：
        <input style={bgStyle}
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        选择聊天室：
        <select style={bgStyle}
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="所有">所有</option>
          <option value="旅游">旅游</option>
          <option value="音乐">音乐</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
    </div>
  );
}
function ChatRoom({ options }: { options: ConnectionOptions }) {
  const { serverUrl, roomId } = options;
  useEffect(() => {
    const connection = createConnection({
      serverUrl: serverUrl,
      roomId: roomId,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h1>欢迎来到 {options.roomId} 房间！</h1>;
}
type ConnectionOptions = {
  serverUrl: string;
  roomId: string;
};
function createConnection({ serverUrl, roomId }: ConnectionOptions) {
  // 真正的实现实际上会连接到服务器
  if (typeof serverUrl !== 'string') {
    throw Error('期望 serverUrl 是字符串类型，收到：' + serverUrl);
  }
  if (typeof roomId !== 'string') {
    throw Error('期望 roomId 是字符串类型，收到：' + roomId);
  }
  return {
    connect() {
      console.log('✅ 连接到“' + roomId + '”房间，在 ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ 断开“' + roomId + '”房间，在 ' + serverUrl);
    }
  };
}
