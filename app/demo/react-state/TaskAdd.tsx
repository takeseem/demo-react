import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { useState } from 'react';
import { useTasksDispatch } from './TaskContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input style={{ ...bgStyle, margin: "0 0.5rem 0 0", }}
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button style={btnStyle} onClick={() => {
        setText('');
        dispatch({ type: "added", text,});
      }}>Add</button>
    </>
  )
}
