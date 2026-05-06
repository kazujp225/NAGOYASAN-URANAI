/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 画面下部の Next.js 開発インジケーターを非表示
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
};

export default nextConfig;
