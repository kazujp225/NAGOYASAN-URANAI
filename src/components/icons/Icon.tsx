import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/** 手 (palm) */
export function PalmIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 11V5a1.5 1.5 0 0 1 3 0v5" />
      <path d="M12 10V3.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M15 10V5a1.5 1.5 0 0 1 3 0v8" />
      <path d="M9 11V8.5a1.5 1.5 0 0 0-3 0V15a6 6 0 0 0 6 6h1.5a6 6 0 0 0 6-6v-2" />
    </svg>
  );
}

/** 名前（巻物） */
export function ScrollIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7" />
      <path d="M5 6v12a2 2 0 0 0 2 2" />
      <line x1="9" y1="9" x2="17" y2="9" />
      <line x1="9" y1="13" x2="17" y2="13" />
      <line x1="9" y1="17" x2="14" y2="17" />
    </svg>
  );
}

/** 生年月日（月＋星） */
export function MoonStarIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M16 13.5a6 6 0 1 1-5.5-9 5 5 0 0 0 5.5 9z" />
      <path d="M19 4l.7 1.8L21.5 6l-1.8.7L19 8.5l-.7-1.8L16.5 6l1.8-.7z" />
    </svg>
  );
}

/** 居住地（コンパス） */
export function CompassIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </svg>
  );
}

/** 総合（八光星） */
export function SparkleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3l1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4z" />
      <path d="M19 16l.6 1.4L21 18l-1.4.6L19 20l-.6-1.4L17 18l1.4-.6z" />
      <path d="M5 16l.6 1.4L7 18l-1.4.6L5 20l-.6-1.4L3 18l1.4-.6z" />
    </svg>
  );
}

/** 今日の運勢（太陽） */
export function SunIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

/** クラウン（プレミアム） */
export function CrownIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 17l2-9 5 5 2-7 2 7 5-5 2 9z" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}

/** カメラ */
export function CameraIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7l1.5-2h3L15 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

/** ロゴマーク（八角星） */
export function LogoMark(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
    </svg>
  );
}

/** 共有 */
export function ShareIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <line x1="8" y1="11" x2="16" y2="7" />
      <line x1="8" y1="13" x2="16" y2="17" />
    </svg>
  );
}

/** リンク */
export function LinkIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M10 14a4 4 0 0 1 0-5.7l3-3a4 4 0 0 1 5.7 5.7l-1.5 1.5" />
      <path d="M14 10a4 4 0 0 1 0 5.7l-3 3a4 4 0 0 1-5.7-5.7l1.5-1.5" />
    </svg>
  );
}

/** 矢印 */
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

/** 閉じる */
export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

/** 星 (filled) */
export function StarFilled(props: IconProps) {
  return (
    <svg {...baseProps} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" />
    </svg>
  );
}

/** 星 (outline) */
export function StarOutline(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" />
    </svg>
  );
}

/** 月（タロット用） */
export function MoonIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M19 14a8 8 0 1 1-9-9 6 6 0 0 0 9 9z" />
    </svg>
  );
}

/** タロット用：八角星 */
export function StarBurst(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 2v8M12 14v8M2 12h8M14 12h8M5 5l5 5M14 14l5 5M19 5l-5 5M10 14l-5 5" />
    </svg>
  );
}

/** Xロゴ */
export function XLogo(props: IconProps) {
  return (
    <svg {...baseProps} fill="currentColor" stroke="none" {...props}>
      <path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.7L4.3 21H1l7.7-8.8L1.5 3H8.3l4.7 6.2zM16 19h1.8L7.7 5H5.7z" />
    </svg>
  );
}

/** スコア星表示用ヘルパー */
export function StarRow({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="stars" aria-label={`${value}/${max}`}>
      {Array.from({ length: max }).map((_, i) =>
        i < value ? (
          <StarFilled key={i} width={12} height={12} />
        ) : (
          <StarOutline key={i} width={12} height={12} style={{ opacity: 0.35 }} />
        ),
      )}
    </span>
  );
}
