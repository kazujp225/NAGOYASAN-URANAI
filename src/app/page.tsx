import Link from "next/link";
import { FORTUNES } from "@/lib/fortunes";
import { Character } from "@/components/Character";
import { CycleImage } from "@/components/CycleImage";
import { HeroVideoCycle } from "@/components/HeroVideoCycle";
import { TarotMarquee, type TarotPhoto } from "@/components/TarotMarquee";
import { HERO_SLIDES, HERO_INTERVAL_MS } from "@/lib/heroSlides";
import { ArrowRightIcon } from "@/components/icons/Icon";

const ROMAN = [
  "I", "II", "III", "IV", "V", "VI",
  "VII", "VIII", "IX", "X", "XI", "XII",
];

/** タロットマーキー用の写真リスト：FORTUNES から構成 */
const TAROT_PHOTOS: TarotPhoto[] = FORTUNES.map((f, i) => ({
  src: f.image ?? "",
  alt: f.name,
  numeral: ROMAN[i] ?? `${i + 1}`,
  title: f.name,
  href: f.href,
}));

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        {/* モバイル専用ポスター画像（テキストは画像内にベイクされている） */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-mobile-poster"
          src="/hero/poster-mobile.jpg"
          alt="星結びの占い - あなたの運命、今日ひらく。"
        />

        {/* 動画フレーム：動画のアスペクト比 (2206/946) を保ったままcover配置するラッパー。
            この要素の中で％指定すれば、動画コンテンツの座標と一致する。 */}
        <div className="hero-video-frame" aria-hidden="true">
          <div className="hero-video-inner">
            {/* 2本の動画をサイクル再生（character.mp4 → character-2.mp4 → ループ） */}
            <HeroVideoCycle />
          </div>
        </div>

        <div className="container">
          <div className="hero-visual">
            {/* 12分割の円環（ローマ数字） */}
            <div className="zodiac-ring">
              {ROMAN.map((r, i) => (
                <span
                  key={r}
                  className="roman"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-138px)`,
                  }}
                >
                  {r}
                </span>
              ))}
            </div>

            {/* 左：手相カード（4枚カルーセル） */}
            <div className="phone-mock left">
              <h4>PALM READING</h4>
              <div className="palm-illust">
                <CycleImage
                  sources={HERO_SLIDES.palm}
                  intervalMs={HERO_INTERVAL_MS}
                />
              </div>
              <div className="caption">あなたの手から</div>
            </div>

            {/* 右：今日の運勢カード（4枚カルーセル） */}
            <div className="phone-mock right">
              <h4>TODAY&apos;S FORTUNE</h4>
              <div className="palm-illust">
                <CycleImage
                  sources={HERO_SLIDES.daily}
                  intervalMs={HERO_INTERVAL_MS}
                  startOffset={2}
                />
              </div>
              <div className="caption">2026 / 05 / 06</div>
            </div>

            <div className="tarot-card a">
              <CycleImage
                sources={HERO_SLIDES.tarotMoon}
                intervalMs={HERO_INTERVAL_MS}
                startOffset={1}
              />
            </div>
            <div className="tarot-card b">
              <CycleImage
                sources={HERO_SLIDES.tarotStar}
                intervalMs={HERO_INTERVAL_MS}
                startOffset={2}
              />
            </div>
            <div className="tarot-card c">
              <CycleImage
                sources={HERO_SLIDES.tarotSun}
                intervalMs={HERO_INTERVAL_MS}
                startOffset={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 空間遷移：路地から館へ ============ */}
      <div className="void void-alley" aria-hidden="true">
        <div className="void-line" />
        <span className="void-kanji">門</span>
        <p className="void-caption">路地の奥に、灯りが見える。</p>
      </div>

      {/* ============ 占いメニュー（タロットマーキー） ============ */}
      <section className="s s-fortunes">
        <div className="container">
          <div className="section-head section-head-left">
            <span className="eyebrow">館 / 占い棚</span>
            <h2>
              6つの占いが、
              <br />
              静かに流れている。
            </h2>
            <p>気になった一枚を、そっと選ぶ。</p>
          </div>
        </div>

        {/* マーキーは container の外で全幅に流す */}
        <TarotMarquee photos={TAROT_PHOTOS} durationSec={50} />
      </section>

      {/* ============ 空間遷移：解析室への入口 ============ */}
      <div className="void void-deep" aria-hidden="true">
        <span className="void-kanji-small">奥</span>
      </div>

      {/* ============ 解析室：実際のUIを見せる ============ */}
      <section className="s s-analysis">
        <div className="container analysis-shell">
          <div className="analysis-text">
            <span className="eyebrow">解析室 / ANALYSIS ROOM</span>
            <h2>
              夜の手のひらを、
              <br />
              静かに読み解く。
            </h2>
            <p>
              撮影された手相の線、生まれた日の星、名前の響き。
              <br />
              すべてが空気にほどけて、あなたの今を映す。
            </p>
            <Link className="btn btn-outline" href="/fortunes/palm">
              手相を読み解く <ArrowRightIcon width={14} height={14} />
            </Link>
          </div>

          <div className="analysis-stage">
            {/* スキャナ：実際の手相を読み込む様子 */}
            <div className="palm-scanner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero/palm/1.jpg" alt="palm reading" />
              <div className="scanner-grid" />
              <div className="scanner-line" />
              <div className="scanner-corner tl" />
              <div className="scanner-corner tr" />
              <div className="scanner-corner bl" />
              <div className="scanner-corner br" />
              <span className="scanner-marker m1">M1 · 生命線</span>
              <span className="scanner-marker m2">M2 · 感情線</span>
              <span className="scanner-marker m3">M3 · 頭脳線</span>
              <span className="scanner-status">SCANNING…</span>
            </div>

            {/* ライブスコア */}
            <div className="score-widget">
              <div className="sw-head">
                <span className="eyebrow">LIVE / 0:18</span>
                <span className="sw-id">#9C-274</span>
              </div>
              <div className="sw-main">
                <div className="sw-num">92<small>/100</small></div>
                <div className="sw-label">総合運</div>
              </div>
              <div className="sw-stats">
                <div><span>恋愛</span><b>85</b><i style={{ width: "85%" }} /></div>
                <div><span>仕事</span><b>78</b><i style={{ width: "78%" }} /></div>
                <div><span>金運</span><b>64</b><i style={{ width: "64%" }} /></div>
                <div><span>人間関係</span><b>71</b><i style={{ width: "71%" }} /></div>
              </div>
              <div className="sw-foot">小さな選択が、流れを変える日。</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 静寂の余白 ============ */}
      <div className="void void-silence" aria-hidden="true" />

      {/* ============ 日替わり占い ============ */}
      <section className="s">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">D A I L Y</span>
            <h2>毎日変わる、今日の運勢</h2>
            <p>365日分。日付ごとに、その日のあなたへ。</p>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div className="result-body" style={{ margin: 0 }}>
              <span
                className="muted"
                style={{ fontSize: 12, letterSpacing: "0.2em" }}
              >
                2026 / 05 / 06
              </span>
              <h3 style={{ marginTop: 10 }}>小さな選択が、流れを変える日</h3>
              <p>
                今日は迷ったら「軽い方」を選ぶと良い日です。深く考えすぎず、心が向いた方を信じてみて。
                <br />
                会話の中に、ヒントが隠れているかもしれません。
              </p>
              <Link className="btn btn-gold" href="/daily">
                今日の運勢を詳しく見る <ArrowRightIcon width={14} height={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 料金プラン（ポスター画像） ============ */}
      <section className="s s-plan">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">P L A N</span>
            <h2>
              無料で始めて、
              <br />
              気が向いたら深く読む
            </h2>
            <p>あなたのペースで、占いと付き合えます。</p>
          </div>

          <figure className="plan-poster">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/plan/poster.jpg"
              alt="Free ¥0/月 と Premium ¥980/月 — 二つの掛軸"
              loading="lazy"
            />
            <figcaption className="plan-cta-row">
              <Link href="/login" className="btn btn-outline btn-lg">
                無料ではじめる
              </Link>
              <Link href="/pricing" className="btn btn-primary btn-lg">
                プレミアムを見る <ArrowRightIcon width={14} height={14} />
              </Link>
            </figcaption>
          </figure>

          {/* 旧 plan-grid のレガシー要素は撤去（CSSは他ページ /pricing で再利用するため残置） */}
          <div className="plan-grid" hidden>
            <div className="plan">
              <h3>Free</h3>
              <p className="muted">まずは試してみたい方へ</p>
              <div className="price">
                ¥0<small>/ 月</small>
              </div>
              <ul>
                <li>6種類の占いの簡易結果</li>
                <li>手相撮影UI</li>
                <li>シェア機能</li>
              </ul>
              <Link className="btn btn-ghost btn-block" href="/login">
                無料ではじめる
              </Link>
            </div>
            <div className="plan premium">
              <span className="badge">PREMIUM</span>
              <h3>Premium</h3>
              <p className="muted">深く知りたいあなたへ</p>
              <div className="price">
                ¥980<small>/ 月</small>
              </div>
              <ul>
                <li>詳細結果の全文閲覧</li>
                <li>総合人生占いの全項目</li>
                <li>日替わり占いの詳細解説</li>
                <li>キャラクターからの追加コメント</li>
                <li>過去の占い履歴閲覧</li>
              </ul>
              <Link className="btn btn-primary btn-block" href="/pricing">
                プランを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="s">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Q &amp; A</span>
            <h2>よくある質問</h2>
          </div>
          <div className="faq">
            <details>
              <summary>占いは無料で使えますか？</summary>
              <p>
                はい、5種類の占いの簡易結果と日替わり占いの一部は無料でご利用いただけます。詳細な鑑定結果はPremiumプランで開放されます。
              </p>
            </details>
            <details>
              <summary>手相画像は保存されますか？</summary>
              <p>
                原則として、結果生成後に画像は短期間で削除されます。詳細はプライバシーポリシーをご確認ください。
              </p>
            </details>
            <details>
              <summary>占い結果はどのくらい当たりますか？</summary>
              <p>
                本サービスはエンターテインメントおよび自己理解のきっかけを目的としています。重要な判断は専門家にご相談ください。
              </p>
            </details>
            <details>
              <summary>解約はいつでもできますか？</summary>
              <p>
                はい、Premiumプランはマイページからいつでも解約できます。次回更新日まではプレミアム機能をご利用いただけます。
              </p>
            </details>
          </div>
        </div>
      </section>

      <div className="container">
        <p className="disclaimer-note">
          本サービスの占い結果は、エンターテインメントおよび自己理解のきっかけとして提供されるものです。
          <br />
          医療・法律・金融・その他専門的判断の代替ではありません。
        </p>
      </div>

      <Character />
    </>
  );
}
