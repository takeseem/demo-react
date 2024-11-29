'use client';

import { reactTypeScript } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import { createContext, useCallback, useContext, useReducer, useState } from "react";


export default function Page() {
  return (
    <>
      <div>
        <div style={{ display: "flex", gap: "1rem", padding: "0.5rem", }}>
          <Abutton />
          <Abutton2 />
        </div>
        <div style={{ display: "flex", gap: "1rem", padding: "0.5rem", }}>
          <UseReducerDemo />
        </div>
        <div style={{ display: "flex", gap: "1rem", padding: "0.5rem", }}>
          <UseContextDemo />
        </div>
        <div style={{ display: "flex", gap: "1rem", padding: "0.5rem", }}>
          <UseCallbackDemo />
        </div>
      </div>
      <hr style={{ margin: "1rem 0 0", }}/>
      <main>
        <ProjectPageInfo project={reactTypeScript} />
      </main>
    </>
  );
}

const inputStyle = {
  background: "gray",
};

function UseCallbackDemo() {
  const [value, setValue] = useState("init value");
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(e => {
    setValue(e.target.value);
  }, [setValue]);
  return (
    <>
      <input value={value} style={inputStyle} onChange={handleChange} />
      <p>值：{value}</p>
    </>
  );
}

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("dark");
const useGetTheme = () => useContext(ThemeContext);
function UseContextDemo() {
  const [theme, ] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <MyUseContextComponent />
    </ThemeContext.Provider>
  );
}
function MyUseContextComponent() {
  const theme = useGetTheme();
  return (
    <div>
      <h1>useContext demo</h1>
      当前主题：{theme}
    </div>
  );
}


const btnStyle = {
  border: "1px solid gray",
  borderRadius: "0.5rem",
  padding: "0.5rem"
};

function UseReducerDemo() {
  interface State {
    count: number,
  }
  const state0 = { count: 0 };
  type Action = | { type: "reset" } | { type: "add", value: number };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "reset":
        return state0;
      case "add":
        return { ...state, count: state.count + action.value };
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, state0);
  
  return (
    <div>
      <h1>useReducer demo</h1>
      计数：<text>{state.count}</text>
      <div>
        <button style={btnStyle} onClick={() => dispatch({ type: "add", value: 1, })}>加 1</button>
        <button style={btnStyle} onClick={() => dispatch({ type: "add", value: 5, })}>加 5</button>
        <button style={btnStyle} onClick={() => dispatch( { type: "reset", })}>重置</button>
      </div>
    </div>
  );
}

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