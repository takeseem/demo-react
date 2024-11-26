'use client';

import { myBlog, myRepo, myRepoBlameMain, myRepoCommitMain, myRepoMain } from "@/app/lib/placeholder-data";
import { faGithub, faRev } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";


export default function Page() {
  return (
    <main>
      <PageInfo />
      <ProductPanel />
    </main>
  );
}

type Product = {
  name: string;
  category: string;
  price: string;
  stocked: boolean;
};

const products: Product[] = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


function ProductPanel() {
  const [searchTxt, setSearchTxt] = useState("");
  const [onlyStock, setOnlyStock] = useState(false);

  const filteredProducts = products.filter(v => {
    if (searchTxt && !v.name.toLowerCase().includes(searchTxt)) return false;
    if (onlyStock && !v.stocked) return false;
    return true;
  });

  return (
    <div style={{ padding: "1rem" }}>
      <SearchBar searchTxt={searchTxt} handleSearchTxt={setSearchTxt}
        onlyStock={onlyStock} handleOnlyStock={setOnlyStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

function SearchBar({ searchTxt, handleSearchTxt, onlyStock, handleOnlyStock }: {
  searchTxt: string;
  handleSearchTxt: (txt: string) => void;
  onlyStock: boolean;
  handleOnlyStock: (checked: boolean) => void;
}) {
  return (
    <div>
      <input type="text" placeholder="Search..."
        style={{ padding: "0 0.5rem", backgroundColor: "gray"  }}
        value={searchTxt} onChange={e => handleSearchTxt(e.target.value)}
      />
      <br />
      <label>
        <input type="checkbox" checked={onlyStock} onChange={e => handleOnlyStock(e.target.checked)} />
        {' '}Only show products in stock
      </label>
    </div>
  );
}

function ProductTable({ products }: { products: Product[] }) {
  // products 根据 category 分类形成新的数据结构
  const categories: { [key: string]: Product[] } = {};
  products.forEach(v => {
    let list = categories[v.category];
    if (!list) {
      list = [];
      categories[v.category] = list;
    }
    list.push(v);
  });

  return (
    <div>
      <table>
        <thead><tr><th style={{ width: "80%" }}>Name</th><th>Price</th></tr></thead>
        <tbody>
          {Object.entries(categories).map(([category, list]) => (
              <ProductCategoryRow key={category} category={category} products={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductCategoryRow({ category, products }: { category: string, products: Product[] }) {
  return (
    <>
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
      {products.map(v => (
        <ProductRow key={v.name} product={v} />
      ))}
    </>
  );
}

function ProductRow({ product }: { product: Product }) {
  return (
    <tr>
      <td>
        <p style={ product.stocked ? {} : { color: 'red' } }>{product.name}</p>
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

function PageInfo() {
  const pagePath = "/app/demo/react-think/page.tsx";
  return (
    <div className='p-4'>
      <Link href={`${myBlog}/code/fe/react/react-zx.html`} target="_blank">
        <FontAwesomeIcon icon={faBrain} className="rotate-[15deg]" /> React 哲学
      </Link>
      <div className="p-4 max-w-md">
        怎样使用 React 构建界面组件？
        <div>
          <Link href={myRepoMain + pagePath} target="_blank">
            <FontAwesomeIcon icon={faGithub}/>
            {' '}源码：<code>{pagePath}</code>
          </Link>
        </div>
        <div>
          <Link href={myRepoBlameMain + pagePath} target="_blank">
            <FontAwesomeIcon icon={faRev} />
            {' '}Blame
          </Link>
        </div>
        <div>
          <Link href={myRepoCommitMain + pagePath} target="_blank">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            {' '}提交记录
          </Link>
        </div>
      </div>
    </div>
  );
}
