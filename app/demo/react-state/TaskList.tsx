import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { useState } from 'react';
import { Task as TaskModel, } from './TaskContext';

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}: {
  tasks: TaskModel[],
  onChangeTask: (task: TaskModel) => void,
  onDeleteTask: (taskId: number) => void
}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} >
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }: {
  task: TaskModel;
  onChange: (task: TaskModel) => void;
  onDelete: (taskId: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input style={bgStyle}
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
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
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button style={btnStyle} onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}
