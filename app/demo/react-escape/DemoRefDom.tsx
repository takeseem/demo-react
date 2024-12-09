import { bgStyle, btnStyle } from '@/app/lib/definitions';
import { useRef, useState, } from 'react';

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
  return (
    <>
      <nav>
        <button style={btnStyle}>搜索</button>
      </nav>
      <input style={bgStyle}
        placeholder="找什么呢？"
      />
    </>
  );
}
