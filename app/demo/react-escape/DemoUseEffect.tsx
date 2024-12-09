import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";

export function Form() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);
  return (
    <>
      <button style={btnStyle} onClick={() => setShow(s => !s)}>{show ? '隐藏' : '展示'}表单</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            输入你的姓名：
            <MyInput
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={upper}
              onChange={e => setUpper(e.target.checked)}
            />
            大写
          </label>
          <p>你好， <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}

function MyInput({ value, onChange }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <input style={bgStyle}
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}


export function Form2() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const upper = useState(false);
  const name = firstName + ' ' + lastName;
  return (
    <>
      <button style={btnStyle} onClick={() => setShow(s => !s)}>{show ? '隐藏' : '展示'}表单</button>
      <br />
      <hr />
      {show && (
        <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column", }}>
          <label>
            输入你的名：
            <MyInput2
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            输入你的姓：
            <MyInput2
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>你好，<b>{upper ? name.toUpperCase() : name}</b></p>
        </div>
      )}
    </>
  );
}
function MyInput2({ shouldFocus, value, onChange }: {
  shouldFocus: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current?.focus();
    }
  }, [shouldFocus]);

  return (
    <input style={bgStyle}
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

export function Form3() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button style={btnStyle} onClick={() => setShow(s => !s)}>{show ? '隐藏' : '展示'}计数器</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
}
