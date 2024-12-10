import { btnStyle } from "@/app/lib/definitions";
import { experimental_useEffectEvent as useEffectEvent, useEffect, useRef, useState } from "react";


// 第 1 个挑战 共 4 个挑战: 修复一个不更新的变量 
export function TimerApp1() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + increment);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        {' '}
        <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
      </h1>
      <hr style={{ width: '20rem', }}/>
      <p>
        Every second, increment by:
        {' '}
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }} style={btnStyle}>–</button>
        {' '}<b>{increment}</b>{' '}
        <button onClick={() => {
          setIncrement(i => i + 1);
        }} style={btnStyle}>+</button>
      </p>
    </>
  );
}

// 第 2 个挑战 共 4 个挑战: 修复一个冻结的计数器 
export function TimerApp2() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const incRef = useRef(increment);
  useEffect(() => {
    incRef.current = increment;
  }, [increment]);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + incRef.current);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
        {' '}
        <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
      </h1>
      <hr style={{ width: '20rem', }}/>
      <p>
        Every second, increment by:
        {' '}
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }} style={btnStyle}>–</button>
        {' '}<b>{increment}</b>{' '}
        <button onClick={() => {
          setIncrement(i => i + 1);
        }} style={btnStyle}>+</button>
      </p>
    </>
  );
}

// 第 3 个挑战 共 4 个挑战: 修复不可调整的延迟
export function TimerApp3() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);

  const onTick = useEffectEvent(() => {
    setCount(c => c + increment);
  });

  const onMount = useEffectEvent(() => {
    return setInterval(() => {
      onTick();
    }, delay);
  });

  useEffect(() => {
    const id = onMount();
    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
      <p>
        Increment delay:
        <button disabled={delay === 100} onClick={() => {
          setDelay(d => d - 100);
        }}>–100 ms</button>
        <b>{delay} ms</b>
        <button onClick={() => {
          setDelay(d => d + 100);
        }}>+100 ms</button>
      </p>
    </>
  );
}
