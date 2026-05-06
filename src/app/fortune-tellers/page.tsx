import type { Metadata } from "next";
import { TELLERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "占い師一覧",
  description: "星結びの占いの占い師たちをご紹介します。",
};

export default function FortuneTellersPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">F O R T U N E&nbsp;&nbsp;T E L L E R S</span>
          <h2>占い師一覧</h2>
          <p>あなたの今日に寄り添う、6人の星見人。</p>
        </div>

        <div className="teller-grid">
          {TELLERS.map((t) => (
            <article key={t.id} className="teller-card">
              <div className="teller-avatar">
                {t.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.image} alt={t.name} loading="lazy" />
                )}
              </div>
              <h3 className="teller-name">{t.name}</h3>
              <p className="teller-tagline">{t.tagline}</p>
              <p className="teller-bio">{t.bio}</p>
              <div className="teller-tags">
                {t.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="disclaimer-note" style={{ marginTop: 50 }}>
          画像はクライアント側で順次差し替え予定です。
        </p>
      </div>
    </section>
  );
}
