/* eslint-disable @next/next/no-img-element */
'use client';

import { h1Style } from "@/app/lib/definitions";
import { reactEscape } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import Chat, { Counter, Stopwatch } from "./Demo1";

export default function Page() {
  return (
    <main>
      <ProjectPageInfo project={reactEscape} />
      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>使用 ref 引用值</h1>
          <p>
            <a target="_blank" href="https://zh-hans.react.dev/learn/referencing-values-with-refs">
              官方文档
            </a>
          </p>
          <p>使用 useRef 存储点击次数：let ref = useRef(0);</p>
          <Counter />

          <p>{`使用 useRef 存储 intervalId：const intervalRef = useRef<NodeJS.Timeout | null>(null);`}</p>
          <Stopwatch />

          <p>挑战: 修复坏掉的聊天输入框 </p>
          <Chat />          
        </div>
      </div>
    </main>
  );
}
