/* eslint-disable @next/next/no-img-element */
'use client';

import { reactJsx } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";


export default function Page() {
  return (
    <>
      <div>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", }}>第一个组件</h1>
          <Gallery />
        </div>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", }}>TodoList</h1>
          <TodoList />
        </div>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", }}>将 Props 传递给组件</h1>
          <Profile2 />
        </div>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", }}>条件渲染</h1>
          <PackingList />
        </div>
      </div>
      <hr style={{ margin: "1rem 0 0", }}/>
      <main>
        <ProjectPageInfo project={reactJsx} />
      </main>
    </>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item name="Space Suit" packed={true} />
        <Item name="Helmet with a Golden Leaf" packed={true} />
        <Item name="Photo of Tam" packed={false} />
      </ul>
    </section>
  );
}
function Item({ name, packed }: { name: string, packed: boolean }) {
  return (
    <li>
      <span>{name}</span>
      {' '}
      <span>{packed ? '✅' : '❌'}</span>
    </li>
  );
}

function Profile2() {
  return (
    <Card>
      <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size="100" />
    </Card>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#fff", width: "fit-content",
      padding: "1rem", borderRadius: "1rem", margin: "1rem",
    }}>
      {children}
    </div>
  );
}

type Person = {
  name: string;
  imageId: string;
}

const getImageUrl = (person: Person, size = 's') => `https://i.imgur.com/${person.imageId}${size}.jpg`;
function Avatar({ person, size }: { person: Person; size: string }) {
  return (
    <img style={{ borderRadius: "50%" }}
      src={getImageUrl(person)} alt={person.name}
      width={size} height={size} />
  );
}

function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}


function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <div style={{ display: "flex", padding: "1rem 0"}}>
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
function Profile() {
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  );
}