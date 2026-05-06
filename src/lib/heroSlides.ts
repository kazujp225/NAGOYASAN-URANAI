/**
 * HEROカードのカルーセル画像。
 * 各カードは 3枚の画像を持ち、{INTERVAL}ms ごとに切り替わる。
 *
 * 画像は /public/hero/<slot>/{1..3}.jpg を配置すれば自動的に表示されます。
 * 未配置の場合は何も表示されません（カード自体の枠は残ります）。
 */

export const HERO_INTERVAL_MS = 4500;

const slot = (name: string) =>
  [1, 2, 3].map((n) => `/hero/${name}/${n}.jpg`);

export const HERO_SLIDES = {
  /** 左の縦長カード：手相 */
  palm: slot("palm"),
  /** 右の縦長カード：今日の運勢ビジュアル */
  daily: slot("daily"),
  /** タロット風カード：月 */
  tarotMoon: slot("tarot-moon"),
  /** タロット風カード：星 */
  tarotStar: slot("tarot-star"),
  /** タロット風カード：太陽 */
  tarotSun: slot("tarot-sun"),
} as const;
