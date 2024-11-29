/* eslint-disable @next/next/no-img-element */
'use client';

import { reactJsx } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";

const h1Style = { fontSize: "1.5rem", fontWeight: "bold", };
export default function Page() {
  return (
    <main>
      <ProjectPageInfo project={reactJsx} />
      <hr style={{ margin: "0 0 1rem", }}/>
      <div>
        <div>
          <h1 style={h1Style}>第一个组件</h1>
          <Gallery />
        </div>
        <div>
          <h1 style={h1Style}>TodoList</h1>
          <TodoList />
        </div>
        <div>
          <h1 style={h1Style}>将 Props 传递给组件</h1>
          <Profile2 />
        </div>
        <div>
          <h1 style={h1Style}>条件渲染</h1>
          <PackingList />
        </div>
        <div>
          <h1 style={h1Style}>渲染列表</h1>
          <PeopleList />
        </div>
      </div>
    </main>
  );
}

type People = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};
const peoples: People[] = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

function PeopleList() {
  return (
    <article>
      <h1>科学家</h1>
      <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", }}>
        {peoples.map((person) => (
          <li key={person.id} style={{
            display: "flex", gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Avatar person={person} size="100" />
            <p style={{ flex: "0 1 20rem", }}>
              <b>{person.name}</b>
              {` ${person.profession} known for ${person.accomplishment}`}
            </p>
          </li>
        ))}
      </ul>
    </article>
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