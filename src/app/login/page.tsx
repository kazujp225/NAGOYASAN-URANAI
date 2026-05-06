import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "ログイン" };

export default function LoginPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">L O G I N</span>
          <h2>ようこそ、星見の場所へ</h2>
          <p>ログインすると、占い履歴の保存とプレミアム機能が利用できます。</p>
        </div>

        <form className="form-card">
          <div className="form-row">
            <label>メールアドレス</label>
            <input type="email" placeholder="example@hoshi.jp" required />
          </div>
          <div className="form-row">
            <label>パスワード</label>
            <input type="password" placeholder="********" required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            ログインする
          </button>

          <div
            className="text-center"
            style={{
              margin: "22px 0",
              color: "var(--ink-mute)",
              fontSize: 12,
            }}
          >
            — または —
          </div>

          <button type="button" className="btn btn-ghost btn-block">
            Googleでログイン
          </button>

          <p
            className="text-center muted"
            style={{ marginTop: 20, fontSize: 13 }}
          >
            はじめての方は{" "}
            <Link href="/login" style={{ color: "var(--gold-soft)" }}>
              新規登録
            </Link>
            <br />
            パスワードをお忘れの方は{" "}
            <Link href="/login" style={{ color: "var(--gold-soft)" }}>
              こちら
            </Link>
          </p>

          <p className="disclaimer-note" style={{ marginTop: 20 }}>
            ログインすると
            <Link href="/terms" style={{ color: "var(--gold-soft)" }}>
              利用規約
            </Link>
            と
            <Link href="/privacy" style={{ color: "var(--gold-soft)" }}>
              プライバシーポリシー
            </Link>
            に同意したものとみなされます。
          </p>
        </form>
      </div>
    </section>
  );
}
