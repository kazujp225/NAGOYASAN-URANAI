import { notFound } from "next/navigation";
import Link from "next/link";
import { COLUMNS, getColumn } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons/Icon";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return COLUMNS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const c = getColumn(params.slug);
  return { title: c?.title ?? "コラム" };
}

export default function ColumnDetailPage({ params }: Props) {
  const c = getColumn(params.slug);
  if (!c) notFound();

  const others = COLUMNS.filter((x) => x.slug !== params.slug).slice(0, 3);

  return (
    <article>
      <div className="container" style={{ paddingTop: 60 }}>
        <p className="muted" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
          {c.category} / {c.date}
        </p>
        <h1
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            margin: "16px 0 24px",
            lineHeight: 1.4,
          }}
        >
          {c.title}
        </h1>

        <div
          className="column-thumb"
          style={{
            aspectRatio: "16/8",
            borderRadius: 22,
            border: "1px solid var(--line)",
            marginBottom: 36,
          }}
        >
          {c.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={c.image} alt={c.title} />
          ) : (
            <span className="ph-label">IMAGE</span>
          )}
        </div>

        <div
          className="result-body"
          style={{ margin: "0 auto", maxWidth: 720 }}
        >
          <p>{c.excerpt}</p>
          <p>{c.body}</p>
          <p>
            占いは、未来を「決める」ものではなく、自分を「整える」ためのきっかけ。心地よく付き合っていけるとよいですね。
          </p>
        </div>
      </div>

      <section className="s">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">M O R E</span>
            <h2>こちらもどうぞ</h2>
          </div>
          <div className="column-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/columns/${o.slug}`} className="column-card">
                <div className="column-thumb">
                  {o.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={o.image} alt={o.title} loading="lazy" />
                  ) : (
                    <span className="ph-label">IMAGE</span>
                  )}
                </div>
                <div className="column-body">
                  <div className="column-cat">{o.category}</div>
                  <h3 className="column-title">{o.title}</h3>
                  <p className="column-excerpt">{o.excerpt}</p>
                  <div className="column-meta">
                    <span>{o.date}</span>
                    <span>
                      READ <ArrowRightIcon width={12} height={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
