import type { Metadata } from "next";
import { FORTUNES } from "@/lib/fortunes";
import { FortuneCard } from "@/components/FortuneCard";

export const metadata: Metadata = {
  title: "占い一覧",
  description: "5種類の占いから、気になるテーマを選んでください。",
};

export default function FortunesPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">F O R T U N E&nbsp;&nbsp;M E N U</span>
          <h2>占い一覧</h2>
          <p>6つの占いから、気になるテーマで選んでください。</p>
        </div>

        <div className="card-grid cols-3">
          {FORTUNES.map((f) => (
            <FortuneCard key={f.slug} fortune={f} withMedia />
          ))}
        </div>

        <p className="disclaimer-note" style={{ marginTop: 50 }}>
          画像は順次差し替え予定です。
        </p>
      </div>
    </section>
  );
}
