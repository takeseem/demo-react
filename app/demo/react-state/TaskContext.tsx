import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

const initialTasks: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

type TaskReducerAction = {
  type: string & ("added" | "changed" | "deleted");
  id?: number;
  text?: string;
  task?: Task;
};

const TasksDispatchContext = createContext<Dispatch<TaskReducerAction>>(() => { });
const TasksContext = createContext<Task[]>([]);

let nextId = 3;

export default function TasksProvider({ children, }: { children: ReactNode, }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks: Task[], action: TaskReducerAction): Task[] {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: nextId++,
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

export function useTasks(): Task[] {
  return useContext(TasksContext);
}

export function useTasksDispatch(): Dispatch<TaskReducerAction> {
  return useContext(TasksDispatchContext);
}
