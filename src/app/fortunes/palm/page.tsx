import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/forms/DemoForm";
import { ThemeChips } from "@/components/forms/ThemeChips";
import { UploadZone } from "@/components/forms/UploadZone";

export const metadata: Metadata = { title: "掌紋占術 — 手のひらの紋を読む" };

export default function PalmPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">P A L M&nbsp;&nbsp;R E A D I N G</span>
          <h2>掌紋占術</h2>
          <p>手のひらを撮影、または画像をアップロードしてください。</p>
        </div>

        <DemoForm type="palm" submitLabel="手相を読み解く">
          <div className="consent">
            <input type="checkbox" id="palm-consent" required />
            <label htmlFor="palm-consent">
              この占いはエンターテインメントを目的としたものです。撮影された画像は結果生成のみに使用され、原則として短期間で削除されます。
              <Link href="/privacy" style={{ color: "var(--gold-soft)", textDecoration: "underline" }}>プライバシーポリシー</Link>
              に同意のうえご利用ください。
            </label>
          </div>

          <div className="form-row">
            <label>手のひら画像</label>
            <UploadZone />
          </div>

          <div className="form-row">
            <label>利き手</label>
            <select required defaultValue="">
              <option value="" disabled>選択してください</option>
              <option value="right">右手</option>
              <option value="left">左手</option>
            </select>
          </div>

          <div className="form-row">
            <label>年齢帯</label>
            <select required defaultValue="">
              <option value="" disabled>選択してください</option>
              <option>10代</option>
              <option>20代</option>
              <option>30代</option>
              <option>40代</option>
              <option>50代</option>
              <option>60代以上</option>
            </select>
          </div>

          <div className="form-row">
            <label>相談テーマ</label>
            <ThemeChips />
          </div>
        </DemoForm>
      </div>
    </section>
  );
}
