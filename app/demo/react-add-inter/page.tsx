/* eslint-disable @next/next/no-img-element */
'use client';

import { bgStyle, btnStyle, h1Style } from "@/app/lib/definitions";
import { reactAddInter } from "@/app/lib/placeholder-data";
import { ProjectPageInfo } from "@/app/ui/demo/ProjectPageInfo";
import { FormEvent, useState } from "react";
import { useImmer } from "use-immer";

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

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>State：组件的状态</h1>
          <DemoState />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>渲染和提交</h1>
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>state 如同一张快照</h1>
          <DemoSend />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>把一系列 state 更新加入队列</h1>
          <DemoStateInc />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>更新 state 中的对象（运用 &apos;...&apos; 展开语法复制对象）</h1>
          <DemoObj />
        </div>

        <hr style={{ margin: "1rem 0", }} />
        <div>
          <h1 style={h1Style}>更新 state 中的数组</h1>
          <DemoArray />
        </div>
      </div>
    </main>
  );
}

type Art = {
  id: number;
  title: string;
  seen: boolean;
};
const initArts: Art[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function DemoArray() {
  const [list, setList] = useState(initArts);
  function onToggle(id: number, checked: boolean) {
    setList(list.map(v => v.id == id ? {...v, seen: checked} : v));
  }
  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ArtItem arts={list} onToggle={onToggle} />
    </>
  );
}
function ArtItem({ arts, onToggle, }: {
  arts: Art[],
  onToggle: (id: number, checked: boolean) => void,
}) {
  return (
    <ul>{arts.map(v => (
      <li key={v.id}>
        <label>
          <input type="checkbox" checked={v.seen} onChange={ e => onToggle(v.id, e.target.checked)}/>
          &nbsp;
          {v.title}
        </label>
      </li>
    ))}</ul>
  );
}


type Person = {
  name: string;
  artwork: {
    title: string;
    city: string;
    image: string;
  };
};


function DemoObj() {
  const [person, setPerson] = useImmer<Person>({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson(draft => {
      draft.name = e.target.value
    });
  }
  function handleArtworkTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson(draft => {
      draft.artwork.title = e.target.value
    });
  }
  function handleArtworkCity(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson(draft => {
      draft.artwork.city = e.target.value
    });
  }
  function handleArtworkImage(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson(draft => {
      draft.artwork.image = e.target.value
    });
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", }}>
      <label>
        Name:
        <input style={bgStyle} value={person.name} onChange={handleName} />
      </label>
      <label>
        Title:
        <input style={bgStyle} value={person.artwork.title} onChange={handleArtworkTitle} />
      </label>
      <label>
        City:
        <input style={bgStyle} value={person.artwork.city} onChange={handleArtworkCity} />
      </label>
      <label>
        Image:
        <input style={bgStyle} value={person.artwork.image} onChange={handleArtworkImage} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} width={"50%"} />
    </div>
  );
}

function DemoStateInc() {
  const [score, setScore] = useState(0);
  function inc() {
    setScore(v => v + 1);
  }
  return (
    <>
      <h1 style={h1Style}>Score: {score}</h1>
      <button style={btnStyle} onClick={inc}>+1</button>
      &nbsp;
      <button style={btnStyle} onClick={() => {
        inc();
        inc();
        inc();
      }}>+3</button>
    </>
  );
}

function DemoSend() {
  const [to, setTo] = useState("Alice");
  const [msg, setMsg] = useState("Hello");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Yor said ${msg} to ${to}.`);
    }, 5000);
  }
  return (
    <form style={{ padding: "1rem", }} onSubmit={handleSubmit}>
      To:&nbsp;
      <select style={bgStyle} value={to} onChange={e => setTo(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
      </select>
      <br />
      <textarea style={bgStyle} placeholder="Message..."
        value={msg} onChange={e => setMsg(e.target.value)} />
      <br/>
      <button style={btnStyle} type="submit">Send</button> 5 秒后发送，但内容是发送时的状态数据。
    </form>
  );
}


function DemoState() {
  const len = sculptures.length;
  const [pos, setPos] = useState(0);
  const [showDesc, setShowDesc] = useState(false);

  function handleNext() {
    const nextPos = (pos + 1) % len;
    setPos(nextPos);
  }
  function handleShowDesc() {
    setShowDesc(!showDesc);
  }
  const cur = sculptures[pos];
  return (
    <div>
      <button style={btnStyle} onClick={handleNext}>下一个</button>
      <h2 style={h1Style}>{cur.name}</h2>
      <p>({pos + 1} of {len})</p>
      <button style={btnStyle} onClick={handleShowDesc}>{showDesc ? "隐藏描述" : "显示描述"}</button>
      {showDesc && <p>{cur.description}</p>}
      <img src={cur.url} alt={cur.alt} />
    </div>
  );
}
const sculptures = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];


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