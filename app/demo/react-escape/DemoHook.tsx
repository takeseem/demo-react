import { useEffect, useRef, useState } from "react";
import { callbackify } from "util";

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