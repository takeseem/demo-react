import { bgStyle } from "@/app/lib/definitions";
import { ChangeEvent, useState } from "react";

type Food = {
  id: number;
  name: string;
  description: string;
};

const foods: Food[] = [{
  id: 0,
  name: '寿司',
  description: '寿司是一道传统的日本菜，是用醋米饭做成的'
}, {
  id: 1,
  name: '木豆',
  description: '制作木豆最常见的方法是在汤中加入洋葱、西红柿和各种香料'
}, {
  id: 2,
  name: '饺子',
  description: '饺子是用未发酵的面团包裹咸的或甜的馅料，然后在沸水中煮制而成的'
}, {
  id: 3,
  name: '烤肉串',
  description: '烤肉串是一种很受欢迎的食物，是用肉串和肉块做成。'
}, {
  id: 4,
  name: '点心',
  description: '点心是广东人的传统喜好，是在餐馆吃早餐和午餐时喜欢吃的一系列小菜'
}];

function filterItems(items: Food[], query: string) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export default function FilterableList() {
  return (
    <>
      <SearchBar />
      <hr />
      <List items={foods} />
    </>
  );
}

function SearchBar() {
  const [query, setQuery] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <label>
      搜索：{' '}
      <input style={bgStyle}
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }: {
  items: Food[];
}) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
