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

function ProductPanel() {
  return (
    <div>
      <SearchBar />
      <ProductTable />
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

function ProductTable() {
  return (
    <div>
      <table>
        <thead><tr><th>Name</th><th>Price</th></tr></thead>
        <tbody>
          <ProductCategoryRow />
        </tbody>
      </table>
    </div>
  );
}

function ProductCategoryRow() {
  return (
    <>
      <tr>
        <td colSpan={2}>category name</td>
      </tr>
      <ProductRow />
    </>
  );
}
function ProductRow() {
  return (
    <tr>
      <td>name</td><td>price</td>
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
