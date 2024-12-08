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
  let timeoutID = null;

  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert('已发送！');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
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
