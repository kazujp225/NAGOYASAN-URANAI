# IMAGE_PROMPTS.md — 占いプラットフォーム用 画像生成プロンプト集

## 前提

このプロンプト集は、`MEDIA.md` に記載された必要画像を、**1つの統一された世界観**で生成するためのものです。

重要方針：

- 画像内に日本語や英語の文字を入れない。文字はHTML/CSS/OGP生成側で載せる。
- すべて「星結びの占い」という同一ブランドの素材に見えるようにする。
- 単なるスピリチュアル素材ではなく、Webサービスとして使える「上品・ポップ・神秘的・少しプレミアム」な方向に寄せる。
- 色は、深いネイビー、インディゴ、紫、マゼンタ、シアンの発光、ゴールド装飾で統一する。
- 占い感は強く。ただし怖くしない。宗教色を強くしない。怪しさよりも「安心して試したくなる」雰囲気にする。

---

# 0. 共通スタイルプロンプト

すべての画像生成プロンプトの先頭または末尾に、この共通文を入れてください。

## 共通プロンプト / Common Style Prompt

```text
A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

## 共通ネガティブプロンプト / Negative Prompt

Stable DiffusionやMidjourney系で使う場合はこちら。

```text
text, letters, Japanese text, English text, logo text, watermark, signature, low quality, blurry, noisy, horror, scary, creepy, dark cult, religious symbol, blood, skull, distorted hands, extra fingers, bad anatomy, deformed face, messy composition, cheap stock photo, flat icon, oversaturated, harsh contrast, illegible UI, broken objects
```

## 画像生成時の共通指定

```text
Do not include any readable text, captions, letters, numbers, or logos inside the image. Leave text areas clean if needed. The image should be suitable as a website asset.
```

---

# 1. 占い一覧 サムネイル画像

配置先：`/public/fortunes/`  
推奨サイズ：1200 × 900px / 4:3

すべてカード型サムネイルとして使うため、中央に主役モチーフ、背景に同じ星空・金装飾・光の粒を置く。  
画像内テキストは入れない。

---

## 1-1. `fortunes/palm.jpg` — 手相占い

```text
Create a 4:3 thumbnail image for a palm reading fortune category. A graceful open palm facing forward, drawn with luminous violet and cyan palm lines, thin golden palmistry lines, small star particles flowing from the fingertips. Background is deep midnight indigo with subtle zodiac circle, constellations, moonlight, crystal glow, and elegant gold celestial ornaments. The composition should feel magical, premium, pop spiritual, and easy to understand as palm reading. Centered subject, clean edges, suitable for a website card thumbnail. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 1-2. `fortunes/name.jpg` — 名前占い

```text
Create a 4:3 thumbnail image for a name fortune category. Show an elegant glowing quill pen drawing golden sound waves and constellation lines over a floating blank parchment or name scroll. The parchment should be blank with no readable text. Surround it with tiny stars, violet aura, gold dust, and a subtle circular astrological frame. The mood is mystical, refined, and pop, representing the hidden vibration of a person's name. Centered composition, premium Japanese fortune-telling website thumbnail. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 1-3. `fortunes/birthdate.jpg` — 生年月日占い

```text
Create a 4:3 thumbnail image for a birthdate fortune category. A magical blank calendar page floats in the center, surrounded by a glowing zodiac wheel, golden constellations, moon phases, and tiny star particles. The calendar has no numbers or readable text, only symbolic date-like squares and elegant gold lines. Use deep navy, indigo, violet, magenta glow, cyan highlights, and gold ornaments. The image should clearly suggest birthdate astrology and destiny timing. Premium web card thumbnail. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 1-4. `fortunes/location.jpg` — 居住地・方位占い

```text
Create a 4:3 thumbnail image for a location and direction fortune category. A beautiful golden compass floats above a dreamy star map, with luminous route lines, subtle map contours, and flowing energy paths pointing to auspicious directions. Add a crescent moon, constellations, violet mist, cyan glow, and small crystal reflections. The mood should feel like reading destiny through place, direction, and energy flow. Premium mystical Japanese website card thumbnail. No real map labels, no text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 1-5. `fortunes/life.jpg` — 総合人生占い

```text
Create a 4:3 thumbnail image for a comprehensive life fortune category. Show a glowing celestial tree of life with golden roots and branches, growing from a starlit path that extends toward a bright moonlit horizon. Around it are tarot-like blank cards, zodiac rings, crystals, and soft violet magical particles. The image should express life path, destiny, relationships, work, money, and future potential in one elegant visual. Premium, hopeful, mystical, pop spiritual style. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 1-6. `fortunes/daily.jpg` — 今日の運勢

```text
Create a 4:3 thumbnail image for a daily fortune category. Show a luminous oracle card and a small crystal orb floating over a dreamy horizon where moonlight and morning glow meet. Add subtle calendar-like symbolic tiles with no numbers, golden stars, violet aura, cyan sparkles, and a soft magical ring suggesting that today's fortune changes daily. Friendly, bright, uplifting, premium mystical web thumbnail. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

# 2. 占い師ポートレート画像

配置先：`/public/tellers/`  
推奨サイズ：600 × 600px / 1:1

全員を「同じ占いサービスに所属する占い師」に見せる。  
写真ではなく、高品質イラスト/AIキャラクターで統一する方が世界観が揃う。

共通構図：

- バストアップまたは肩上
- 正面〜やや斜め
- 背景は夜空、星、オーラ、金装飾
- 顔は親しみやすい
- 怪しすぎない
- 画像内に名前や文字は入れない

---

## 2-1. `tellers/mira.jpg` — ミラ / STAR GUIDE

```text
Create a 1:1 square portrait of a mystical fortune teller character named Mira, a friendly young adult woman with a calm confident smile. Theme: star guide. She has long dark brown hair with violet highlights, elegant gold star accessories, soft glowing eyes, and a midnight navy robe with delicate gold constellation embroidery. Background: deep indigo night sky, star halo, subtle zodiac circle, violet aura, cyan sparkles. Premium Japanese spiritual pop character portrait, polished web avatar style, beautiful lighting, approachable and trustworthy. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 2-2. `tellers/lyra.jpg` — リラ / MOON READER

```text
Create a 1:1 square portrait of a mystical fortune teller character named Lyra, an elegant young adult woman with a gentle moonlit expression. Theme: moon reader. She has silver-lavender hair, crescent moon hair ornament, pearl and gold jewelry, and a flowing violet robe with moon phase embroidery. Background: large soft crescent moon, deep navy sky, violet mist, golden lunar symbols, crystal glow. Premium Japanese spiritual pop character portrait, warm and soothing, suitable for a web avatar. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 2-3. `tellers/vega.jpg` — ヴェガ / PATH FINDER

```text
Create a 1:1 square portrait of a mystical fortune teller character named Vega, a sharp and optimistic path finder guide. She has short dark hair with blue-violet shine, a gold compass pendant, layered navy and teal fortune-teller outfit, and a confident but friendly expression. Background: glowing golden compass ring, star map lines, cyan route light trails, deep indigo sky, violet aura. Premium Japanese spiritual pop character portrait, modern and trustworthy, suitable for a web avatar. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 2-4. `tellers/altair.jpg` — アルタイル / NAME WEAVER

```text
Create a 1:1 square portrait of a mystical fortune teller character named Altair, a refined and creative name weaver. Androgynous elegant adult character, soft expressive eyes, long black hair tied with gold threads, quill-shaped earring, dark indigo outfit with gold calligraphic wave patterns. Background: glowing blank parchment, golden sound waves, violet aura, constellations, floating star dust. Premium Japanese spiritual pop character portrait, intelligent and artistic, suitable for a web avatar. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 2-5. `tellers/polaris.jpg` — ポラリス / LOCATION SAGE

```text
Create a 1:1 square portrait of a mystical fortune teller character named Polaris, a wise location sage. Mature graceful woman, warm eyes, calm smile, dark navy hair with silver streaks, gold compass and north star accessories, elegant robe with map-line embroidery. Background: north star glow, compass circle, subtle star map, violet mist, cyan path lines, gold particles. Premium Japanese spiritual pop character portrait, wise but approachable, suitable for a web avatar. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 2-6. `tellers/deneb.jpg` — デネブ / PALM SEER

```text
Create a 1:1 square portrait of a mystical fortune teller character named Deneb, a charismatic palm seer. Young adult man or androgynous character with stylish dark purple hair, gold rings, subtle glowing palm symbol on one raised hand, confident friendly gaze, midnight robe with hand-line and star embroidery. Background: glowing palmistry circle, golden lines, deep indigo sky, violet aura, cyan sparkles. Premium Japanese spiritual pop character portrait, intriguing but trustworthy, suitable for a web avatar. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

# 3. コラム サムネイル画像

配置先：`/public/columns/`  
推奨サイズ：1200 × 675px / 16:9

記事カードや記事ヘッダーで使うため、**左または中央に主役モチーフ、右側に少し余白**があるとテキストを重ねやすい。  
ただし、画像そのものには文字を入れない。

---

## 3-1. `columns/palm-basics.jpg` — 手相の基本

```text
Create a 16:9 editorial thumbnail for an article about the basics of palm reading and the three major palm lines. Show a close-up elegant hand with three main palm lines glowing softly in gold and violet, with minimal annotated-like light strokes but no text. Background: deep indigo starry field, subtle zodiac ring, small crystals, soft magical particles. Clean educational feeling, premium mystical Japanese fortune-telling media style, enough negative space for article title overlay. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 3-2. `columns/lucky-color.jpg` — ラッキーカラー

```text
Create a 16:9 editorial thumbnail for an article about monthly lucky colors. Show floating silk ribbons, gemstones, and aura swatches in violet, magenta, cyan, gold, and soft pearl tones, arranged like a magical color palette under a night sky. Add tiny stars, moonlight, and elegant gold ornaments. The mood is uplifting, stylish, feminine, and premium, suggesting color choices for daily life. Leave clean negative space for title overlay. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 3-3. `columns/moon-rhythm.jpg` — 月のリズム

```text
Create a 16:9 editorial thumbnail for an article about reading the rhythm of the moon, new moon and full moon rituals. Show a sequence of moon phases arcing across a deep indigo sky, with a large glowing full moon and a delicate crescent moon, violet mist, gold stars, and calm water reflection or soft clouds below. Premium mystical Japanese media style, soothing and elegant, enough negative space for title overlay. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 3-4. `columns/name-vibration.jpg` — 名前の響き

```text
Create a 16:9 editorial thumbnail for an article about the vibration and sound of names shaping destiny. Show a blank glowing name scroll or paper ribbon in the center, with golden sound waves transforming into constellations and star particles. Add a refined quill pen, violet aura, cyan glow, and elegant celestial ornaments. The image should feel intellectual, mystical, and poetic. Leave clean negative space for article title overlay. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 3-5. `columns/direction.jpg` — 方位と気の流れ

```text
Create a 16:9 editorial thumbnail for an article about reading direction as the flow of energy. Show a golden compass over a dreamy abstract map, with luminous energy streams flowing in curved paths, small stars marking directions, and subtle crystal reflections. Deep midnight navy background, violet mist, cyan route glow, gold celestial frame. Premium mystical Japanese media style, elegant and clear, enough negative space for title overlay. No text, no map labels, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

## 3-6. `columns/self-care.jpg` — 占いとの付き合い方

```text
Create a 16:9 editorial thumbnail for an article about healthy self-care and not depending too much on fortune telling. Show a calm desk scene at night with a crystal ball, tarot-like blank cards, a warm candle, a cup of herbal tea, a small journal with blank pages, and soft moonlight from a window. The mood is gentle, grounded, reassuring, and premium, with deep indigo, violet, cyan glow, and gold accents. Spiritual but healthy and balanced. Leave clean negative space for article title overlay. No text, no letters, no logos.

A premium mystical Japanese fortune-telling web platform visual, unified brand world called "Hoshi Musubi". Deep midnight navy and indigo background, violet and magenta aura gradients, cyan magical glow, elegant gold celestial ornaments, stars, constellations, zodiac symbols, moonlight, crystal reflections, soft particles, subtle magical light trails, polished modern web design aesthetic, glamorous but friendly, spiritual pop style, premium landing page quality, cinematic lighting, high detail, clean composition, beautiful negative space, no horror, no religious iconography, no clutter.
```

---

# 4. ブランド・ファビコン関連

配置先：`/public/`

正直に言うと、ロゴ・faviconは画像生成AIに一発で任せるより、**AI画像をラフ案として使い、最後はSVGで整える方が安全**です。  
特にfaviconは小さいので、細かい装飾は潰れます。モチーフは「月・星・結び目・小さな魔法陣」の4要素までに絞ってください。

---

## 4-1. `logo.svg` 用ラフ案

```text
Create a clean vector-style logo icon concept for a Japanese fortune-telling brand called Hoshi Musubi. Icon only, no text. Motif: crescent moon, small star, elegant knot-like orbit line, and subtle celestial circle. Premium mystical but friendly, simple enough for website header, gold line art on transparent or very dark navy background, balanced geometric composition, scalable SVG-like design, minimal details, no gradients if possible, no text, no letters, no watermark.
```

---

## 4-2. `favicon.ico` / `apple-touch-icon.png` / `icon-192.png` / `icon-512.png`

```text
Create a simple app icon for a mystical Japanese fortune-telling web service. Icon only, no text. Deep midnight navy circular background, a gold crescent moon embracing a small star, with a subtle purple glow and one elegant orbit line. Very clear silhouette, minimal details, readable at small size, premium spiritual pop style, suitable for favicon and mobile app icon. No text, no letters, no logos, no watermark.
```

---

# 5. OGP画像

配置先：`/public/og/`  
推奨サイズ：1200 × 630px / 1.91:1

OGPはSNSで見た時にクリック率に直結する。  
画像生成AIに文字を入れさせると崩れるので、**背景だけ生成 → Figma/コードで文字を載せる**のが正解。

共通方針：

- 左側にタイトル文字を載せる余白
- 右側に占いモチーフ
- 背景は深い夜空＋金装飾＋発光
- 画像内文字なし

---

## 5-1. `og/default.png` — サイト全体

```text
Create a 1200x630 OGP background image for a premium Japanese fortune-telling platform. Left side has clean dark negative space for title overlay. Right side features a beautiful mystical composition: glowing crystal ball, tarot-like blank cards, zodiac wheel, crescent moon, stars, violet aura, cyan light trails, and gold celestial ornaments. Deep midnight navy and indigo palette, glamorous but friendly, high-end web brand visual. No text, no letters, no logos.
```

---

## 5-2. `og/palm.png` — 手相占い

```text
Create a 1200x630 OGP background image for a palm reading page. Left side clean negative space for title overlay. Right side shows a luminous open palm with violet and cyan palm lines, gold palmistry markings, small stars flowing from fingertips, subtle zodiac ring and crystals. Premium mystical Japanese fortune-telling web visual. No text, no letters, no logos.
```

---

## 5-3. `og/name.png` — 名前占い

```text
Create a 1200x630 OGP background image for a name fortune page. Left side clean negative space for title overlay. Right side shows a glowing blank scroll, elegant quill pen, golden sound waves turning into constellations, violet aura, cyan sparkles, and gold celestial ornaments. Premium mystical Japanese fortune-telling web visual. No text, no letters, no logos.
```

---

## 5-4. `og/birthdate.png` — 生年月日占い

```text
Create a 1200x630 OGP background image for a birthdate fortune page. Left side clean negative space for title overlay. Right side shows a blank magical calendar, moon phases, zodiac wheel, golden date-like squares without numbers, violet mist, cyan glow, and star particles. Premium mystical Japanese fortune-telling web visual. No text, no letters, no logos.
```

---

## 5-5. `og/location.png` — 居住地・方位占い

```text
Create a 1200x630 OGP background image for a location and direction fortune page. Left side clean negative space for title overlay. Right side shows a golden compass floating above an abstract star map with glowing energy paths and auspicious direction lines, violet aura, cyan route glow, moonlight, and gold ornaments. No map labels, no text, no letters, no logos.
```

---

## 5-6. `og/life.png` — 総合人生占い

```text
Create a 1200x630 OGP background image for a comprehensive life fortune page. Left side clean negative space for title overlay. Right side shows a glowing celestial tree of life, golden roots, a moonlit path into the future, tarot-like blank cards, crystals, zodiac ring, violet aura, cyan glow, and gold star particles. Hopeful, premium, mystical Japanese web brand visual. No text, no letters, no logos.
```

---

## 5-7. `og/daily.png` — 今日の運勢

```text
Create a 1200x630 OGP background image for a daily fortune page. Left side clean negative space for title overlay. Right side shows a glowing oracle card, crystal orb, moonlight and dawn gradient meeting in the sky, symbolic calendar tiles without numbers, violet and cyan magical glow, gold stars, and soft particles. Friendly, bright, premium mystical Japanese web visual. No text, no letters, no logos.
```

---

## 5-8. `og/pricing.png` — 料金プラン

```text
Create a 1200x630 OGP background image for a pricing plan page of a premium fortune-telling service. Left side clean negative space for title overlay. Right side shows three elegant glowing plan cards without text, a small gold crown, crystal orb, stars, violet aura, cyan glow, and gold celestial ornaments. It should feel premium, trustworthy, and not too salesy. No text, no letters, no logos.
```

---

## 5-9. `og/columns.png` — コラム一覧

```text
Create a 1200x630 OGP background image for a fortune-telling media column page. Left side clean negative space for title overlay. Right side shows an elegant night desk with blank journal pages, tarot-like blank cards, crystal ball, candle, moonlight, stars, violet aura, cyan glow, and gold decorative lines. Intellectual, calm, premium mystical Japanese media visual. No text, no letters, no logos.
```

---

# 6. HERO背景・キャラクター

配置先：`/public/hero/`

HEROは、Webサイトの第一印象を決める。  
ここだけはサムネイルよりも情報量を上げて「占い感ガッツリ」にしてよい。

---

## 6-1. `hero/bg.jpg` — HERO背景

推奨：3000 × 1500px

```text
Create a wide 2:1 hero background image for a premium Japanese fortune-telling website. Deep midnight navy and indigo starry sky, violet and magenta nebula aura, cyan magical light trails, elegant gold zodiac wheel partially visible on the right, crescent moon, constellations, floating star particles, soft clouds near the bottom, subtle crystal reflections, and a dreamy horizon. The left side should have darker clean negative space for hero headline and CTA buttons. The right side can be richer with astrological ornaments and glowing elements. High-end landing page background, mystical, pop, glamorous, friendly, not scary. No text, no letters, no logos.
```

---

## 6-2. `hero/character.png` — HERO女性キャラ透過PNG

生成時は「背景なし」「透過」指定ができるツールなら透過で出す。  
難しい場合は単色背景で生成して切り抜く。

```text
Create a full-body or three-quarter standing character illustration for a premium Japanese fortune-telling website hero section. A charming VTuber-like mystical fortune guide, young adult woman, friendly warm smile, elegant but pop spiritual style. Long wavy dark brown hair with violet highlights, gold crescent moon and star hair accessories, delicate head chain with small purple jewel, ornate earrings and layered necklaces. Outfit: deep purple and midnight navy fortune-teller dress or robe with gold celestial embroidery, stars, moons, subtle sheer fabric, tasteful and elegant, not revealing. She holds a small glowing crystal orb or tarot-like blank card, with soft violet and cyan magical aura around her hands. Pose is welcoming and guide-like, looking toward the viewer. High-quality anime-inspired semi-realistic illustration, premium website hero character, clean silhouette, transparent background if possible. No text, no letters, no logos.
```

---

# 7. 動画素材用プロンプト

動画は後続フェーズでよい。  
Runway / Pika / Kling / Sora系に渡す場合の短いプロンプト。

---

## 7-1. `video/hero-loop.mp4`

```text
A seamless 10-second looping hero background for a premium Japanese fortune-telling website. Deep midnight navy starry sky with slow-moving violet nebula clouds, gentle cyan magical light trails, tiny gold star particles, subtle zodiac wheel rotation on the right, crescent moon glow, dreamy premium spiritual atmosphere, calm and elegant, no text, no logos, no camera shake.
```

---

## 7-2. `video/palm-scan.mp4`

```text
A seamless 4-second loop animation of a glowing palm scan for a fortune-telling web app. An open hand silhouette with violet and cyan palm lines lighting up one by one, small gold particles moving along the lines, subtle circular scanning ring, deep indigo background, premium mystical UI feeling, no text, no logos.
```

---

## 7-3. `video/orb-anim.webm`

```text
A seamless 6-second loop animation of a magical crystal orb. The orb contains slow-moving stars, violet mist, cyan glow, and tiny gold constellations rotating gently. Dark transparent or deep navy background, premium mystical Japanese fortune-telling aesthetic, calm and elegant, no text, no logos.
```

---

# 8. 生成順序

最初に全部作ろうとすると品質がバラけます。  
順番は以下で進めるのが安全です。

1. `hero/bg.jpg`
2. `hero/character.png`
3. `fortunes/*.jpg` 6枚
4. `tellers/*.jpg` 6枚
5. `columns/*.jpg` 6枚
6. `og/*.png`
7. favicon / app icon
8. 動画素材

---

# 9. 画像生成後のチェック

- 画像内に文字が混ざっていないか
- 手の指が崩れていないか
- 顔が不自然ではないか
- サムネイルを小さくしても主題が分かるか
- 世界観の色がズレていないか
- 金色が安っぽい黄色になっていないか
- 怖い、宗教っぽい、カルトっぽい印象になっていないか
- Web上で文字を重ねる余白があるか
- 500KB前後まで圧縮しても破綻しないか

---

# 10. 重要な判断

この案件では、画像内に文字を入れたくなりますが、やめた方がいいです。  
理由はシンプルで、画像生成AIは日本語文字を高確率で崩します。  
サービスの品質が一気に安っぽく見えるので、**画像は世界観・空気・モチーフだけを作り、文字はUI側で載せる**方が強いです。
