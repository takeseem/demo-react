/* eslint-disable @next/next/no-img-element */
'use client';

import { h1Style } from "@/app/lib/definitions";
import { reactEscape } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import Chat, { Chat2, Counter, Dashboard, Stopwatch, Toggle } from "./Demo1";
import CatFriends, { PageFocus, PageSearch, VideoPlayer } from "./DemoRefDom";
import { Form, Form2, Form3, Page4 } from "./DemoUseEffect";
import { ContactManager, FormSubmit4, TodoList, TodoList2 } from "./DenoNotEffect";
import { App2, App3, ChatApp, ChatApp4, EffectLifeApp5 } from "./DemoEffectLife";
import { TimerApp1, TimerApp2 } from "./DemoEffectEvent";

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

          <p>挑战: 修复坏掉的聊天输入框</p>
          <Chat />

          <p>挑战: 修复无法重新渲染的组件</p>
          <Toggle />

          <p>挑战: 修复防抖</p>
          <Dashboard />

          <p>挑战: 读取最新的 state</p>
          <Chat2 />
        </div>
      </div>

      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>使用 ref 操作 DOM</h1>
          <p>
            <a target="_blank" href="https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs#challenges">
              尝试一些挑战
            </a>
          </p>
          <p>第 1 个挑战 共 4 个挑战: 播放和暂停视频 </p>
          <VideoPlayer />

          <p>第 2 个挑战 共 4 个挑战: 使搜索域获得焦点</p>
          <PageFocus />

          <p>第 3 个挑战 共 4 个挑战: 滚动图像轮播</p>
          <CatFriends />

          <p>第 4 个挑战 共 4 个挑战: 使分开的组件中的搜索域获得焦点</p>
          <PageSearch />
        </div>
      </div>

      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>使用 Effect 进行同步</h1>
          <p>
            <a target="_blank" href="https://zh-hans.react.dev/learn/synchronizing-with-effects#challenges">
              尝试一些挑战
            </a>
          </p>

          <p>第 1 个挑战 共 4 个挑战: 挂载后聚焦于表单字段</p>
          <Form />

          <p>第 2 个挑战 共 4 个挑战: 有条件地聚焦于表单字段</p>
          <Form2 />

          <p>第 3 个挑战 共 4 个挑战: 修复会触发两次的定时器</p>
          <Form3 />

          <p>第 4 个挑战 共 4 个挑战: 解决在 Effect 中获取数据的问题</p>
          <Page4 />
        </div>
      </div>

      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>你可能不需要 Effect</h1>
          <p>
            <a target="_blank" href="https://zh-hans.react.dev/learn/you-might-not-need-an-effect#challenges">
              尝试一些挑战
            </a>
          </p>

          <p>第 1 个挑战 共 4 个挑战: 不用 Effect 转换数据</p>
          <TodoList />

          <p>第 2 个挑战 共 4 个挑战: 不用 Effect 缓存计算结果</p>
          <TodoList2 />

          <p>第 3 个挑战 共 4 个挑战: 不用 Effect 重置 state</p>
          <ContactManager />

          <p>第 4 个挑战 共 4 个挑战: 不用 Effect 提交表单</p>
          <FormSubmit4 />
        </div>
      </div>

      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>响应式 Effect 的生命周期</h1>
          <p>
            <a target="_blank" href="https://zh-hans.react.dev/learn/lifecycle-of-reactive-effects#challenges">
              尝试一些挑战
            </a>
          </p>

          <p>第 1 个挑战 共 5 个挑战: 修复每次输入均重新连接</p>
          <ChatApp />

          <p>第 2 个挑战 共 5 个挑战: 打开和关闭状态同步</p>
          <App2 />

          <p>第 3 个挑战 共 5 个挑战: 寻找过时值的错误</p>
          <App3 />

          <p>第 4 个挑战 共 5 个挑战: 修复连接开关</p>
          <ChatApp4 />

          <p>第 5 个挑战 共 5 个挑战: 填充一系列选择框</p>
          <EffectLifeApp5 />
        </div>
      </div>

      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>将事件从 Effect 中分开</h1>
          <p>
            <a target="_blank" href="https://zh-hans.react.dev/learn/separating-events-from-effects#challenges">
              尝试一些挑战
            </a>
          </p>

          <p>第 1 个挑战 共 4 个挑战: 修复一个不更新的变量</p>
          <TimerApp1 />

          <p>第 2 个挑战 共 4 个挑战: 修复一个冻结的计数器</p>
          <TimerApp2 />

          <p>第 3 个挑战 共 4 个挑战: 修复不可调整的延迟</p>
          {/* <TimerApp3 /> */}
        </div>
      </div>
    </main>
  );
}
