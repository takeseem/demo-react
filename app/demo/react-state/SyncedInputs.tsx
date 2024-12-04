import { useState } from 'react';

export default function SyncedInputs() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", }}>
      <Input label="第一个输入框" />
      <Input label="第二个输入框" />
    </div>
  );
}

function Input({ label }: { label: string }) {
  const [text, setText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
