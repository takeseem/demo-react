import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { useState } from 'react';

export default function AddTask({ onAddTask, }: { onAddTask: (text: string) => void }) {
  const [text, setText] = useState('');
  return (
    <>
      <input style={{ ...bgStyle, margin: "0 0.5rem 0 0", }}
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button style={btnStyle} onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
