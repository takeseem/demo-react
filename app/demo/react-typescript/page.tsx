'use client';

import { reactTypeScript } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";


export default function Page() {
  return (
    <>
      <div>
        <div style={{ display: "flex", gap: "1rem", padding: "0.5rem", }}>
          <Abutton />
          <Abutton2 />
        </div>
      </div>
      <hr style={{ margin: "1rem 0 0", }}/>
      <main>
        <ProjectPageInfo project={reactTypeScript} />
      </main>
    </>
  );
}

const btnStyle = {
  border: "1px solid gray",
  borderRadius: "0.5rem",
  padding: "0.5rem"
};

function Abutton2() {
  return (
    <div>
      <h1>MyButton2 和 MyButtonProps 参数 </h1>
      <MyButton2 title="MyButton2 disabled=true" disabled={true} />
    </div>
  );
}
interface MyButtonProps {
  title: string;
  disabled: boolean;
}
function MyButton2({ title, disabled }: MyButtonProps) {
  return (
    <button style={btnStyle} disabled={disabled}>
      {title}
    </button>
  )
}

function Abutton() {
  return (
    <div>
      <h1>定义 MyButton 组件</h1>
      <MyButton title="我是一个 MyButton" />
    </div>
  );
}
function MyButton({ title }: { title: string }) {
  return (
    <button style={btnStyle}>
      {title}
    </button>
  )
}