import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useState } from "react";

let nextId = 3;
const initialItems: Travel[] = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];
type Travel = {
  id: number;
  title: string;
  packed: boolean;
};

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const total = items.length;
  let packed = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].packed) packed++;
  }

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem: Travel) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId: number) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <>  
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}

function AddItem({ onAddItem }: {
  onAddItem: (title: string) => void;
}) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input style={bgStyle}
        placeholder="Add item"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button style={btnStyle} onClick={() => {
        setTitle('');
        onAddItem(title);
      }}>Add</button>
    </>
  )
}

function PackingList({
  items,
  onChangeItem,
  onDeleteItem
}: {
  items: Travel[];
  onChangeItem: (item: Travel) => void;
  onDeleteItem: (id: number) => void;
}) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)} style={btnStyle}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}