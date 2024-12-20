import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { useState } from 'react';

export default function MissText() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div style={{display: "flex", gap: "0.5rem", flexDirection: "column", alignItems: "flex-start", padding: "0.5rem", }}>
      {showHint
        ? <p><i>提示：你最喜欢的城市？</i></p>
        : null
      }
      <Form />
      <button style={btnStyle} onClick={() => {
        setShowHint(!showHint);
      }}>显示提示</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea style={bgStyle}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
