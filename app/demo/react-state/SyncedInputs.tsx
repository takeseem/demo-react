import { bgStyle } from '@/app/lib/definitions';
import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", }}>
      <Input label="第一个输入框" text={text} onChange={handleChange} />
      <Input label="第二个输入框" text={text} onChange={handleChange} />
    </div>
  );
}

function Input({ label, text, onChange, }: {
  label: string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
 }) {

  return (
    <label>
      {label}
      {' '}
      <input style={bgStyle}
        value={text}
        onChange={onChange}
      />
    </label>
  );
}
