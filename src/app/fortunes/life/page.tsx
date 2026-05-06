import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/DemoForm";
import { ThemeChips } from "@/components/forms/ThemeChips";

export const metadata: Metadata = { title: "総合人生占い" };

const PREFECTURES = [
  "北海道", "東京都", "神奈川県", "愛知県",
  "大阪府", "京都府", "福岡県", "沖縄県", "その他",
];

export default function LifePage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">L I F E&nbsp;&nbsp;R E A D I N G</span>
          <h2>総合人生占い</h2>
          <p>名前・生年月日・居住地から、あなたの全体像を映し出します。</p>
        </div>

        <DemoForm type="life" submitLabel="人生の流れを読み解く">
          <div className="form-row">
            <label>お名前</label>
            <input type="text" placeholder="例：星野 結" required />
          </div>
          <div className="form-row">
            <label>生年月日</label>
            <input type="date" required />
          </div>
          <div className="form-row">
            <label>居住地（都道府県）</label>
            <select required defaultValue="">
              <option value="" disabled>選択してください</option>
              {PREFECTURES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>相談テーマ</label>
            <ThemeChips />
          </div>
          <div className="consent">
            <input type="checkbox" id="life-consent" required />
            <label htmlFor="life-consent">
              本占いはエンターテインメント目的です。重要な判断は専門家にご相談ください。
            </label>
          </div>
        </DemoForm>
      </div>
    </section>
  );
}
