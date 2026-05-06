/**
 * 画面全体に重ねる大気レイヤー：
 * - 提灯の赤いゆらぎ（左上・右下に固定）
 * - 細い垂直線の雨
 * - 霧の薄いベール
 * pointer-events: none で、操作を一切妨げない。
 */
export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <span className="lantern lantern-a" />
      <span className="lantern lantern-b" />
      <span className="lantern lantern-c" />
      <span className="rain" />
      <span className="haze" />
      <span className="vignette" />
    </div>
  );
}
