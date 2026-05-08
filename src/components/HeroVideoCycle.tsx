"use client";

import { useEffect, useRef, useState } from "react";

/** ループ対象の動画URL一覧。順番に切り替わる。 */
const VIDEOS = [
  "/hero/video/character.mp4",
  "/hero/video/character-2.mp4",
] as const;

/**
 * HEROの背景動画を 2 本（VIDEOS）順番にループ再生する。
 * - 1 本ずつ再生し、ended イベントで次の動画に切り替え
 * - key 切替で React に video 要素を再マウントさせて autoPlay を確実に発火
 * - 個々の動画は loop なし（2本サイクルのため）
 */
export function HeroVideoCycle() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onEnded = () => setIdx((i) => (i + 1) % VIDEOS.length);
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [idx]);

  return (
    <video
      ref={ref}
      key={idx}
      className="hero-bg-video"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={VIDEOS[idx]} type="video/mp4" />
    </video>
  );
}
