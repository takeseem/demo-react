import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useRef, useState } from "react";

export function Counter() {
  const ref = useRef(0);

  return (
    <button style={btnStyle} onClick={() => {
      console.log("clicked");
      ref.current += 1;
      alert('当前点击次数：' + ref.current);
    }}>点击我！</button>
  );
}

export function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now())
  const time = startTime ? (now - startTime) / 1000 : 0;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  function clear() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }
  return (
    <>
      <h1>秒表：{time.toFixed(3)}</h1>
      <button style={btnStyle} onClick={() => {
        const cur = Date.now();
        setNow(cur);
        setStartTime(cur);

        clear();
        intervalRef.current = setInterval(() => {
          setNow(Date.now());
        }, 10)
      }}>开始</button>
      <button style={btnStyle} onClick={() => {
        clear();
      }}>停止</button>
    </>
  );
}

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutID = useRef<NodeJS.Timeout | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('已发送！');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current || void 0);
  }

  return (
    <>
      <input style={bgStyle}
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button style={btnStyle}
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? '发送中……' : '发送'}
      </button>
      {isSending &&
        <button onClick={handleUndo} style={btnStyle}>
          撤销
        </button>
      }
    </>
  );
}


export function Toggle() {
  const [isOnRef, setIsOnRef] = useState(false);

  return (
    <button style={btnStyle} onClick={() => {
      setIsOnRef(!isOnRef)
    }}>
      {isOnRef ? '开' : '关'}
    </button>
  );
}




function DebouncedButton({ onClick, children }: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const timeoutID = useRef<NodeJS.Timeout | null>(null);
  return (
    <button style={btnStyle} onClick={() => {
      clearTimeout(timeoutID.current || void 0);
      timeoutID.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export function Dashboard() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column", alignItems: "flex-start", }}>
      <DebouncedButton
        onClick={() => alert('宇宙飞船已发射！')}
      >
        发射宇宙飞船
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('汤煮好了！')}
      >
        煮点儿汤
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('摇篮曲唱完了！')}
      >
        唱首摇篮曲
      </DebouncedButton>
    </div>
  )
}

export function Chat2() {
  const [text, setText] = useState('');
  const textRef = useRef(text);
  
  function handleSend() {
    setTimeout(() => {
      alert('正在发送：' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input style={bgStyle}
        value={text}
        onChange={e => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
      />
      <button style={btnStyle}
        onClick={handleSend}>
        发送
      </button>
    </>
  );
}
