"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_A = "/hero/video/character.mp4";
const VIDEO_B = "/hero/video/character-2.mp4";

/** クロスフェードの長さ（秒）。CSS側の transition と合わせる。 */
const FADE_SEC = 1.4;

/**
 * HEROの背景動画を 2 本クロスフェードで切り替え続けるコンポーネント。
 * - <video> を 2 つ重ねる（preload=auto で両方バッファ）
 * - 片方が ended になったら、もう片方を currentTime=0 から再生し、is-active を付け替えてフェード
 * - パッと切れる瞬間が無く、自然に溶けて入れ替わる
 */
export function HeroVideoCycle() {
  // どちらが「いま見えている」側か
  const [active, setActive] = useState<"a" | "b">("a");
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    // 端末が autoplay を許可していない場合に備えて、初期 play を明示
    a.play().catch(() => {});

    /** クロスフェードのタイミングで「次」を再生し始める */
    const switchTo = (target: "a" | "b") => {
      const nextEl = target === "a" ? a : b;
      nextEl.currentTime = 0;
      nextEl.play().catch(() => {});
      setActive(target);
    };

    const onEndedA = () => switchTo("b");
    const onEndedB = () => switchTo("a");

    /**
     * 「終端の前」にフェードを始めるために timeupdate でも判定。
     * これにより、現在の動画が完全に止まる前から次の動画が再生され、
     * 重なっている FADE_SEC のあいだに opacity が滑らかに入れ替わる。
     */
    const startFadeBeforeEnd = (el: HTMLVideoElement, target: "a" | "b") => {
      if (!el.duration) return;
      if (el.currentTime >= el.duration - FADE_SEC && active !== target) {
        switchTo(target);
      }
    };
    const onTimeA = () => startFadeBeforeEnd(a, "b");
    const onTimeB = () => startFadeBeforeEnd(b, "a");

    a.addEventListener("ended", onEndedA);
    b.addEventListener("ended", onEndedB);
    a.addEventListener("timeupdate", onTimeA);
    b.addEventListener("timeupdate", onTimeB);

    return () => {
      a.removeEventListener("ended", onEndedA);
      b.removeEventListener("ended", onEndedB);
      a.removeEventListener("timeupdate", onTimeA);
      b.removeEventListener("timeupdate", onTimeB);
    };
  }, [active]);

  return (
    <>
      <video
        ref={refA}
        className={`hero-bg-video${active === "a" ? " is-active" : ""}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={VIDEO_A} type="video/mp4" />
      </video>
      <video
        ref={refB}
        className={`hero-bg-video${active === "b" ? " is-active" : ""}`}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={VIDEO_B} type="video/mp4" />
      </video>
    </>
  );
}
