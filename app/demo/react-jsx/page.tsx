/* eslint-disable @next/next/no-img-element */
'use client';

import { reactJsx } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";


export default function Page() {
  return (
    <>
      <div>
        <div>
          <Gallery />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
      <hr style={{ margin: "1rem 0 0", }}/>
      <main>
        <ProjectPageInfo project={reactJsx} />
      </main>
    </>
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