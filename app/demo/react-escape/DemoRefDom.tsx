import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { forwardRef, Ref, useRef, useState, } from 'react';
import { flushSync } from 'react-dom';

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    console.log(new Date().toISOString(), 'handleClick', nextIsPlaying);
    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick} style={btnStyle}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <video width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}


export function PageFocus() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <nav>
        <button style={btnStyle} onClick={() => ref.current?.focus()}>搜索</button>
      </nav>
      <input style={bgStyle} ref={ref}
        placeholder="找什么呢？"
      />
    </>
  );
}


type CatItem = {
  id: number;
  imageUrl: string;
};
const catList: CatItem[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
  });
}
export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLLIElement>(null);
  return (
    <>
      <nav>
        <button style={btnStyle} onClick={() => {
          const nextIndex = index < catList.length - 1 ? index + 1 : 0;
          flushSync(() => {
            setIndex(nextIndex);
          });
          ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          })
        }}>
          下一个
        </button>
      </nav>
      <div style={{ width: '100%', overflow: 'hidden', }}>
        <ul style={{ whiteSpace: 'nowrap', }}>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index == i ? ref : null} style={{ display: 'inline-block', padding: "0.5rem", }}>
              <img
                style={{
                  padding: "0.5rem",
                  background: index === i ? '#00649666' : '',
                }}
                src={cat.imageUrl}
                alt={'猫猫 #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function PageSearch() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <nav>
        <SearchButton onClick={() => ref.current?.focus()} />
      </nav>
      <SearchInputWithRef ref={ref} />
    </>
  );
}
function SearchButton({ onClick }: { onClick: () => void; }) {
  return (
    <button style={btnStyle} onClick={onClick}>
      搜索
    </button>
  );
}

// 第一种方式定义 forwardRef
function SearchInput(_props: object, ref: Ref<HTMLInputElement>) {
  return (
    <input style={bgStyle} ref={ref}
      placeholder="找什么呢？"
    />
  );
}
const SearchInputWithRef = forwardRef(SearchInput);

// 第二种方式定义 forwardRef
const SearchInput2 = forwardRef<HTMLInputElement>((_props, ref: Ref<HTMLInputElement>) => {
  return (
    <input style={bgStyle}
      placeholder="找什么呢？"
      ref={ref}
    />
  );
});
SearchInput2.displayName = 'SearchInput2';
