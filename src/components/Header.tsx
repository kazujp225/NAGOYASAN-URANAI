import Link from "next/link";
import { LogoMark } from "@/components/icons/Icon";

export function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <Link href="/" className="brand">
          <span className="logo-mark">
            <LogoMark width={18} height={18} />
          </span>
          <span>
            星結びの占い
            <small>HOSHI MUSUBI</small>
          </span>
        </Link>
        <nav className="nav">
          <Link href="/fortunes">占い一覧</Link>
          <Link href="/daily">運勢を知る</Link>
          <Link href="/ranking">ランキング</Link>
          <Link href="/pricing">料金プラン</Link>
          <Link href="/fortune-tellers">占い師一覧</Link>
          <Link href="/columns">コラム</Link>
        </nav>
        <div className="header-cta">
          <Link className="btn btn-ghost" href="/login">
            ログイン
          </Link>
          <Link className="btn btn-primary" href="/login">
            新規登録
          </Link>
        </div>
      </div>
    </header>
  );
}
