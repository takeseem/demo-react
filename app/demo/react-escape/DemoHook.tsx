import { useEffect, useRef, useState } from "react";

// 第 1 个挑战 共 5 个挑战: 提取 useCounter Hook
export function CounterHookApp1() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}

function useCounter({ initCount = 0, delay = 1000 } = {}) {
  // console.log(new Date().toISOString(), `useCounter initCount=${initCount}, delay=${delay}`);
  const [count, setCount] = useState(initCount);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay);
    console.log(new Date().toISOString(), `useCounter useEffect, delay=${delay}, intervalId=${id}`);
    return () => {
      console.log(new Date().toISOString(), `useCounter clearEffect, intervalId=${id}`);
      clearInterval(id);
    }
  }, [delay]);
  return count;
}

// 第 2 个挑战 共 5 个挑战: 让计时器的 delay 变为可配置项
export function CounterHookApp2() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter({ delay });
  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={e => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  );
}

// 第 3 个挑战 共 5 个挑战: 从 useCounter 中提取 useInterval 
export function CounterHookApp3() {
  const count = useCounter3(1000);
  return <h1>Seconds passed: {count}</h1>;
}
function useCounter3(delay: number) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);
  return count;
}
function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    console.log(new Date().toISOString(), '✅ useInterval init effect, delay ', delay, id);
    return () => {
      console.log(new Date().toISOString(), `❌ useInterval clear effect, delay=${delay}, intervalId=${id}`);
      clearInterval(id);
    }
  }, [delay]);
}

// 第 4 个挑战 共 5 个挑战: 修复计时器重置 
export function CounterHookApp4() {
  const count = useCounter4(1000);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    if (h1Ref.current) {
      h1Ref.current.style.backgroundColor = randomColor;
    }
  }, 2000);

  return <h1 ref={h1Ref}>Seconds passed: {count}</h1>;
}
function useCounter4(delay: number) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);
  return count;
}

// 第 5 个挑战 共 5 个挑战: 实现交错运动 
function useDelayedValue(value: { x: number, y: number }, delay: number) {
  const [ret, setRet] = useState(value);
  useEffect(() => {
    setTimeout(() => {
      setRet(value);
    }, delay);
  }, [value, delay]);
  return ret;
}

export function CanvasHookApp5() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <div>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </div>
  );
}

function Dot({ position, opacity }: {
  position: { x: number, y: number };
  opacity: number;
}) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}
export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e: PointerEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
  return position;
}
