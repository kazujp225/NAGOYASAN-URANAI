import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/DemoForm";
import { ThemeChips } from "@/components/forms/ThemeChips";

export const metadata: Metadata = { title: "居住地・方位占い" };

const PREFECTURES = [
  "北海道", "東北エリア", "関東エリア", "東京都", "神奈川県",
  "中部エリア", "愛知県", "関西エリア", "大阪府", "京都府",
  "中国エリア", "四国エリア", "九州エリア", "沖縄県",
];

export default function LocationPage() {
  return (
    <section className="s">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">L O C A T I O N</span>
          <h2>居住地・方位占い</h2>
          <p>今いる場所との相性を読み、心地よい行動方位をお届けします。</p>
        </div>

        <DemoForm type="location" submitLabel="場所との相性を読む">
          <div className="form-row">
            <label>都道府県</label>
            <select required defaultValue="">
              <option value="" disabled>選択してください</option>
              {PREFECTURES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>
              市区町村 <span className="muted">（任意）</span>
            </label>
            <input type="text" placeholder="例：港区" />
          </div>
          <div className="form-row">
            <label>テーマ</label>
            <ThemeChips
              options={["総合", "引っ越し", "旅行", "仕事", "恋愛"]}
            />
          </div>
        </DemoForm>
      </div>
    </section>
  );
}
