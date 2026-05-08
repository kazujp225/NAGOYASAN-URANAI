import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { FORTUNES } from "@/lib/fortunes";
import { FortuneCard } from "@/components/FortuneCard";

export const metadata: Metadata = {
  title: "六占術一覧",
  description:
    "掌紋・言霊・宿曜・方位・命運・卜占。6つの占術から、気になるテーマを選んでください。",
};

/**
 * 6つの掛軸の中心横位置（％）。menu-banner.jpg (1672×941) の実測ベース。
 */
const HOTSPOT_X: Record<string, number> = {
  palm: 18.5,
  name: 31.5,
  birthdate: 44.4,
  location: 57.3,
  life: 70.2,
  daily: 83.1,
};

export default function FortunesPage() {
  return (
    <section className="s s-fortunes-banner-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">F O R T U N E&nbsp;&nbsp;M E N U</span>
          <h2>占い一覧</h2>
          <p>六つの占術から、気になるテーマで選んでください。</p>
        </div>
      </div>

      {/* デスクトップ：6掛軸バナー（全幅・縁なし） */}
      <div className="fortunes-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fortunes/menu-banner.jpg"
          alt="六占術 — 掌紋・言霊・宿曜・方位・命運・卜占"
          loading="eager"
        />
        {FORTUNES.map((f) => (
          <Link
            key={f.slug}
            href={f.href}
            className="banner-hotspot"
            style={{ "--x": `${HOTSPOT_X[f.slug] ?? 50}%` } as CSSProperties}
            aria-label={f.name}
            title={f.name}
          >
            <span className="banner-hotspot-label">{f.name}</span>
          </Link>
        ))}
      </div>

      {/* モバイル：カードグリッドにフォールバック */}
      <div className="container">
        <div className="card-grid cols-3 fortunes-fallback">
          {FORTUNES.map((f) => (
            <FortuneCard key={f.slug} fortune={f} withMedia />
          ))}
        </div>
      </div>
    </section>
  );
}
