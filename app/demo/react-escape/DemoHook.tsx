import { useEffect, useState } from "react";

// 第 1 个挑战 共 5 个挑战: 提取 useCounter Hook
export function CounterHookApp1() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}

function useCounter(initCount = 0) {
  const [count, setCount] = useState(initCount);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [initCount]);
  return count;
}

// 第 2 个挑战 共 5 个挑战: 让计时器的 delay 变为可配置项
export function CounterHookApp2() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter();
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
