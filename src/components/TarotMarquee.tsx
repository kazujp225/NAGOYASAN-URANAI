import type { CSSProperties } from "react";
import Link from "next/link";

export type TarotPhoto = {
  src: string;
  alt: string;
  numeral: string;
  title: string;
  /** クリック時の遷移先（任意） */
  href?: string;
};

type Props = {
  photos: TarotPhoto[];
  /** 1ループあたりの秒数（既定 50秒） */
  durationSec?: number;
};

/** 扇状の回転角（5値を循環させる） */
const ROT_DEGS = [-8, -4, 0, 4, 8] as const;

/**
 * 写真入りタロットカードを横に流すシームレスマーキー。
 * - photos × 2 セット並べて translateX(0)→translateX(-50%) でループ
 * - 各カードは 180×260 / 金の二重縁 / 上：ローマ数字 / 中：写真 / 下：タイトル
 * - ホバーで起き上がり、rose-500 の金グロー
 * - 両端は mask-image でフェード
 */
export function TarotMarquee({ photos, durationSec = 50 }: Props) {
  if (photos.length === 0) return null;
  const doubled = [...photos, ...photos];

  return (
    <div
      className="tarot-marquee"
      style={{ "--marquee-duration": `${durationSec}s` } as CSSProperties}
    >
      <div className="tarot-marquee-track">
        {doubled.map((p, i) => {
          // 重複セット間で同じ写真が同じ角度になるよう、写真インデックスで決定
          const rot = ROT_DEGS[i % photos.length % ROT_DEGS.length];
          const card = (
            <div
              className="card-tarot-photo"
              style={{ "--rot": `${rot}deg` } as CSSProperties}
              role="group"
              aria-label={p.title}
            >
              <div className="ctp-frame-outer">
                <div className="ctp-frame-inner">
                  <span className="ctp-numeral">{p.numeral}</span>
                  <div className="ctp-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.alt} loading="lazy" />
                  </div>
                  <h3 className="ctp-title">{p.title}</h3>
                </div>
              </div>
            </div>
          );
          return p.href ? (
            <Link
              href={p.href}
              key={`${i}-${p.title}`}
              className="ctp-link"
              aria-label={p.title}
            >
              {card}
            </Link>
          ) : (
            <div key={`${i}-${p.title}`} className="ctp-link">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
