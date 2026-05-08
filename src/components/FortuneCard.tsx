import Link from "next/link";
import type { FortuneMeta } from "@/lib/fortunes";
import { ArrowRightIcon } from "@/components/icons/Icon";

export type CardVariant =
  | "cinematic"   // 7x2 巨大、画像全面・タイトルオーバーレイ
  | "score"       // 5x1 中央寄り、スコア風
  | "standard"    // 5x1 通常
  | "wide"        // 5x1 横長
  | "quote"       // 4x1 引用風
  | "compact";    // 3x1 小型・タイトル中心

type Props = {
  fortune: FortuneMeta;
  /** 一覧用：画像枠を上に表示するか */
  withMedia?: boolean;
  /** Bentoグリッドでのレイアウト種別 */
  variant?: CardVariant;
};

/**
 * 占いカード。
 * - withMedia=true: 上部に画像枠
 * - variant: Bento配置（サイズと内部レイアウトが変わる）
 */
export function FortuneCard({
  fortune,
  withMedia = false,
  variant,
}: Props) {
  const cls = [
    "fortune-card",
    variant && `fc-${variant}`,
  ]
    .filter(Boolean)
    .join(" ");

  // Cinematic は画像全面＋オーバーレイ構成
  if (variant === "cinematic") {
    return (
      <Link href={fortune.href} className={cls}>
        <div className="fc-cover">
          {fortune.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={fortune.image} alt={fortune.name} loading="lazy" />
          )}
          <div className="fc-cover-overlay">
            <span className="fc-eyebrow">未来解析 / FORTUNE</span>
            <h3 className="fc-title-big">{fortune.name}</h3>
            <p className="fc-cover-desc">{fortune.description}</p>
            <span className="more">
              READ MORE <ArrowRightIcon width={14} height={14} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Compact は小型テキスト中心
  if (variant === "compact") {
    return (
      <Link href={fortune.href} className={cls}>
        <div className="fc-thumb">
          {fortune.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={fortune.image} alt="" loading="lazy" />
          )}
        </div>
        <h3 className="fc-title-small">{fortune.name}</h3>
        <span className="more">
          開く <ArrowRightIcon width={12} height={12} />
        </span>
      </Link>
    );
  }

  // Score: スコア表示風（右側に番号）
  if (variant === "score") {
    return (
      <Link href={fortune.href} className={cls}>
        <div className="fc-cover">
          {fortune.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={fortune.image} alt={fortune.name} loading="lazy" />
          )}
          <div className="fc-cover-overlay fc-score-overlay">
            <span className="fc-eyebrow">TODAY / 今日の卜占</span>
            <div className="fc-score-line">
              <h3 className="fc-title-mid">{fortune.name}</h3>
              <div className="fc-score-num">92<small>/100</small></div>
            </div>
            <p className="fc-cover-desc">{fortune.short}</p>
          </div>
        </div>
      </Link>
    );
  }

  // Quote: 引用風、テキスト主体
  if (variant === "quote") {
    return (
      <Link href={fortune.href} className={cls}>
        <div className="fc-thumb fc-thumb-side">
          {fortune.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={fortune.image} alt="" loading="lazy" />
          )}
        </div>
        <div className="fc-quote-body">
          <span className="fc-eyebrow">FORTUNE</span>
          <h3 className="fc-title-mid">{fortune.name}</h3>
          <p className="fc-quote-text">{`「${fortune.short}」`}</p>
          <span className="more">
            READ MORE <ArrowRightIcon width={14} height={14} />
          </span>
        </div>
      </Link>
    );
  }

  // standard / wide のデフォルト構成（withMediaあり）
  return (
    <Link href={fortune.href} className={cls}>
      {withMedia && (
        <div className="card-media">
          {fortune.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={fortune.image} alt={fortune.name} loading="lazy" />
          ) : (
            <span className="ph-label">IMAGE</span>
          )}
        </div>
      )}
      <h3>{fortune.name}</h3>
      <p>{fortune.description}</p>
      <span className="more">
        READ MORE <ArrowRightIcon width={14} height={14} />
      </span>
    </Link>
  );
}
