import type { Metadata } from "next";
import Link from "next/link";
import { COLUMNS } from "@/lib/content";

export const metadata: Metadata = {
  title: "コラム",
  description: "占いと日々の過ごし方についての読み物。",
};

export default function ColumnsPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">C O L U M N</span>
          <h2>占いと、毎日の過ごし方</h2>
          <p>占いと暮らしのヒント、自己理解の言葉を綴っています。</p>
        </div>

        <div className="column-grid">
          {COLUMNS.map((c) => (
            <Link key={c.slug} href={`/columns/${c.slug}`} className="column-card">
              <div className="column-thumb">
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.image} alt={c.title} loading="lazy" />
                ) : (
                  <span className="ph-label">IMAGE</span>
                )}
              </div>
              <div className="column-body">
                <div className="column-cat">{c.category}</div>
                <h3 className="column-title">{c.title}</h3>
                <p className="column-excerpt">{c.excerpt}</p>
                <div className="column-meta">
                  <span>{c.date}</span>
                  <span>READ MORE</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
