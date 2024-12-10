import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useMemo, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let nextId = 0;
function createTodo(text: string, completed = false): Todo {
  return {
    id: nextId++,
    text,
    completed
  };
}

const initialTodos: Todo[] = [
  createTodo('买苹果', true),
  createTodo('买橘子', true),
  createTodo('买胡萝卜'),
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "0.5rem",
      alignItems: "flex-start", padding: "0.5rem", 
    }}>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        只显示未完成的事项
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} 项待办
      </footer>
    </div>
  );
}

function NewTodo({ onAdd }: {
  onAdd: (todo: Todo) => void;
}) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <div>
      <input style={bgStyle} value={text} onChange={e => setText(e.target.value)} />
      <button style={btnStyle} onClick={handleAddClick}>
        添加
      </button>
    </div>
  );
}

// 第 2 个挑战 共 4 个挑战: 不用 Effect 缓存计算结果
let calls = 0;
function getVisibleTodos(todos: Todo[], showActive: boolean) {
  console.log(`getVisibleTodos() 被调用了 ${++calls} 次`);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

export function TodoList2() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');
  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );

  function handleAddClick() {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "0.5rem",
      alignItems: "flex-start", padding: "0.5rem", 
    }}>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        只显示未完成的事项
      </label>
      <div>
        <input style={bgStyle} value={text} onChange={e => setText(e.target.value)} />
        <button style={btnStyle} onClick={handleAddClick}>
          添加
        </button>
      </div>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
