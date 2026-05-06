import Link from "next/link";
import { LogoMark } from "@/components/icons/Icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid">
          <div>
            <div className="brand">
              <span className="logo-mark">
                <LogoMark width={18} height={18} />
              </span>
              <span>
                星結びの占い
                <small>HOSHI MUSUBI</small>
              </span>
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 14 }}>
              手相・生年月日・名前・居住地から、
              <br />
              毎日の運勢を読み解く占いプラットフォーム。
            </p>
          </div>
          <div>
            <h5>占いを試す</h5>
            <ul>
              <li><Link href="/fortunes/palm">手相占い</Link></li>
              <li><Link href="/fortunes/name">名前占い</Link></li>
              <li><Link href="/fortunes/birthdate">生年月日占い</Link></li>
              <li><Link href="/fortunes/location">居住地占い</Link></li>
              <li><Link href="/fortunes/life">総合人生占い</Link></li>
            </ul>
          </div>
          <div>
            <h5>サービス</h5>
            <ul>
              <li><Link href="/daily">今日の運勢</Link></li>
              <li><Link href="/pricing">料金プラン</Link></li>
              <li><Link href="/mypage">マイページ</Link></li>
            </ul>
          </div>
          <div>
            <h5>サポート</h5>
            <ul>
              <li><Link href="/terms">利用規約</Link></li>
              <li><Link href="/privacy">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer">免責事項</Link></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          © 2026 星結びの占い (HOSHI MUSUBI) — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
