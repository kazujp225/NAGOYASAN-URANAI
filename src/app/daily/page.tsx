import type { Metadata } from "next";
import Link from "next/link";
import { Character } from "@/components/Character";
import { ShareRow } from "@/components/ShareRow";
import { CrownIcon, StarRow } from "@/components/icons/Icon";

export const metadata: Metadata = { title: "今日の卜占 — 毎日変わる、今日の星" };

export default function DailyPage() {
  return (
    <>
      <section className="result-hero container">
        <span className="type-tag">D A I L Y&nbsp;&nbsp;F O R T U N E</span>
        <p
          className="muted"
          style={{ letterSpacing: "0.2em", fontSize: 13 }}
        >
          2026 / 05 / 06
        </p>
        <h1>
          小さな選択が、
          <br />
          流れを変える日
        </h1>
        <p className="lead" style={{ maxWidth: 560, margin: "0 auto" }}>
          今日は迷ったら「軽い方」を選ぶと良い日です。深く考えすぎず、心が向いた方を信じてみて。
        </p>

        <div className="score-grid">
          <div className="score-tile">
            <div className="label">総合運</div>
            <div className="val">92</div>
            <StarRow value={5} />
          </div>
          <div className="score-tile">
            <div className="label">恋愛運</div>
            <div className="val">85</div>
            <StarRow value={4} />
          </div>
          <div className="score-tile">
            <div className="label">仕事運</div>
            <div className="val">78</div>
            <StarRow value={4} />
          </div>
          <div className="score-tile">
            <div className="label">金運</div>
            <div className="val">64</div>
            <StarRow value={3} />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="result-body">
          <h3>今日のあなたへ</h3>
          <p>
            新しい流れがやってくる予感がする一日。普段なら見過ごしてしまう小さなサインに、今日は耳を澄ませてみてください。
          </p>
          <p>
            会話の中に、ヒントが隠れているかもしれません。誰かのちょっとした一言が、これからのあなたを後押しします。
          </p>

          <h3 style={{ marginTop: 30 }}>今日のラッキー</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 14,
            }}
          >
            <div className="score-tile">
              <div className="label">ラッキーカラー</div>
              <div className="val" style={{ fontSize: 18 }}>ラベンダー</div>
            </div>
            <div className="score-tile">
              <div className="label">ラッキーアイテム</div>
              <div className="val" style={{ fontSize: 18 }}>小さな本</div>
            </div>
            <div className="score-tile">
              <div className="label">ラッキー方位</div>
              <div className="val" style={{ fontSize: 18 }}>南東</div>
            </div>
          </div>
        </div>

        <div className="premium-lock">
          <h4>
            <CrownIcon /> 詳しい鑑定はPremiumで
          </h4>
          <p className="muted">
            恋愛・仕事・金運の詳細解説と、今週の見通し、明日への一歩を読み解きます。
          </p>
          <div className="blur-text" style={{ marginTop: 18 }}>
            恋愛面では、いつも自分から動いてきたあなたへ、今日は受け取る側に回ってみることがポイント。仕事面では小さな違和感を見逃さず...
          </div>
          <Link href="/pricing" className="btn btn-gold btn-lg">
            プレミアムプランを見る
          </Link>
        </div>

        <div className="text-center" style={{ margin: "30px 0" }}>
          <ShareRow shareText='今日の私の運勢は「小さな選択が、流れを変える日」 #星結びの占い' />
        </div>
      </div>

      <Character message="今日のあなたは、ちょっと流れが変わり始めてるみたい。焦らず、まずは小さな行動から始めてみてね。" />
    </>
  );
}
