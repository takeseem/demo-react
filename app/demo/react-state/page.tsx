/* eslint-disable @next/next/no-img-element */
'use client';

import { reactState } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import styles from "./react-state.module.css";
import { useEffect, useState } from "react";
import { bgStyle, btnStyle } from "@/app/lib/definitions";
import TravelPlan from "./TravelPlan";
import MailClient from "./MailClient";
import MailClient2 from "./MailClient2";
import SyncedInputs from "./SyncedInputs";
import FilterableList from "./FilterableList";
import MissText from "./MissText";
import ReverseTxt from "./ReverseTxt";
import ContactManager from "./ConcatManager";

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

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 修复一个未更新的组件</h1>
          <p>选择不同的颜色时，Clock 组件将从其父组件接收到一个不同的 color 属性。然而，由于某种原因，显示的颜色没有更新。为什么？</p>
          <FixClock />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 修复一个损坏的打包清单</h1>
          <p>bug: 如果你将一个物品标记为已打包然后删除它，计数器就不会正确更新</p>
          <TravelPlan />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 修复消失的高亮选择</h1>
          <p>bug: 当你点击“Star”或“Unstar”时，高亮会短暂消失</p>
          <MailClient />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 实现多选功能</h1>
          <p>你需要将 state 结构更改为支持多选功能。</p>
          <MailClient2 />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 同步输入状态</h1>
          <p>编辑一个输入框时，另一个输入框也会更新相同的文本，反之亦然。</p>
          <SyncedInputs />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 列表过滤</h1>
          <p>使用 filterItems(foods, query) 方法来通过搜索条件过滤列表项</p>
          <FilterableList />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 修复丢失的输入框文本</h1>
          <p>按下按钮时会展示一条消息，但同时也会意外地重置输入框</p>
          <MissText />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 交换两个表单字段</h1>
          <p>bug: 如果填写“名字”输入框并勾选复选框，文本将保留在第一个输入框(也就是现在的“姓氏”)</p>
          <ReverseTxt />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>挑战: 重置详情表单</h1>
          <p>bug: 当你选中另一个联系人（比如 Alice），状态就会更新，但表单会一直显示之前那个联系人的详细信息</p>
          <ContactManager />
        </div>
      </div>
    </main>
  );
}

function FixClock() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)} style={bgStyle}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Clock(props: { color: string, time: string }) {
  return (
    <h1 style={{ color: props.color, }}>
      {props.time}
    </h1>
  );
}

type Profile = {
  firstName: string;
  lastName: string;
};
function DemoEditProfile() {
  const [profile, setProfile] = useState<Profile>({
    firstName: "Jane",
    lastName: "Jacobs",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start", }}>
      <label>
        First name:{' '}
        {isEdit
          ? <input style={bgStyle} value={profile.firstName} onChange={(e) => {
                setProfile({ ...profile, firstName: e.target.value })
              }} />
          : <b>{profile.firstName}</b>
        }
      </label>
      <label>
        Last name:{' '}
        {isEdit
          ? <input style={bgStyle} value={profile.lastName} onChange={(e) => {
                setProfile({ ...profile, lastName: e.target.value })
              }} />
          : <b>{profile.lastName}</b>
        }
      </label>
      <button type="submit" style={btnStyle} onClick={(e) => {
        e.preventDefault();
        setIsEdit(!isEdit);
      }}>
        {isEdit ? "Save Profile" : "Edit Profile" }
      </button>
      <p><i>Hello, {profile.firstName} {profile.lastName}!</i></p>
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