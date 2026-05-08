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
 * 6つの掛軸の中心横位置（％）。menu-banner.jpg の構図に合わせて調整。
 * FORTUNES の slug 順と一致させる：palm/name/birthdate/location/life/daily
 */
const HOTSPOT_X: Record<string, number> = {
  palm: 12,
  name: 26,
  birthdate: 40.5,
  location: 54.5,
  life: 68,
  daily: 82,
};

export default function FortunesPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">F O R T U N E&nbsp;&nbsp;M E N U</span>
          <h2>占い一覧</h2>
          <p>六つの占術から、気になるテーマで選んでください。</p>
        </div>

        {/* デスクトップ：6掛軸バナー＋ホットスポット */}
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
        <div className="card-grid cols-3 fortunes-fallback">
          {FORTUNES.map((f) => (
            <FortuneCard key={f.slug} fortune={f} withMedia />
          ))}
        </div>
      </div>
    </section>
  );
}
