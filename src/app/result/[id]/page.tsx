import Link from "next/link";
import { Character } from "@/components/Character";
import { ShareRow } from "@/components/ShareRow";
import { CrownIcon, StarRow } from "@/components/icons/Icon";
import { FORTUNES } from "@/lib/fortunes";

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props) {
  const f = FORTUNES.find((x) => x.slug === params.id);
  return { title: f ? `${f.name} - 結果` : "占い結果" };
}

export default function ResultPage({ params }: Props) {
  const fortune = FORTUNES.find((f) => f.slug === params.id);
  const typeLabel = fortune?.name ?? "占い結果";

  return (
    <>
      <section className="result-hero container">
        <span className="type-tag">R E S U L T</span>
        <p
          className="muted"
          style={{ fontSize: 12, letterSpacing: "0.2em", marginBottom: 8 }}
        >
          {typeLabel}
        </p>
        <h1>
          今のあなたは、
          <br />
          変化の入口にいます
        </h1>
        <p className="lead" style={{ maxWidth: 600, margin: "0 auto" }}>
          手のひらに、新しい流れの兆しが映っています。焦らず、一歩ずつ進んでいって。
        </p>

        <div className="score-grid">
          <div className="score-tile">
            <div className="label">総合運</div>
            <div className="val">78</div>
            <StarRow value={4} />
          </div>
          <div className="score-tile">
            <div className="label">恋愛運</div>
            <div className="val">72</div>
            <StarRow value={4} />
          </div>
          <div className="score-tile">
            <div className="label">仕事運</div>
            <div className="val">81</div>
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
          <h3>あなたの傾向</h3>
          <p>
            今のあなたは、内側で何かが芽吹いている時期にいます。これまで「こうあるべき」と思って抑えていた気持ちが、少しずつ表に出てこようとしています。
          </p>
          <p>
            感情線がやわらかく流れているので、人との関わりに前向きさが戻ってきやすいタイミング。久しぶりに会う人との会話の中に、思いがけないヒントが隠れているかもしれません。
          </p>

          <h3 style={{ marginTop: 30 }}>今日のラッキーアクション</h3>
          <p>
            ・気が向いた相手にひとこと連絡してみる
            <br />
            ・短い散歩で頭を整理する
            <br />
            ・ノートに「今日感じたこと」を3行だけ書く
          </p>
        </div>

        <div className="premium-lock">
          <h4>
            <CrownIcon /> もっと詳しく読む
          </h4>
          <p className="muted">
            恋愛・仕事・金運の詳細鑑定と、これからの1ヶ月の見通し、ミラからの追加コメントが開放されます。
          </p>
          <div className="blur-text" style={{ marginTop: 18 }}>
            恋愛面では、過去に手放せなかった感情と一度向き合うタイミング。仕事面では、新しい人脈の中に次の扉が...金運は緩やかな上昇カーブを描き...
          </div>
          <Link href="/pricing" className="btn btn-gold btn-lg">
            プレミアムを見る
          </Link>
        </div>

        <div className="text-center" style={{ margin: "40px 0" }}>
          <h3
            className="serif"
            style={{ fontSize: 22, marginBottom: 18 }}
          >
            この結果をシェア
          </h3>
          <ShareRow shareText='今のあなたは、変化の入口にいます。 #星結びの占い' />
        </div>

        <div className="text-center" style={{ margin: "40px 0 80px" }}>
          <h3
            className="serif"
            style={{ fontSize: 22, marginBottom: 18 }}
          >
            他の占いも試す
          </h3>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {FORTUNES.filter((f) => f.slug !== params.id).map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.slug} className="pill" href={f.href}>
                  <Icon className="icon" width={16} height={16} />
                  {f.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Character message="読んでくれてありがとう。気になるテーマがあれば、もうひとつ占ってみるのもおすすめだよ。" />
    </>
  );
}
