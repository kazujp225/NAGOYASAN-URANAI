import type { Metadata } from "next";
import Link from "next/link";
import { RANKING } from "@/lib/content";
import { FORTUNES } from "@/lib/fortunes";
import { ArrowRightIcon } from "@/components/icons/Icon";

export const metadata: Metadata = {
  title: "ランキング",
  description: "今月もっとも読まれている占いランキング。",
};

export default function RankingPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">R A N K I N G</span>
          <h2>今月の人気占いランキング</h2>
          <p>みんなが読んでいる占い、上位5つをご紹介します。</p>
        </div>

        <div className="rank-list">
          {RANKING.map((r, i) => {
            const fortune = FORTUNES.find((f) => f.slug === r.fortuneSlug);
            return (
              <Link
                key={r.rank}
                href={fortune?.href ?? "/fortunes"}
                className={`rank-item${i === 0 ? " top" : ""}`}
              >
                <div className="rank-num">{r.rank}</div>
                <div className="rank-info">
                  <div className="rank-meta">{r.category}</div>
                  <h4>{r.title}</h4>
                  <p>{r.description}</p>
                </div>
                <ArrowRightIcon width={18} height={18} />
              </Link>
            );
          })}
        </div>

        <p className="disclaimer-note" style={{ marginTop: 50 }}>
          ランキングは過去30日間の閲覧数をもとに集計しています。
        </p>
      </div>
    </section>
  );
}
