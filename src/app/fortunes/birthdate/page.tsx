import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/DemoForm";
import { ThemeChips } from "@/components/forms/ThemeChips";

export const metadata: Metadata = { title: "生年月日占い" };

export default function BirthdatePage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">B I R T H D A T E</span>
          <h2>生年月日占い</h2>
          <p>あなたが生まれた日から、本質と今の運気を読み解きます。</p>
        </div>

        <DemoForm type="birthdate" submitLabel="生年月日から読み解く">
          <div className="form-row">
            <label>生年月日</label>
            <input type="date" required />
          </div>
          <div className="form-row">
            <label>
              性別 <span className="muted">（任意）</span>
            </label>
            <select defaultValue="">
              <option value="">選択しない</option>
              <option>女性</option>
              <option>男性</option>
              <option>その他</option>
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
