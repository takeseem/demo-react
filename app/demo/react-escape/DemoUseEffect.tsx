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
