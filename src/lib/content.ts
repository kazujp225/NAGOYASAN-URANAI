/**
 * ランキング・占い師・コラムのダミーデータ。
 * 本実装では Supabase などから取得する想定。
 */

export type RankItem = {
  rank: number;
  fortuneSlug: string;
  title: string;
  description: string;
  category: string;
};

export const RANKING: RankItem[] = [
  {
    rank: 1,
    fortuneSlug: "palm",
    title: "掌紋占術",
    description: "今月もっとも読まれた占い。手のひらから今のあなたを読み解きます。",
    category: "総合 1位",
  },
  {
    rank: 2,
    fortuneSlug: "life",
    title: "命運総鑑",
    description: "名前・生年月日・居住地から、人生の全体像を映し出します。",
    category: "総合 2位",
  },
  {
    rank: 3,
    fortuneSlug: "birthdate",
    title: "宿曜占星",
    description: "あなたが生まれた日の星から、本質と今の運気を読み解きます。",
    category: "総合 3位",
  },
  {
    rank: 4,
    fortuneSlug: "name",
    title: "言霊占術",
    description: "名前の響きから、性格と運命の輪郭を映し出します。",
    category: "総合 4位",
  },
  {
    rank: 5,
    fortuneSlug: "location",
    title: "方位風水",
    description: "今いる場所との相性を読み、心地よい行動方位をお届け。",
    category: "総合 5位",
  },
];

export type Teller = {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  tags: string[];
  /** /public/tellers/<id>.jpg を配置すると自動で表示されます */
  image?: string;
};

export const TELLERS: Teller[] = [
  {
    id: "mira",
    name: "ミラ",
    tagline: "STAR GUIDE",
    bio: "本サイトの案内人。やさしい言葉で、今のあなたに必要なヒントをお届けします。",
    tags: ["手相", "総合", "ライト"],
    image: "/tellers/mira.jpg",
  },
  {
    id: "lyra",
    name: "リラ",
    tagline: "MOON READER",
    bio: "月のリズムから、心の流れを読み解きます。気持ちを言語化したい方へ。",
    tags: ["生年月日", "恋愛"],
    image: "/tellers/lyra.jpg",
  },
  {
    id: "vega",
    name: "ヴェガ",
    tagline: "PATH FINDER",
    bio: "命運総鑑の専任。これからの方向を、具体的な行動に落とし込みます。",
    tags: ["人生", "仕事"],
    image: "/tellers/vega.jpg",
  },
  {
    id: "altair",
    name: "アルタイル",
    tagline: "NAME WEAVER",
    bio: "名前の響きと画数から、本来のあなたを丁寧に映し出します。",
    tags: ["名前", "性格"],
    image: "/tellers/altair.jpg",
  },
  {
    id: "polaris",
    name: "ポラリス",
    tagline: "LOCATION SAGE",
    bio: "土地と方位の相性を読み、心地よい暮らしのヒントを差し上げます。",
    tags: ["居住地", "方位"],
    image: "/tellers/polaris.jpg",
  },
  {
    id: "deneb",
    name: "デネブ",
    tagline: "PALM SEER",
    bio: "手相を専門に、変化のサインをやさしく言葉にします。",
    tags: ["手相", "変化"],
    image: "/tellers/deneb.jpg",
  },
];

export type Column = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** /public/columns/<slug>.jpg を配置すると自動で表示されます */
  image?: string;
  body: string;
};

export const COLUMNS: Column[] = [
  {
    slug: "palm-basics",
    title: "手相の基本：3本の主要線が示す『今』",
    excerpt:
      "生命線・感情線・頭脳線。この3本がどう見えるかで、今のあなたの心の流れがわかります。",
    category: "手相",
    date: "2026/05/04",
    image: "/columns/palm-basics.jpg",
    body: "手相を初めて見るとき、つい複雑な分類に圧倒されがちですが、まずは3本の主要線だけで十分です。生命線は身体の状態、感情線は心の動き、頭脳線は思考のクセを示します...",
  },
  {
    slug: "lucky-color",
    title: "今月のラッキーカラーで、毎日の選択を軽くする",
    excerpt:
      "色は気分を変える小さなおまじない。今月のあなたにフィットする色をお届けします。",
    category: "色彩",
    date: "2026/05/02",
    image: "/columns/lucky-color.jpg",
    body: "色には心理的な効果があり、身につける色を変えるだけで気分が変わることがあります...",
  },
  {
    slug: "moon-rhythm",
    title: "月のリズムを読む：新月・満月の過ごし方",
    excerpt: "新月は始まり、満月は手放し。月のリズムに合わせると、心が整いやすくなります。",
    category: "月",
    date: "2026/04/29",
    image: "/columns/moon-rhythm.jpg",
    body: "新月は新しいことを始めるのに向いた日、満月は不要なものを手放すのに向いた日です...",
  },
  {
    slug: "name-vibration",
    title: "名前の響きが運命を作る、というのは本当か",
    excerpt:
      "姓名判断の科学的根拠は薄いですが、名前の響きが自己認識に与える影響は無視できません。",
    category: "名前",
    date: "2026/04/25",
    image: "/columns/name-vibration.jpg",
    body: "名前は私たちが最も多く呼ばれ、そして自分自身を認識する時に使う音です...",
  },
  {
    slug: "direction",
    title: "方位は『行く方向』ではなく『気の流れ』で読む",
    excerpt: "方位の読み方を、もう少し柔らかい視点で解釈してみます。",
    category: "方位",
    date: "2026/04/20",
    image: "/columns/direction.jpg",
    body: "方位というと厳格な吉凶を思い浮かべる方も多いですが...",
  },
  {
    slug: "self-care",
    title: "占いに依存しない、占いとの付き合い方",
    excerpt:
      "占いは未来を決めるものではなく、自分を整える鏡です。健やかな付き合い方をご紹介。",
    category: "セルフケア",
    date: "2026/04/15",
    image: "/columns/self-care.jpg",
    body: "占いの結果が悪かったとき、不安になってさらに占いを重ねてしまうことはありませんか...",
  },
];

export function getColumn(slug: string) {
  return COLUMNS.find((c) => c.slug === slug);
}
