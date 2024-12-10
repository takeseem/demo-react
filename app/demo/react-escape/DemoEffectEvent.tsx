import { btnStyle } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";


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