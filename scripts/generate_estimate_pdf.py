# -*- coding: utf-8 -*-
"""Fortune Platform 見積書 PDF 生成スクリプト (松竹梅 3プラン)"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, HRFlowable
)
from datetime import date

# ---- 日本語フォント (reportlab 内蔵 CID フォント) ----
JP_REG = "HeiseiKakuGo-W5"
JP_BOLD = "HeiseiKakuGo-W5"  # 内蔵には W5 のみ。Bold は同フォントを使用しPDF描画時のスタイルで強調
pdfmetrics.registerFont(UnicodeCIDFont(JP_REG))

# ---- カラー (白黒紫) ----
C_BLACK   = colors.HexColor("#1A1A1A")
C_PRIMARY = colors.HexColor("#2D1B4E")    # 深い紫 (見出し・本文の濃色)
C_ACCENT  = colors.HexColor("#6B3FA0")    # 中間の紫
C_LIGHT   = colors.HexColor("#B89DD9")    # 薄紫 (アクセントライン)
C_BG_HEAD = colors.HexColor("#2D1B4E")    # テーブルヘッダ
C_BG_SUB  = colors.HexColor("#EDE7F6")    # 小計行などの薄い紫
C_BG_ROW  = colors.HexColor("#F8F5FC")    # 行の超淡い紫
C_LINE    = colors.HexColor("#C9BCE0")    # 罫線
C_MUTED   = colors.HexColor("#5C5C5C")
C_OK      = colors.HexColor("#3D1F6E")    # ○マーク (濃い紫)
C_NG      = colors.HexColor("#1A1A1A")    # ×マーク (黒)
C_TRI     = colors.HexColor("#8E6FBF")    # △マーク (中紫)
# プランごとのヘッダー色 (薄→中→濃)
C_UME     = colors.HexColor("#A78BCC")    # 梅: 淡い紫
C_TAKE    = colors.HexColor("#6B3FA0")    # 竹: 中紫
C_MATSU   = colors.HexColor("#3D1F6E")    # 松: 深い紫
# プランごとの薄背景
C_UME_BG  = colors.HexColor("#F3EDFB")
C_TAKE_BG = colors.HexColor("#E8DDF5")
C_MATSU_BG = colors.HexColor("#D9C7F0")

# ---- スタイル ----
styles = getSampleStyleSheet()
def style(name, size, leading=None, font=JP_REG, color=colors.black, align=TA_LEFT, space_after=0, space_before=0):
    return ParagraphStyle(
        name=name, fontName=font, fontSize=size,
        leading=leading or size * 1.5, textColor=color,
        alignment=align, spaceAfter=space_after, spaceBefore=space_before,
    )

ST_TITLE      = style("title",      24, font=JP_BOLD, color=C_PRIMARY, align=TA_CENTER, space_after=4)
ST_SUBTITLE   = style("subtitle",   10.5, color=C_MUTED, align=TA_CENTER, space_after=10)
ST_H1         = style("h1",         14, font=JP_BOLD, color=C_PRIMARY, space_before=6, space_after=5)
ST_H2         = style("h2",         11, font=JP_BOLD, color=C_PRIMARY, space_before=4, space_after=3)
ST_BODY       = style("body",       9, leading=14, color=C_BLACK)
ST_BODY_SM    = style("body_sm",    8, leading=12, color=C_BLACK)
ST_NOTE       = style("note",       7.5, leading=11, color=C_MUTED)
ST_LABEL      = style("label",      8.5, font=JP_BOLD, color=colors.white, align=TA_CENTER)
ST_PRICE      = style("price",      18, font=JP_BOLD, color=C_PRIMARY, align=TA_CENTER)
ST_PLAN_NAME  = style("plan_name",  14, font=JP_BOLD, color=colors.white, align=TA_CENTER)
ST_PLAN_SUB   = style("plan_sub",   8.5, color=colors.white, align=TA_CENTER, leading=11)
ST_TBL_HEAD   = style("tbl_head",   8.5, font=JP_BOLD, color=colors.white, align=TA_CENTER)
ST_TBL_CELL   = style("tbl_cell",   8, leading=11.5, color=C_BLACK)
ST_TBL_NUM    = style("tbl_num",    8, leading=11.5, align=TA_RIGHT, color=C_BLACK)
ST_RIGHT      = style("right",      9, leading=13, align=TA_RIGHT, color=C_BLACK)


def header_block():
    """見積書ヘッダー"""
    today = date.today().strftime("%Y年%m月%d日")
    elements = []

    # タイトル
    elements.append(Paragraph("御 見 積 書", ST_TITLE))
    elements.append(Paragraph("Fortune Platform / 占いプラットフォーム Web MVP 開発", ST_SUBTITLE))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=C_ACCENT, spaceAfter=2))
    elements.append(HRFlowable(width="100%", thickness=0.5, color=C_LIGHT, spaceAfter=8))

    # 宛先 / 発行者
    info_left = [
        [Paragraph("<b>御中</b>", ST_BODY)],
        [Paragraph("Fortune Platform プロジェクト ご担当者様", ST_BODY)],
        [Paragraph("", ST_BODY)],
        [Paragraph("下記の通りお見積り申し上げます。", ST_BODY)],
        [Paragraph("ご検討のほど、よろしくお願い申し上げます。", ST_BODY)],
    ]
    info_right = [
        [Paragraph(f"発行日　{today}", ST_RIGHT)],
        [Paragraph("見積番号　EST-2026-0508-001", ST_RIGHT)],
        [Paragraph("有効期限　発行日より30日間", ST_RIGHT)],
        [Paragraph("", ST_RIGHT)],
        [Paragraph("<b>株式会社 ナゴヤサン</b>", ST_RIGHT)],
        [Paragraph("担当: 開発部　kota", ST_RIGHT)],
        [Paragraph("Email: qwe31017qwe@gmail.com", ST_RIGHT)],
    ]
    left_tbl = Table(info_left, colWidths=[90 * mm])
    right_tbl = Table(info_right, colWidths=[80 * mm])
    for t in (left_tbl, right_tbl):
        t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                               ("LEFTPADDING", (0, 0), (-1, -1), 0),
                               ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                               ("TOPPADDING", (0, 0), (-1, -1), 1),
                               ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
    wrapper = Table([[left_tbl, right_tbl]], colWidths=[95 * mm, 85 * mm])
    wrapper.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                                 ("LEFTPADDING", (0, 0), (-1, -1), 0),
                                 ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
    elements.append(wrapper)
    elements.append(Spacer(1, 8))
    return elements


def total_summary_block():
    """3プラン合計のサマリ"""
    data = [
        [Paragraph("プラン", ST_TBL_HEAD),
         Paragraph("初期開発費 (税抜)", ST_TBL_HEAD),
         Paragraph("月額保守 (税抜)", ST_TBL_HEAD),
         Paragraph("開発期間", ST_TBL_HEAD)],
        [Paragraph("<b>梅 / Basic</b>", ST_TBL_CELL),
         Paragraph("<b>¥800,000</b>", ST_TBL_NUM),
         Paragraph("¥16,000 / 月 (8h)", ST_TBL_NUM),
         Paragraph("約 1〜1.5ヶ月", ST_TBL_CELL)],
        [Paragraph("<b>竹 / Light</b>", ST_TBL_CELL),
         Paragraph("<b>¥1,200,000</b>", ST_TBL_NUM),
         Paragraph("¥30,000 / 月 (15h)", ST_TBL_NUM),
         Paragraph("約 1.5〜2ヶ月", ST_TBL_CELL)],
        [Paragraph("<b>松 / Standard</b>", ST_TBL_CELL),
         Paragraph("<b>¥2,000,000</b>", ST_TBL_NUM),
         Paragraph("¥50,000 / 月 (25h)", ST_TBL_NUM),
         Paragraph("約 2.5〜3ヶ月", ST_TBL_CELL)],
    ]
    tbl = Table(data, colWidths=[40 * mm, 50 * mm, 45 * mm, 45 * mm])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 1), (-1, 1), C_UME_BG),
        ("BACKGROUND", (0, 2), (-1, 2), C_TAKE_BG),
        ("BACKGROUND", (0, 3), (-1, 3), C_MATSU_BG),
        ("LINEBEFORE", (0, 1), (0, 1), 3, C_UME),
        ("LINEBEFORE", (0, 2), (0, 2), 3, C_TAKE),
        ("LINEBEFORE", (0, 3), (0, 3), 3, C_MATSU),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return [Paragraph("お見積り総額一覧", ST_H1), tbl, Spacer(1, 4),
            Paragraph("※ 上記金額は全て税抜表示です。別途消費税を申し受けます。",
                      ST_NOTE),
            Paragraph("※ コンテンツ制作費 (占い原稿365日分・テンプレート文章等) は本見積に含みません。別途お見積りいたします。",
                      ST_NOTE)]


def project_overview_block():
    text = (
        "本プロジェクトは、手相・名前・生年月日・居住地などをもとにした 5 種類の占いと"
        " 365 日の日替わり占いを提供する Web プラットフォームの MVP 開発です。"
        "ご予算・ご要件に応じて<b>梅 / 竹 / 松</b>の 3 プランをご提案いたします。"
    )
    return [Paragraph("プロジェクト概要", ST_H1),
            Paragraph(text, ST_BODY),
            Spacer(1, 4)]


# ============================================================
# わかりやすい比較ページ (非エンジニア向け)
# ============================================================
def plain_summary_block():
    """専門用語なしでプラン比較を説明するページ"""
    el = []
    el.append(Paragraph("ご参考: 各プランで「何ができるか」をかんたん解説", ST_H1))
    el.append(Paragraph(
        "技術的な詳細を抜きにして、社長様・お客様目線で<b>各プランで実際に何ができるようになるか</b>を"
        "ご説明します。詳細な機能内訳・技術構成は次ページ以降をご覧ください。",
        ST_BODY))
    el.append(Spacer(1, 6))

    # 比較チェック表
    yes  = "<b><font color='#3D1F6E'>○</font></b>"
    no   = "<b><font color='#1A1A1A'>×</font></b>"
    tri  = "<b><font color='#8E6FBF'>△</font></b>"
    rows = [
        ["できること",                                        "梅",   "竹",   "松"],
        ["5種類の占いが試せる",                               yes,   yes,   yes],
        ["占い結果が表示される",                              yes,   yes,   yes],
        ["スマホ・PC で快適に使える",                         yes,   yes,   yes],
        ["X (Twitter) でシェアできる",                        yes,   yes,   yes],
        ["お客様がアカウントを作れる",                        no,    yes,   yes],
        ["占いの履歴が残る (お客様が後で見返せる)",            no,    yes,   yes],
        ["月額・単発の課金が自動で動く",                      tri,   yes,   yes],
        ["手相の写真をアップロードできる",                    no,    no,    yes],
        ["キャラクター (ミラ) が結果にコメントしてくれる",     no,    no,    yes],
        ["社長が占い文章を自分で編集できる (管理画面)",        no,    no,    yes],
        ["365日分の日替わり占いを管理できる",                  no,    no,    yes],
    ]
    data = [[Paragraph(c, ST_TBL_HEAD if i == 0 else ST_TBL_CELL) for c in row]
            if i == 0 else
            [Paragraph(row[0], ST_TBL_CELL),
             Paragraph(row[1], ST_TBL_NUM),
             Paragraph(row[2], ST_TBL_NUM),
             Paragraph(row[3], ST_TBL_NUM)]
            for i, row in enumerate(rows)]

    tbl = Table(data, colWidths=[100 * mm, 23 * mm, 23 * mm, 24 * mm])
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]
    # 列ごとに薄い紫の色分け (梅<竹<松 で濃さUP)
    style += [
        ("BACKGROUND", (1, 1), (1, -1), C_UME_BG),
        ("BACKGROUND", (2, 1), (2, -1), C_TAKE_BG),
        ("BACKGROUND", (3, 1), (3, -1), C_MATSU_BG),
    ]
    # ヘッダー帯の梅竹松セルを濃い帯にする
    style += [
        ("BACKGROUND", (1, 0), (1, 0), C_UME),
        ("BACKGROUND", (2, 0), (2, 0), C_TAKE),
        ("BACKGROUND", (3, 0), (3, 0), C_MATSU),
    ]
    tbl.setStyle(TableStyle(style))
    el.append(tbl)
    el.append(Spacer(1, 4))
    el.append(Paragraph(
        "<b>○</b> = できる　／　<b>△</b> = 一部できる (手動運用が必要)　／　<b>×</b> = できない",
        ST_NOTE))
    el.append(Paragraph(
        "△ : 梅プランは Stripe 決済リンクで課金できますが、「誰が課金したか」をサイトが自動判別する仕組みは"
        "入っていません (課金後の特典付与は手動対応が必要です)。",
        ST_NOTE))
    el.append(Spacer(1, 8))

    # 各プランの一言まとめ
    summary_box = Table([[
        Paragraph("<b>梅 プラン (¥800,000)</b><br/><br/>"
                  "占いサイトとして<b>最低限の形</b>を最短で作るプランです。"
                  "占いを5種類試せて、シェアもできます。<br/><br/>"
                  "ただし「誰が来たか」「誰が課金したか」はサイト側で覚えていません。"
                  "まずは<b>反応を見たいだけ</b>のスタートに向いています。", ST_BODY_SM),
        Paragraph("<b>竹 プラン (¥1,200,000)</b><br/><br/>"
                  "梅に加えて、<b>お客様がアカウントを作れる・履歴が残る・月額課金が自動で回る</b>"
                  "プランです。<br/><br/>"
                  "手相写真機能・キャラクター・管理画面はまだ無いので、"
                  "占い文章の差し替えは毎回開発側にご依頼いただく必要があります。", ST_BODY_SM),
        Paragraph("<b>松 プラン (¥2,000,000)</b><br/><br/>"
                  "MVP として企画していた<b>全機能を入れる本命プラン</b>です。"
                  "手相の写真アップロード、キャラクターのコメント、管理画面まで含みます。<br/><br/>"
                  "社長ご自身で占い文章や日替わり占いを編集できるようになります。"
                  "AI解析や本格LLMは後続フェーズです。", ST_BODY_SM),
    ]], colWidths=[57 * mm, 57 * mm, 56 * mm])
    summary_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), C_UME_BG),
        ("BACKGROUND", (1, 0), (1, 0), C_TAKE_BG),
        ("BACKGROUND", (2, 0), (2, 0), C_MATSU_BG),
        ("LINEABOVE", (0, 0), (0, 0), 2.5, C_UME),
        ("LINEABOVE", (1, 0), (1, 0), 2.5, C_TAKE),
        ("LINEABOVE", (2, 0), (2, 0), 2.5, C_MATSU),
        ("BOX", (0, 0), (0, 0), 0.4, C_LINE),
        ("BOX", (1, 0), (1, 0), 0.4, C_LINE),
        ("BOX", (2, 0), (2, 0), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    el.append(summary_box)
    return el


# ============================================================
# プラン詳細ヘッダー
# ============================================================
def plan_header(rank_jp, rank_en, tagline, price, color):
    """プランの帯ヘッダー"""
    cell_left = [
        [Paragraph(f"{rank_jp}　/　{rank_en}", ST_PLAN_NAME)],
        [Paragraph(tagline, ST_PLAN_SUB)],
    ]
    cell_right = [
        [Paragraph(f"<font size=10>初期開発費</font>", ST_PLAN_SUB)],
        [Paragraph(f"<b><font size=18>¥{price:,}</font></b><font size=8 color='#FFFFFF'>　(税抜)</font>",
                   ParagraphStyle("p", fontName=JP_BOLD, fontSize=18,
                                  textColor=colors.white, alignment=TA_CENTER, leading=22))],
    ]
    left_t = Table(cell_left, colWidths=[100 * mm])
    right_t = Table(cell_right, colWidths=[70 * mm])
    for t in (left_t, right_t):
        t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                               ("LEFTPADDING", (0, 0), (-1, -1), 4),
                               ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                               ("TOPPADDING", (0, 0), (-1, -1), 2),
                               ("BOTTOMPADDING", (0, 0), (-1, -1), 2)]))
    band = Table([[left_t, right_t]], colWidths=[100 * mm, 70 * mm])
    band.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return band


def feature_table(rows, target_total=None):
    """機能内訳テーブル。target_totalを指定すると差額をパッケージ割引として末尾に追加する。"""
    data = [[Paragraph("項目", ST_TBL_HEAD),
             Paragraph("内容", ST_TBL_HEAD),
             Paragraph("人日", ST_TBL_HEAD),
             Paragraph("金額 (税抜)", ST_TBL_HEAD)]]
    raw_total = 0
    for r in rows:
        data.append([
            Paragraph(r[0], ST_TBL_CELL),
            Paragraph(r[1], ST_TBL_CELL),
            Paragraph(str(r[2]), ST_TBL_NUM),
            Paragraph(f"¥{r[3]:,}", ST_TBL_NUM),
        ])
        raw_total += r[3]

    final = raw_total
    if target_total is not None and target_total != raw_total:
        discount = target_total - raw_total
        sign = "-" if discount < 0 else "+"
        data.append([
            Paragraph("パッケージ割引", ST_TBL_CELL),
            Paragraph("ボリューム / プラン化による調整", ST_TBL_CELL),
            Paragraph("", ST_TBL_NUM),
            Paragraph(f"{sign}¥{abs(discount):,}", ST_TBL_NUM),
        ])
        final = target_total

    data.append([
        Paragraph("<b>小計</b>", ST_TBL_CELL),
        Paragraph("", ST_TBL_CELL),
        Paragraph("", ST_TBL_NUM),
        Paragraph(f"<b>¥{final:,}</b>", ST_TBL_NUM),
    ])
    tbl = Table(data, colWidths=[33 * mm, 90 * mm, 16 * mm, 31 * mm])
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("BACKGROUND", (0, -1), (-1, -1), C_BG_SUB),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]
    # Zebra striping
    for i in range(1, len(data) - 1):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), C_BG_ROW))
    tbl.setStyle(TableStyle(style))
    return tbl, final


def arch_table(rows):
    """技術スタック / アーキテクチャ表 (各プラン共通フォーマット)"""
    data = [[Paragraph("レイヤー", ST_TBL_HEAD),
             Paragraph("採用技術", ST_TBL_HEAD),
             Paragraph("用途・備考", ST_TBL_HEAD)]]
    for r in rows:
        data.append([
            Paragraph(r[0], ST_TBL_CELL),
            Paragraph(r[1], ST_TBL_CELL),
            Paragraph(r[2], ST_TBL_CELL),
        ])
    tbl = Table(data, colWidths=[28 * mm, 52 * mm, 90 * mm])
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]
    for i in range(1, len(data)):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), C_BG_ROW))
    tbl.setStyle(TableStyle(style))
    return tbl


def two_col_box(title_l, body_l, title_r, body_r):
    """できること / できないこと の2カラム"""
    left = [
        [Paragraph(title_l, ST_H2)],
        [Paragraph(body_l, ST_BODY_SM)],
    ]
    right = [
        [Paragraph(title_r, ST_H2)],
        [Paragraph(body_r, ST_BODY_SM)],
    ]
    lt = Table(left, colWidths=[83 * mm])
    rt = Table(right, colWidths=[83 * mm])
    for t in (lt, rt):
        t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                               ("LEFTPADDING", (0, 0), (-1, -1), 4),
                               ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                               ("TOPPADDING", (0, 0), (-1, -1), 2),
                               ("BOTTOMPADDING", (0, 0), (-1, -1), 2)]))
    wrap = Table([[lt, rt]], colWidths=[85 * mm, 85 * mm])
    wrap.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), C_BG_SUB),
        ("BACKGROUND", (1, 0), (1, 0), colors.HexColor("#F5F2F8")),
        ("BOX", (0, 0), (0, 0), 0.5, C_ACCENT),
        ("BOX", (1, 0), (1, 0), 0.5, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return wrap


# ============================================================
# 梅プラン
# ============================================================
def ume_plan():
    el = []
    el.append(plan_header("梅 プラン", "Basic — 最小MVP",
                          "まずは市場反応を低コストで検証する小さく始めるプラン",
                          800_000, C_UME))
    el.append(Spacer(1, 5))

    el.append(Paragraph("■ プラン概要", ST_H2))
    el.append(Paragraph(
        "LP・5占いフォーム・テンプレート結果表示・日替わり占い (簡易) を中心とした"
        "<b>静的サイト寄りの最小構成</b>です。DB を使わずに JSON / Markdown ベースで"
        "コンテンツを管理し、課金は Stripe Payment Links のみ。検証速度を最優先し、"
        "「占いとして読まれるか」「拡散するか」だけを見極めます。", ST_BODY))

    el.append(Paragraph("■ 機能内訳・工数", ST_H2))
    rows = [
        ("LP / トップ", "ファーストビュー、5占いカード、CTA、FAQ、フッター", 4, 160_000),
        ("5占いフォーム", "手相 / 名前 / 生年月日 / 居住地 / 総合人生 (静的フォーム + 結果)", 6, 240_000),
        ("結果テンプレート", "seed → テンプレ選択ロジック (JSON)、無料/有料文言の出し分け", 3, 120_000),
        ("日替わり占い", "日付ベース固定結果 (簡易ダミー30日分)", 1.5, 60_000),
        ("課金導線", "Stripe Payment Links 設置のみ (Webhook なし)", 1, 40_000),
        ("法務ページ", "規約・プライバシー・免責・特商法表記 (雛形ベース)", 1, 40_000),
        ("レスポンシブ / OGP", "モバイル最適化、共通OGP、X共有ボタン", 2, 80_000),
        ("デプロイ・QA", "Vercel デプロイ、ドメイン設定、簡易テスト", 1.5, 60_000),
    ]
    tbl, _ = feature_table(rows)
    el.append(tbl)
    el.append(Spacer(1, 6))

    el.append(two_col_box(
        "✓ 含まれるもの",
        "・LP / 5占いフォーム / 結果表示<br/>"
        "・日替わり占い (簡易30日)<br/>"
        "・Stripe Payment Links 課金導線<br/>"
        "・規約・プライバシー・免責<br/>"
        "・モバイル対応・X共有<br/>"
        "・Vercel デプロイ",
        "✗ 含まれないもの",
        "・Supabase DB / 認証<br/>"
        "・手相画像のアップロード保存<br/>"
        "・管理画面 / 履歴機能<br/>"
        "・Stripe Webhook / 自動 entitlement<br/>"
        "・キャラクターチャット UI<br/>"
        "・365日分コンテンツ管理",
    ))
    return el


# ============================================================
# 竹プラン
# ============================================================
def take_plan():
    el = []
    el.append(plan_header("竹 プラン", "Light — 軽量MVP",
                          "DB付きの軽量MVPで、占い・履歴・課金まで素早く立ち上げるプラン",
                          1_200_000, C_TAKE))
    el.append(Spacer(1, 6))

    el.append(Paragraph("■ プラン概要", ST_H2))
    el.append(Paragraph(
        "<b>機能を絞った軽量MVP</b>です。Supabase で DB / 認証を構成し、5占い・"
        "占い履歴・Stripe Checkout + Webhook による Premium 自動開放までを最短で"
        "立ち上げます。手相画像のサーバ保存・キャラクターチャット・管理画面は"
        "含まず、まずは「ユーザーが回遊するか」「課金が回るか」の検証に集中する"
        "プランです。", ST_BODY))

    el.append(Paragraph("■ 機能内訳・工数", ST_H2))
    rows = [
        ("初期セットアップ", "Next.js + TS strict + Tailwind + ESLint/Prettier + 環境変数", 1, 40_000),
        ("LP / 共通レイアウト", "トップ、ヘッダー / フッター、SEO・OGP (共通)", 3, 120_000),
        ("5占いフォーム", "Zod バリデーション、UI コンポーネント化、エラー処理", 5, 200_000),
        ("占い結果ロジック", "seed/score 生成、テンプレ選択、無料/有料分岐", 3, 120_000),
        ("日替わり占い", "日付ベース fortune ロジック・取得 API (簡易personalize)", 2, 80_000),
        ("Supabase 構築", "4テーブル schema (profiles / readings / daily_fortunes / subscriptions)、RLS",
         3, 120_000),
        ("認証", "メール / Google OAuth、未ログイン→課金時登録フロー", 2, 80_000),
        ("マイページ / 履歴", "占い履歴、課金状態表示、プロフィール編集", 2, 80_000),
        ("Stripe 課金", "Checkout、Webhook (4イベント)、entitlement更新", 4, 160_000),
        ("法務ページ・X共有", "規約・プライバシー・免責・特商法、共通OGP、X導線", 2, 80_000),
        ("テスト・QA・デプロイ", "主要フロー結合テスト、本番デプロイ、ドキュメント", 3, 120_000),
    ]
    tbl, _ = feature_table(rows, target_total=1_200_000)
    el.append(tbl)
    el.append(Spacer(1, 6))

    el.append(two_col_box(
        "✓ 含まれるもの",
        "・梅プランの全機能<br/>"
        "・Supabase DB / Auth<br/>"
        "・5占い + 結果ロジック<br/>"
        "・占い履歴 / マイページ<br/>"
        "・Stripe Checkout + Webhook<br/>"
        "・無料 / 有料 自動切替<br/>"
        "・X共有 / 共通OGP",
        "✗ 含まれないもの (=松プランへ)",
        "・手相画像のサーバ保存・自動削除<br/>"
        "・キャラクターチャット UI<br/>"
        "・管理画面 (CMS)<br/>"
        "・365日コンテンツ管理<br/>"
        "・本格的な手相 AI 解析 / LLM応答<br/>"
        "・ネイティブアプリ・Live2D",
    ))
    return el


# ============================================================
# 松プラン
# ============================================================
def matsu_plan():
    el = []
    el.append(plan_header("松 プラン", "Standard — 標準MVP",
                          "CLAUDE.md 仕様の MVP 範囲を一通り満たす本命プラン",
                          2_000_000, C_MATSU))
    el.append(Spacer(1, 6))

    el.append(Paragraph("■ プラン概要", ST_H2))
    el.append(Paragraph(
        "<b>CLAUDE.md の MVP 範囲をフルに実装</b>するプランです。Supabase で DB / 認証 / "
        "Storage を構成し、手相画像アップロード (短期保存・自動削除) ・占い履歴・"
        "Stripe Checkout + Webhook ・キャラクターチャット (テンプレ応答) ・簡易管理画面"
        "までを含む、リリース後の運用にそのまま耐えうる構成です。AI / LLM / 本格 CMS"
        "は後続フェーズとして別途お見積りいたします。", ST_BODY))

    el.append(Paragraph("■ 機能内訳・工数", ST_H2))
    rows = [
        ("初期セットアップ", "Next.js + TS strict + Tailwind + ESLint/Prettier + 環境変数", 2, 80_000),
        ("LP / 共通レイアウト", "デザイン適用済みトップ、ヘッダー / フッター、SEO・OGP", 5, 200_000),
        ("5占いフォーム", "Zod バリデーション、UI コンポーネント化、エラー処理", 7, 280_000),
        ("占い結果ロジック", "seed/score 生成、テンプレ選択、無料/有料分岐", 4, 160_000),
        ("手相画像アップロード", "ブラウザ撮影 / signed URL / 同意チェック / 短期保存・自動削除", 4, 160_000),
        ("日替わり占い", "365日 fortune ロジック・取得 API・パーソナライズ seed", 3, 120_000),
        ("Supabase 構築", "8テーブル schema、RLS、初期データ投入、型生成", 4, 160_000),
        ("認証", "メール / Google OAuth、未ログイン→課金時登録フロー", 2, 80_000),
        ("マイページ / 履歴", "占い履歴、課金状態表示、プロフィール編集", 3, 120_000),
        ("Stripe 課金", "Checkout、Webhook (4イベント)、entitlement更新", 4, 160_000),
        ("キャラクターチャット", "テンプレ応答 UI、結果連動コメント (LLM不使用)", 3, 120_000),
        ("簡易管理画面", "テンプレ編集、daily_fortunes 編集、ユーザー / 課金確認", 4, 160_000),
        ("法務ページ・X共有", "規約・プライバシー・免責・特商法、共通OGP、X導線", 2, 80_000),
        ("テスト・QA・デプロイ", "主要フロー結合テスト、本番デプロイ、ドキュメント", 3, 120_000),
    ]
    tbl, _ = feature_table(rows, target_total=2_000_000)
    el.append(tbl)
    el.append(Spacer(1, 6))

    el.append(two_col_box(
        "✓ 含まれるもの",
        "・梅・竹プランの全機能<br/>"
        "・Supabase DB / Auth / Storage (8テーブル)<br/>"
        "・手相画像アップロード + 自動削除<br/>"
        "・キャラクターチャット (テンプレ応答)<br/>"
        "・簡易管理画面 (テンプレ / 365日編集)<br/>"
        "・Stripe Checkout + Webhook<br/>"
        "・X共有 / OGP / 法務ページ<br/>"
        "・主要フロー結合テスト",
        "✗ 含まれないもの (=後続フェーズ)",
        "・本格的な手相 AI 画像解析<br/>"
        "・LLM ベースのキャラクター応答 (Claude等)<br/>"
        "・本格 CMS / 結果別動的 OGP / E2E<br/>"
        "・Sentry / PostHog 監視ダッシュボード<br/>"
        "・ネイティブアプリ (iOS / Android)<br/>"
        "・Live2D / 3D VTuber / 音声合成<br/>"
        "・365 日分の占い原稿制作",
    ))
    return el


# ============================================================
# 技術構成 比較ページ (3プラン横並び)
# ============================================================
def arch_comparison_block():
    el = []
    el.append(Paragraph("アーキテクチャ / 技術スタック 比較", ST_H1))
    el.append(Paragraph(
        "各プランで採用する技術構成を一覧で比較できるようにまとめています。"
        "深い紫ほど構成が厚い (=松プラン) という対応です。",
        ST_BODY))
    el.append(Spacer(1, 4))

    rows = [
        ["レイヤー", "梅 / Basic", "竹 / Light", "松 / Standard"],
        ["Frontend",
         "Next.js / TS / Tailwind",
         "Next.js / TS strict / Tailwind / RHForm + Zod",
         "Next.js / TS strict / Tailwind / RHForm + Zod"],
        ["Backend",
         "Next.js API Route (軽量)",
         "Next.js API Routes / Server Actions",
         "Next.js API Routes / Server Actions"],
        ["Database",
         "なし (JSON / Markdown)",
         "Supabase PostgreSQL (4 tables)",
         "Supabase PostgreSQL (8 tables)"],
        ["認証",
         "なし (未ログインのみ)",
         "Supabase Auth (Email + Google)",
         "Supabase Auth (Email + Google)"],
        ["Storage",
         "なし",
         "なし",
         "Supabase Storage (手相画像 / 自動削除)"],
        ["課金",
         "Stripe Payment Links",
         "Stripe Checkout + Webhook",
         "Stripe Checkout + Webhook"],
        ["コンテンツ管理",
         "リポジトリ内 JSON 直編集",
         "DB 直編集 (管理画面なし)",
         "簡易管理画面 (テンプレ / 365日編集)"],
        ["キャラ応答",
         "なし",
         "なし",
         "テンプレ応答 UI (LLM不使用)"],
        ["ホスティング",
         "Vercel (Hobby〜Pro)",
         "Vercel + Supabase (Free〜Pro)",
         "Vercel Pro + Supabase"],
        ["監視・ログ",
         "Vercel Analytics",
         "Vercel Analytics + Supabase Logs",
         "Vercel Analytics + Supabase Logs"],
        ["将来拡張余地",
         "DB 移行 → 竹プラン相当へ",
         "Storage 追加・管理画面追加で松へ",
         "AI / LLM / CMS / E2E は後続フェーズ"],
    ]
    data = []
    for i, r in enumerate(rows):
        if i == 0:
            data.append([Paragraph(c, ST_TBL_HEAD) for c in r])
        else:
            data.append([
                Paragraph(f"<b>{r[0]}</b>", ST_TBL_CELL),
                Paragraph(r[1], ST_TBL_CELL),
                Paragraph(r[2], ST_TBL_CELL),
                Paragraph(r[3], ST_TBL_CELL),
            ])

    tbl = Table(data, colWidths=[28 * mm, 47 * mm, 47 * mm, 48 * mm])
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("BACKGROUND", (1, 0), (1, 0), C_UME),
        ("BACKGROUND", (2, 0), (2, 0), C_TAKE),
        ("BACKGROUND", (3, 0), (3, 0), C_MATSU),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        # 列ごとの薄背景
        ("BACKGROUND", (1, 1), (1, -1), C_UME_BG),
        ("BACKGROUND", (2, 1), (2, -1), C_TAKE_BG),
        ("BACKGROUND", (3, 1), (3, -1), C_MATSU_BG),
    ]
    tbl.setStyle(TableStyle(style))
    el.append(tbl)
    return el


# ============================================================
# スケジュール / 保守 / 注意事項
# ============================================================
def schedule_block():
    el = []
    el.append(Paragraph("開発スケジュール (目安)", ST_H1))
    data = [
        [Paragraph("フェーズ", ST_TBL_HEAD),
         Paragraph("梅", ST_TBL_HEAD),
         Paragraph("竹", ST_TBL_HEAD),
         Paragraph("松", ST_TBL_HEAD)],
        [Paragraph("要件定義 / 設計", ST_TBL_CELL), Paragraph("1週", ST_TBL_CELL),
         Paragraph("1週", ST_TBL_CELL), Paragraph("1.5週", ST_TBL_CELL)],
        [Paragraph("Phase1 静的サイト骨子", ST_TBL_CELL), Paragraph("1.5週", ST_TBL_CELL),
         Paragraph("1.5週", ST_TBL_CELL), Paragraph("2週", ST_TBL_CELL)],
        [Paragraph("Phase2 占いロジック", ST_TBL_CELL), Paragraph("1週", ST_TBL_CELL),
         Paragraph("1.5週", ST_TBL_CELL), Paragraph("1.5週", ST_TBL_CELL)],
        [Paragraph("Phase3 DB連携 / Auth", ST_TBL_CELL), Paragraph("—", ST_TBL_CELL),
         Paragraph("1.5週", ST_TBL_CELL), Paragraph("2週", ST_TBL_CELL)],
        [Paragraph("Phase4 手相画像UI", ST_TBL_CELL), Paragraph("—", ST_TBL_CELL),
         Paragraph("—", ST_TBL_CELL), Paragraph("1週", ST_TBL_CELL)],
        [Paragraph("Phase5 課金", ST_TBL_CELL), Paragraph("0.5週", ST_TBL_CELL),
         Paragraph("1週", ST_TBL_CELL), Paragraph("1.5週", ST_TBL_CELL)],
        [Paragraph("Phase6 キャラ応答", ST_TBL_CELL), Paragraph("—", ST_TBL_CELL),
         Paragraph("—", ST_TBL_CELL), Paragraph("1週", ST_TBL_CELL)],
        [Paragraph("Phase7 管理画面", ST_TBL_CELL), Paragraph("—", ST_TBL_CELL),
         Paragraph("—", ST_TBL_CELL), Paragraph("1週", ST_TBL_CELL)],
        [Paragraph("Phase8 品質改善 / QA / デプロイ", ST_TBL_CELL),
         Paragraph("1週", ST_TBL_CELL), Paragraph("1週", ST_TBL_CELL),
         Paragraph("1.5週", ST_TBL_CELL)],
        [Paragraph("<b>合計目安</b>", ST_TBL_CELL),
         Paragraph("<b>約1〜1.5ヶ月</b>", ST_TBL_CELL),
         Paragraph("<b>約1.5〜2ヶ月</b>", ST_TBL_CELL),
         Paragraph("<b>約2.5〜3ヶ月</b>", ST_TBL_CELL)],
    ]
    tbl = Table(data, colWidths=[55 * mm, 35 * mm, 40 * mm, 40 * mm])
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("BACKGROUND", (1, 0), (1, 0), C_UME),
        ("BACKGROUND", (2, 0), (2, 0), C_TAKE),
        ("BACKGROUND", (3, 0), (3, 0), C_MATSU),
        ("BACKGROUND", (0, -1), (-1, -1), C_BG_SUB),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]
    for i in range(1, len(data) - 1):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), C_BG_ROW))
    tbl.setStyle(TableStyle(style))
    el.append(tbl)
    return el


def maintenance_block():
    el = []
    el.append(Paragraph("月額保守費用 (時給制)", ST_H1))
    el.append(Paragraph(
        "保守は「<b>時給 ¥2,000 (税抜)</b>」で計算します。"
        "プランごとに毎月の作業時間枠を決めており、その枠内で下記の保守作業を行います。",
        ST_BODY))
    el.append(Spacer(1, 4))

    data = [
        [Paragraph("プラン", ST_TBL_HEAD),
         Paragraph("月の作業時間枠", ST_TBL_HEAD),
         Paragraph("月額 (税抜)", ST_TBL_HEAD),
         Paragraph("計算式", ST_TBL_HEAD)],
        [Paragraph("梅", ST_TBL_CELL),
         Paragraph("月 <b>8時間</b> まで", ST_TBL_CELL),
         Paragraph("<b>¥16,000</b>", ST_TBL_NUM),
         Paragraph("¥2,000 × 8h", ST_TBL_CELL)],
        [Paragraph("竹", ST_TBL_CELL),
         Paragraph("月 <b>15時間</b> まで", ST_TBL_CELL),
         Paragraph("<b>¥30,000</b>", ST_TBL_NUM),
         Paragraph("¥2,000 × 15h", ST_TBL_CELL)],
        [Paragraph("松", ST_TBL_CELL),
         Paragraph("月 <b>25時間</b> まで", ST_TBL_CELL),
         Paragraph("<b>¥50,000</b>", ST_TBL_NUM),
         Paragraph("¥2,000 × 25h", ST_TBL_CELL)],
    ]
    tbl = Table(data, colWidths=[20 * mm, 45 * mm, 35 * mm, 70 * mm])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), C_BG_HEAD),
        ("BACKGROUND", (0, 1), (-1, 1), C_UME_BG),
        ("BACKGROUND", (0, 2), (-1, 2), C_TAKE_BG),
        ("BACKGROUND", (0, 3), (-1, 3), C_MATSU_BG),
        ("LINEBEFORE", (0, 1), (0, 1), 3, C_UME),
        ("LINEBEFORE", (0, 2), (0, 2), 3, C_TAKE),
        ("LINEBEFORE", (0, 3), (0, 3), 3, C_MATSU),
        ("GRID", (0, 0), (-1, -1), 0.4, C_LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    el.append(tbl)
    el.append(Spacer(1, 4))
    el.append(Paragraph(
        "※ 月の作業時間を超えた場合は、超過分のみ <b>¥2,000 / 時間</b> で追加請求いたします。",
        ST_NOTE))
    el.append(Paragraph("※ 余った時間の翌月繰越はありません。", ST_NOTE))
    el.append(Paragraph(
        "※ 外部サービス利用料 (Vercel / Supabase / Stripe 手数料 等) はクライアント様ご負担となります。",
        ST_NOTE))
    el.append(Spacer(1, 6))

    # ---- 保守でやること / やらないこと ----
    do_text = (
        "<b>○ サイトの稼働監視</b><br/>"
        "&nbsp;&nbsp;サイトが正しく動いているかを定期確認します。<br/>"
        "<b>○ 不具合・エラーの修正</b><br/>"
        "&nbsp;&nbsp;バグやエラーが出たら、営業時間内 (平日10〜18時) に対応します。<br/>"
        "<b>○ 文言・占い結果文章の修正</b><br/>"
        "&nbsp;&nbsp;社長からのご依頼で、文章やお知らせを書き換えます。<br/>"
        "<b>○ 課金・決済の動作確認</b><br/>"
        "&nbsp;&nbsp;Stripe等の決済が正常に動いているかを定期的に確認します。<br/>"
        "<b>○ セキュリティアップデート</b><br/>"
        "&nbsp;&nbsp;使用しているライブラリの安全な更新を行います。<br/>"
        "<b>○ 月次の状況レポート</b><br/>"
        "&nbsp;&nbsp;その月にやったこと・問題などを簡単にご報告します。"
    )
    dont_text = (
        "<b>× 半日 (4時間) を超える新機能追加</b><br/>"
        "&nbsp;&nbsp;大きな機能追加は別途お見積りいたします。<br/>"
        "<b>× デザインの大幅変更・リニューアル</b><br/>"
        "&nbsp;&nbsp;見た目を大きく変える作業は別工事です。<br/>"
        "<b>× 24時間 / 夜間休日の緊急対応</b><br/>"
        "&nbsp;&nbsp;対応は平日営業時間内のみとなります。<br/>"
        "<b>× 占い原稿の執筆</b><br/>"
        "&nbsp;&nbsp;占い結果の文章そのものの作成は対応外です。<br/>"
        "<b>× マーケティング・SNS運用代行</b><br/>"
        "&nbsp;&nbsp;集客・広告・X運用は対応していません。<br/>"
        "<b>× 外部サービス側の障害の根本対応</b><br/>"
        "&nbsp;&nbsp;Stripe / Supabase / Vercel 等の障害は復旧待ちとなります。"
    )
    el.append(KeepTogether([
        Paragraph("月額保守の「やること」「やらないこと」", ST_H2),
        two_col_box(
            "保守でやること (毎月の作業時間枠の中で対応)",
            do_text,
            "保守でやらないこと (別途お見積り)",
            dont_text,
        ),
    ]))
    return el


def notes_block():
    el = []
    el.append(Paragraph("お見積りの前提・注意事項", ST_H1))
    notes = [
        "本見積は CLAUDE.md 記載の MVP 仕様 (2026年5月時点) をベースとしています。",
        "金額は全て<b>税抜</b>表示です。請求時に消費税 (10%) を加算いたします。",
        "<b>占い原稿コンテンツ (5占い × 各20件以上、365日分の日替わり占い、キャラコメント50件以上)</b>は本見積に含みません。"
        "原稿執筆をご希望の場合は別途お見積りいたします (目安: 50万円〜150万円)。",
        "外部サービスの月額費用 (Vercel / Supabase / Stripe / LLM API 等) はクライアント様ご負担となります。",
        "デザインは Tailwind ベースの実装込みデザインを想定しています。"
        "別途デザイナーによるフルカスタムデザインをご希望の場合、+30〜80万円の追加が発生します。",
        "占い結果の表現は CLAUDE.md §16.3 に準拠し、断定表現・不安訴求・医療法律投資の助言は行いません。",
        "手相画像は MVP では<b>短期保存または非保存</b>方針です。長期保存ご希望の場合はプライバシー設計・法務確認を別途実施します。",
        "支払条件: ご契約時 50% / 中間検収時 25% / 検収完了時 25% を想定 (応相談)。",
        "本見積の有効期限は発行日より <b>30日間</b> です。",
    ]
    body = "<br/>".join([f"・{n}" for n in notes])
    el.append(Paragraph(body, ST_BODY_SM))
    return el


# ============================================================
# ページ装飾
# ============================================================
def on_page(canvas, doc):
    canvas.saveState()
    # 上部の細い紫アクセントライン
    canvas.setStrokeColor(C_LIGHT)
    canvas.setLineWidth(0.5)
    canvas.line(15 * mm, A4[1] - 8 * mm, A4[0] - 15 * mm, A4[1] - 8 * mm)
    # フッター
    canvas.setFont(JP_REG, 7.5)
    canvas.setFillColor(C_MUTED)
    canvas.drawString(15 * mm, 10 * mm,
                      "Fortune Platform / 占いプラットフォーム Web MVP 開発見積書")
    canvas.drawRightString(A4[0] - 15 * mm, 10 * mm,
                           f"Page {doc.page}")
    canvas.setStrokeColor(C_ACCENT)
    canvas.setLineWidth(0.5)
    canvas.line(15 * mm, 12 * mm, A4[0] - 15 * mm, 12 * mm)
    canvas.restoreState()


# ============================================================
# ビルド
# ============================================================
def build(out_path):
    doc = SimpleDocTemplate(
        out_path, pagesize=A4,
        leftMargin=15 * mm, rightMargin=15 * mm,
        topMargin=15 * mm, bottomMargin=18 * mm,
        title="Fortune Platform 見積書",
        author="Nagoyasan",
    )
    story = []
    story += header_block()
    story += project_overview_block()
    story += total_summary_block()
    story.append(PageBreak())

    story += plain_summary_block()
    story.append(PageBreak())

    story.append(KeepTogether(ume_plan()))
    story.append(PageBreak())

    story.append(KeepTogether(take_plan()))
    story.append(PageBreak())

    story.append(KeepTogether(matsu_plan()))
    story.append(PageBreak())

    story += arch_comparison_block()
    story.append(PageBreak())

    story += schedule_block()
    story.append(Spacer(1, 6))
    story += maintenance_block()
    story.append(PageBreak())

    story += notes_block()

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)


if __name__ == "__main__":
    out = "/Users/a1/NAGOYASAN-URANAI/見積書_FortunePlatform_松竹梅.pdf"
    build(out)
    print(f"generated: {out}")
