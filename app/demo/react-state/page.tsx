/* eslint-disable @next/next/no-img-element */
'use client';

import { reactState } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import styles from "./react-state.module.css";
import { useState } from "react";
import { bgStyle, btnStyle } from "@/app/lib/definitions";

const h1Style = { fontSize: "1.5rem", fontWeight: "bold", };
export default function Page() {
  return (
    <main>
      <ProjectPageInfo project={reactState} />
      <div>
        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战：添加和删除一个 CSS class</h1>
          <p>点击图片时：移除紫色背景，并高亮图片边框</p>
          <p>点击图片外时：高亮背景，并删除图片边框的高亮效果</p>
          <DemoPicSelect />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战：个人信息编辑器</h1>
          <p>编辑模式可以看到输入框，并编辑。当你改变输入框的内容时，欢迎信息会最下面实时更新。</p>
          <DemoEditProfile />
        </div>
      </div>
    </main>
  );
}

function DemoEditProfile() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start", }}>
      <label>
        First name:{' '}
        <b>Jane</b>
        <input style={bgStyle} />
      </label>
      <label>
        Last name:{' '}
        <b>Jacobs</b>
        <input style={bgStyle}/>
      </label>
      <button type="submit" style={btnStyle}>
        Edit Profile
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form>
  );
}


function DemoPicSelect() {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles.background + (selected ? "" : " " + styles['background--active'])}
      onClick={() => setSelected(false)}
    >
      <img
        className={styles.picture + (selected ? " " + styles['picture--active'] : "")}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setSelected(true);
        }}
      />
    </div>
  );
}