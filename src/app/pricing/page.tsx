import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "料金プラン" };

export default function PricingPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">P L A N</span>
          <h2>料金プラン</h2>
          <p>無料で始めて、気が向いたときに深く読む。</p>
        </div>

        <div className="plan-grid">
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
            <Link className="btn btn-primary btn-block" href="/login">
              プレミアムにする
            </Link>
          </div>
        </div>

        <div style={{ maxWidth: 880, margin: "50px auto 0" }}>
          <div className="result-body" style={{ margin: 0 }}>
            <h3>単発鑑定について</h3>
            <p>
              「総合人生占い」「節目の人生鑑定」など、深い鑑定を一度だけお試しいただける単発プランもご用意しています。
              <br />
              価格帯：¥300 〜 ¥1,500（鑑定内容により異なります）
            </p>
            <p
              className="muted"
              style={{ fontSize: 12, marginTop: 14 }}
            >
              ※ 価格は変更される場合があります。決済はStripeを通じて安全に処理されます。
            </p>
          </div>
        </div>

        <div className="faq" style={{ marginTop: 60 }}>
          <details>
            <summary>解約はいつでもできますか？</summary>
            <p>
              はい。マイページからいつでも解約可能です。次回更新日まではプレミアム機能をそのままご利用いただけます。
            </p>
          </details>
          <details>
            <summary>支払い方法は？</summary>
            <p>
              クレジットカード（Stripe）に対応しています。Visa / Mastercard / JCB / American Express がご利用いただけます。
            </p>
          </details>
          <details>
            <summary>無料プランから自動で課金されますか？</summary>
            <p>
              いいえ。Premiumへのアップグレードは、お客様が明示的に手続きいただいた場合のみ発生します。
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
