import { myBlog } from "@/app/lib/placeholder-data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


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
  const filteredProducts = products;
  return (
    <div style={{ padding: "1rem" }}>
      <SearchBar />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <br />
      <input type="checkbox" /> Only show products in stock
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
  return (
    <div className='p-4'>
      <Link href={`${myBlog}/code/fe/react/react-zx.html`} target="_blank">
        <FontAwesomeIcon icon={faBrain} className="rotate-[15deg]" /> React 哲学
      </Link>
      <div className="p-4 max-w-md">
        怎样使用 React 构建界面组件？
        <div>
          <Link href={`${myBlog}/code/fe/react/react-zx.html`} target="_blank">
            <FontAwesomeIcon icon={faGithub} className="rotate-[15deg]" />
            <code>/demo/react-think/page.tsx</code>
          </Link>
        </div>
      </div>
    </div>
  );
}
