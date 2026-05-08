import type { Metadata } from "next";
import Link from "next/link";
import { CrownIcon, ArrowRightIcon, PalmIcon, MoonStarIcon, ScrollIcon } from "@/components/icons/Icon";

export const metadata: Metadata = { title: "マイページ" };

const HISTORY = [
  { slug: "palm", name: "掌紋占術", title: "変化の入口にいます", date: "2026/05/06", Icon: PalmIcon },
  { slug: "birthdate", name: "宿曜占星", title: "静かな再起動", date: "2026/05/03", Icon: MoonStarIcon },
  { slug: "name", name: "言霊占術", title: "響きが結ぶ縁", date: "2026/04/29", Icon: ScrollIcon },
];

export default function MyPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">M Y&nbsp;&nbsp;P A G E</span>
          <h2>こんにちは、星野さん</h2>
          <p>あなたの占い履歴とプラン状況です。</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 26,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <div className="result-body" style={{ margin: 0 }}>
            <h3>プラン</h3>
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: 28,
                margin: "8px 0",
              }}
            >
              Free
            </p>
            <p className="muted" style={{ fontSize: 12 }}>
              登録：2026/05/01
            </p>
            <Link
              className="btn btn-gold btn-block"
              href="/pricing"
              style={{ marginTop: 16 }}
            >
              <CrownIcon width={16} height={16} /> プレミアムに変更
            </Link>
          </div>

          <div className="result-body" style={{ margin: 0 }}>
            <h3>占い履歴</h3>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              {HISTORY.map((h) => (
                <Link
                  key={h.date}
                  className="fortune-card"
                  href={`/result/${h.slug}`}
                  style={{
                    padding: "18px 20px",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    className="icon-frame"
                    style={{ width: 44, height: 44 }}
                  >
                    <h.Icon width={22} height={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 15, margin: 0 }}>
                      {h.name} - {h.title}
                    </h3>
                    <p
                      style={{ fontSize: 12, margin: "4px 0 0" }}
                      className="muted"
                    >
                      {h.date}
                    </p>
                  </div>
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1000, margin: "30px auto 0" }}>
          <div className="result-body" style={{ margin: 0 }}>
            <h3>プロフィール</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
                marginTop: 14,
              }}
            >
              <div className="form-row" style={{ margin: 0 }}>
                <label>表示名</label>
                <input type="text" defaultValue="星野 結" />
              </div>
              <div className="form-row" style={{ margin: 0 }}>
                <label>生年月日</label>
                <input type="date" defaultValue="1995-04-12" />
              </div>
              <div className="form-row" style={{ margin: 0 }}>
                <label>居住地</label>
                <select defaultValue="東京都">
                  <option>東京都</option>
                  <option>大阪府</option>
                </select>
              </div>
              <div className="form-row" style={{ margin: 0 }}>
                <label>メール</label>
                <input type="email" defaultValue="example@hoshi.jp" />
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 18 }}>
              変更を保存
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
