import { btnStyle } from "@/app/lib/definitions";
import { useRef } from "react";

export function Counter() {
  let ref = useRef(0);

  return (
    <button style={btnStyle} onClick={() => {
      console.log("clicked");
      ref.current += 1;
      alert('当前点击次数：' + ref.current);
    }}>点击我！</button>
  );
}