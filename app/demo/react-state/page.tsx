/* eslint-disable @next/next/no-img-element */
'use client';

import { reactState } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import styles from "./react-state.module.css";
import { useState } from "react";

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
      </div>
    </main>
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