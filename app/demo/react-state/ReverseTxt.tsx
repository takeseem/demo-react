import { bgStyle } from '@/app/lib/definitions';
import { useState } from 'react';

export default function ReverseTxt() {
  const [reverse, setReverse] = useState(false);
  const checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      调换顺序
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="姓氏" /> 
        <Field label="名字" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="名字" /> 
        <Field label="姓氏" />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}：
      <input style={bgStyle}
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
