/* eslint-disable @next/next/no-img-element */
'use client';

import { btnStyle, h1Style } from "@/app/lib/definitions";
import { reactAddInter } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import { useState } from "react";

export default function Page() {
  return (
    <main>
      <ProjectPageInfo project={reactAddInter} />
      <hr style={{ margin: "0 0 1rem", }} />
      <div>
        <div>
          <h1 style={h1Style}>如何响应事件？</h1>
          <DemoOnClick />
        </div>
      </div>
    </main>
  );
}


function DemoOnClick() {
  const [info, setInfo] = useState("");
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setInfo(`点击了：${target.innerText}`);
  }
  return (
    <div>
      <MyButton name="Play Movie" onClick={handleClick} />
      <MyButton name="Upload Image" onClick={handleClick} />
      <br />
      <p>{info}</p>
    </div>
  );
}
function MyButton({ name, onClick }: { name: string; onClick: (e: React.MouseEvent) => void; }) {
  return <button onClick={onClick} style={btnStyle}>{name}</button>;
}