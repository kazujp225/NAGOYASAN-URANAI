import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/Starfield";
import { Atmosphere } from "@/components/Atmosphere";
import "./globals.css";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "星結びの占い | あなたの運命、今日ひらく。",
    template: "%s | 星結びの占い",
  },
  description:
    "手相・名前・生年月日・居住地から、毎日の運勢と本質をやさしく読み解く占いプラットフォーム。",
  openGraph: {
    title: "星結びの占い",
    description:
      "手相・名前・生年月日・居住地から、毎日の運勢と本質をやさしく読み解く。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable} ${cormorant.variable}`}>
      <body>
        <Starfield />
        <Atmosphere />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
