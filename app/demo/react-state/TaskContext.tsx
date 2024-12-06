
export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export const initialTasks: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

export type TaskReducerAction = {
  type: string & ("added" | "changed" | "deleted");
  id?: number;
  text?: string;
  task?: Task;
};