import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useEffect, useMemo, useState } from "react";

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

// 第 3 个挑战 共 4 个挑战: 不用 Effect 重置 state
type Contact = {
  id: number;
  name: string;
  email: string;
};

const initialContacts: Contact[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
export function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  );

  function handleSave(updatedData: Contact) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr style={{ margin: "0.5rem 0", width: "18rem", }}/>
      <EditContact
        savedContact={selectedContact as Contact}
        onSave={handleSave}
      />
    </div>
  )
}

export function EditContact({ savedContact, onSave }: {
  savedContact: Contact;
  onSave: (updatedData: Contact) => void;
}) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  useEffect(() => {
    setName(savedContact.name);
    setEmail(savedContact.email);
  }, [savedContact]);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0.5rem", }}>
      <label>
        姓名：{' '}
        <input style={bgStyle}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        邮箱：{' '}
        <input style={bgStyle}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <section>
        <button onClick={() => {
          const updatedData = {
            id: savedContact.id,
            name: name,
            email: email
          };
          onSave(updatedData);
        }} style={btnStyle}>
          保存
        </button>
        <button onClick={() => {
          setName(savedContact.name);
          setEmail(savedContact.email);
        }} style={btnStyle}>
          重置
        </button>
      </section>
    </section>
  );
}

function ContactList({ contacts, selectedId, onSelect }: {
  contacts: Contact[],
  selectedId: number,
  onSelect: (id: number) => void
}) {
  return (
    <section>
      <ul style={{ display: "flex", gap: "0.5rem", }}>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => {
              onSelect(contact.id);
            }} style={btnStyle}>
              {contact.id === selectedId ?
                <b>{contact.name}</b> :
                contact.name
              }
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}