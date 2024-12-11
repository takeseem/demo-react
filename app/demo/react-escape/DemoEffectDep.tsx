import { btnStyle } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";

export function TimerDep1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ 创建定时器');
    const id = setInterval(() => {
      console.log('⏰ Interval');
      setCount(v => v + 1);
    }, 1000);
    return () => {
      console.log('❌ 清除定时器');
      clearInterval(id);
    };
  }, []);

  return <h1>计数器: {count}</h1>
}

// 第 2 个挑战 共 4 个挑战: 修复重新触发动画的问题
function Welcome({ duration }: { duration: number }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current as HTMLHeadingElement);
    animation.start(duration);
    return () => {
      animation.stop();
    };
  }, [duration]);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
      欢迎
    </h1>
  );
}

export function WelcomeApp() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0.5rem", alignItems: "flex-start", }}>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={e => setDuration(Number(e.target.value))}
        />
        <br />
        淡入 interval: {duration} ms
      </label>
      <button onClick={() => setShow(!show)} style={btnStyle}>
        {show ? '移除' : '显示'}
      </button>
      <hr style={{ width: "60%" }}/>
      {show && <Welcome duration={duration} />}
    </div>
  );
}
class FadeInAnimation {
  node: HTMLElement;
  startTime: number | null = null;
  frameId: number | null = null;
  duration = 0;

  constructor(node: HTMLElement) {
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    const timePassed = performance.now() - (this.startTime as number);
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    this.node.style.opacity = progress.toString();
  }
  stop() {
    cancelAnimationFrame(this.frameId as number);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}
