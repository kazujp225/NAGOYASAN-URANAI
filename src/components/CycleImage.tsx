"use client";

import { useEffect, useState } from "react";

type Props = {
  /** 切り替えたい画像のパス配列。/public/ からの絶対パスで指定 */
  sources: string[];
  /** 切り替え間隔（ミリ秒） */
  intervalMs?: number;
  /** 開始位置をずらしたい場合に */
  startOffset?: number;
  alt?: string;
  className?: string;
  /** 画像未配置時のフォールバック表示（背景は外側のCSSでつけている前提） */
  fallback?: React.ReactNode;
};

/**
 * 同じスロット内で複数画像をフェード切替するクライアントコンポーネント。
 * すべての画像を絶対配置で重ねて、opacityで切り替える。
 */
export function CycleImage({
  sources,
  intervalMs = 4000,
  startOffset = 0,
  alt = "",
  className,
  fallback = null,
}: Props) {
  const [idx, setIdx] = useState(startOffset % Math.max(sources.length, 1));

  useEffect(() => {
    if (sources.length <= 1) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % sources.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [sources, intervalMs]);

  if (sources.length === 0) return <>{fallback}</>;

  return (
    <>
      {sources.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          className={className}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === idx ? 1 : 0,
            transition: "opacity 1.2s ease",
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}
