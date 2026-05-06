import type { ComponentType, SVGProps } from "react";
import {
  PalmIcon,
  ScrollIcon,
  MoonStarIcon,
  CompassIcon,
  SparkleIcon,
  SunIcon,
} from "@/components/icons/Icon";

export type FortuneSlug =
  | "palm"
  | "name"
  | "birthdate"
  | "location"
  | "life"
  | "daily";

export type FortuneMeta = {
  slug: FortuneSlug;
  name: string;
  short: string;
  description: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * 画像（こちらで用意予定）。
   * /public/fortunes/<slug>.jpg を配置すると自動的に表示されます。
   */
  image?: string;
};

export const FORTUNES: FortuneMeta[] = [
  {
    slug: "palm",
    name: "手相占い",
    short: "手のひらから読み解く",
    description:
      "手のひらを撮影して、今のあなたの傾向を読み解きます。生命線・感情線・頭脳線から、現在の心の動きを映し出します。",
    href: "/fortunes/palm",
    icon: PalmIcon,
    image: "/fortunes/palm.jpg",
  },
  {
    slug: "name",
    name: "名前占い",
    short: "響きが結ぶ運命",
    description:
      "名前に宿る響きから、性格と運命の輪郭を映し出します。あなたの名前が持つ独自のリズムを読み解きます。",
    href: "/fortunes/name",
    icon: ScrollIcon,
    image: "/fortunes/name.jpg",
  },
  {
    slug: "birthdate",
    name: "生年月日占い",
    short: "生まれた日の星",
    description:
      "あなたが生まれた日の星から、本質と今の運気を見ます。星座と数秘の組み合わせで、本日の指針をお届けします。",
    href: "/fortunes/birthdate",
    icon: MoonStarIcon,
    image: "/fortunes/birthdate.jpg",
  },
  {
    slug: "location",
    name: "居住地・方位占い",
    short: "場所との相性",
    description:
      "今いる場所との相性を読み、心地よい行動方位をお届けします。引越し・旅行・新しい挑戦のヒントに。",
    href: "/fortunes/location",
    icon: CompassIcon,
    image: "/fortunes/location.jpg",
  },
  {
    slug: "life",
    name: "総合人生占い",
    short: "人生の流れ",
    description:
      "4つの占いを束ね、今のあなたの全体像を映し出します。総合運・恋愛・仕事・金運・人間関係を一度に。",
    href: "/fortunes/life",
    icon: SparkleIcon,
    image: "/fortunes/life.jpg",
  },
  {
    slug: "daily",
    name: "今日の運勢",
    short: "毎日変わる一言",
    description:
      "毎日変わる、その日のあなたへの一言。365日分用意された結果から、今日のヒントを。",
    href: "/daily",
    icon: SunIcon,
    image: "/fortunes/daily.jpg",
  },
];

export function getFortune(slug: FortuneSlug): FortuneMeta | undefined {
  return FORTUNES.find((f) => f.slug === slug);
}
