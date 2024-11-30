/* eslint-disable @next/next/no-img-element */
'use client';

import { reactAddInter } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";

const h1Style = { fontSize: "1.5rem", fontWeight: "bold", };
export default function Page() {
  return (
    <main>
      <ProjectPageInfo project={reactAddInter} />
      <hr style={{ margin: "0 0 1rem", }}/>
      <div>
        <div>
          <h1 style={h1Style}>如何响应事件？</h1>
        </div>
      </div>
    </main>
  );
}
