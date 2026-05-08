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
    name: "掌紋占術",
    short: "手のひらの紋を読む",
    description:
      "手のひらに刻まれた紋を読み解く古来の占術。生命線・感情線・頭脳線から、いまあなたの内側で何が動いているかを映し出します。",
    href: "/fortunes/palm",
    icon: PalmIcon,
    image: "/fortunes/palm.jpg",
  },
  {
    slug: "name",
    name: "言霊占術",
    short: "名に宿る音の力",
    description:
      "名前に宿る言霊の響きから、性格と運命の輪郭を映し出す占術。あなたの名前が持つ独自のリズムを読み解きます。",
    href: "/fortunes/name",
    icon: ScrollIcon,
    image: "/fortunes/name.jpg",
  },
  {
    slug: "birthdate",
    name: "宿曜占星",
    short: "生まれた日の星詠み",
    description:
      "生まれた日の星と宿から、本質と今の運気を読む東洋占星術。星座と数秘の組み合わせで、本日の指針をお届けします。",
    href: "/fortunes/birthdate",
    icon: MoonStarIcon,
    image: "/fortunes/birthdate.jpg",
  },
  {
    slug: "location",
    name: "方位風水",
    short: "土地と方位の縁",
    description:
      "いま立つ土地と向かうべき方位の縁を読み解く風水術。引越し・旅行・新しい挑戦の前に、心地よい行動方位をお届けします。",
    href: "/fortunes/location",
    icon: CompassIcon,
    image: "/fortunes/location.jpg",
  },
  {
    slug: "life",
    name: "命運総鑑",
    short: "人生を一度に読む",
    description:
      "他の占術をすべて束ね、命運の全体像を一度に映す総合鑑定。総合運・恋愛・仕事・金運・人間関係をまとめて読み解きます。",
    href: "/fortunes/life",
    icon: SparkleIcon,
    image: "/fortunes/life.jpg",
  },
  {
    slug: "daily",
    name: "今日の卜占",
    short: "毎日変わる、今日の星",
    description:
      "毎日変わる、その日のあなたへの一言を授ける卜占（ぼくせん）。365日分の結果から、今日のヒントをお届けします。",
    href: "/daily",
    icon: SunIcon,
    image: "/fortunes/daily.jpg",
  },
];

export function getFortune(slug: FortuneSlug): FortuneMeta | undefined {
  return FORTUNES.find((f) => f.slug === slug);
}
