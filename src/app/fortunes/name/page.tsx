import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/DemoForm";
import { ThemeChips } from "@/components/forms/ThemeChips";

export const metadata: Metadata = { title: "言霊占術 — 名に宿る音の力" };

export default function NamePage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">N A M E&nbsp;&nbsp;R E A D I N G</span>
          <h2>言霊占術</h2>
          <p>名前の響きから、あなたの本質を読み解きます。</p>
        </div>

        <DemoForm type="name" submitLabel="名前を読み解く">
          <div className="form-row">
            <label>お名前</label>
            <input type="text" placeholder="例：星野 結" required />
          </div>
          <div className="form-row">
            <label>
              ふりがな <span className="muted">（任意）</span>
            </label>
            <input type="text" placeholder="例：ほしの ゆい" />
          </div>
          <div className="form-row">
            <label>
              ニックネーム <span className="muted">（任意）</span>
            </label>
            <input type="text" placeholder="普段呼ばれている名前" />
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
