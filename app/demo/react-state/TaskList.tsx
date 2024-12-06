import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { useState } from 'react';
import { Task as TaskModel, useTasks, useTasksDispatch, } from './TaskContext';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} >
          <Task
            task={task}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, }: {
  task: TaskModel;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input style={bgStyle}
          value={task.text}
          onChange={e => {
            dispatch({
              type: "changed",
              task: { ...task, text: e.target.value }
            });
          }} />
        <button style={btnStyle} onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button style={btnStyle} onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "4px", }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked }
          });
        }}
      />
      {taskContent}
      <button style={btnStyle} onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </label>
  );
}
