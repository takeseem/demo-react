import { useReducer } from 'react';
import AddTask from "./TaskAdd";
import TaskList from './TaskList';
import { initialTasks, Task, TaskReducerAction } from './TaskContext';

let nextId = 3;

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks: Task[], action: TaskReducerAction): Task[] {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id as number,
        text: action.text as string,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action?.task?.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
