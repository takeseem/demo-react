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
      SearchBar
    </div>
  );
}

function ProductTable() {
  return (
    <div>
      Name, Price
      <ProductCategoryRow />
    </div>
  );
}

function ProductCategoryRow() {
  return (
    <div>
      category name
      <ProductRow />
    </div>
  );
}
function ProductRow() {
  return (
    <div>
      name, price
    </div>
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
