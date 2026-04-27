This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# SEO / LLMO 設定

このプロジェクトには SEO（検索エンジン最適化）と LLMO（LLM 向け最適化）のための実装が組み込まれています。下記はその全体像と、保守する人向けの実装ガイドです。

## 全体像

| 観点 | 目的 | 主な実装 |
|---|---|---|
| **SEO** | Google などの検索エンジンでの可視性向上 | ページ別 metadata、構造化データ、sitemap、robots |
| **LLMO** | ChatGPT / Claude / Perplexity などの LLM での引用率向上 | llms.txt、Organization の `@id` 連結、FAQPage |
| **共通基盤** | ドメイン・サイト名を 1 箇所で管理 | `src/lib/seo.ts` |

## ファイル構成

```
src/
├── app/
│   ├── layout.tsx              # ルート: title.template、Organization + WebSite JSON-LD、OG/Twitter
│   ├── sitemap.ts              # /sitemap.xml を自動生成（Next.js Metadata API）
│   ├── robots.ts               # /robots.txt を自動生成（Next.js Metadata API）
│   ├── service/layout.tsx      # ページ別 metadata + Service schema + Breadcrumb
│   ├── company/layout.tsx      # AboutPage + Person (CEO) + Breadcrumb
│   ├── weare/layout.tsx        # AboutPage + Breadcrumb
│   ├── recruit/layout.tsx      # Breadcrumb
│   ├── news/layout.tsx         # CollectionPage + Breadcrumb
│   ├── blog/layout.tsx         # Blog + Breadcrumb
│   ├── faq/layout.tsx          # FAQPage（8件のQ&A）+ Breadcrumb
│   ├── contact/layout.tsx      # ContactPage + Breadcrumb
│   └── privacy/layout.tsx      # Breadcrumb
├── lib/
│   └── seo.ts                  # 共通定数・ヘルパー
├── data/
│   └── faqs.ts                 # FAQデータ（page.tsx と FAQPage schema が共有）
public/
├── llms.txt                    # LLM 向けサイトインデックス（Markdown）
├── googleb160a3ce726b7e61.html # Google Search Console 認証ファイル（削除厳禁）
└── will-logo-compass.png       # OG 画像 / JSON-LD logo に使用
```

## 1. ページ別メタデータ

すべてのページが `"use client"` のため、各ルートに **サーバーコンポーネントの `layout.tsx`** を配置し、そこに `metadata` を定義しています。

### `title` テンプレート

ルート (`src/app/layout.tsx`) で：

```ts
title: {
  default: "株式会社HINDWILL | HINDWILL Inc.",  // / (ホーム)
  template: "%s | 株式会社HINDWILL",              // 他ページに自動適用
}
```

各ページ (`src/app/<route>/layout.tsx`) では `title: "サービス"` のように **ページ名だけ**を指定すれば、自動で「サービス | 株式会社HINDWILL」になります。

### 各ページの metadata 構成

すべての page-level layout は同じパターンで定義されています：

```ts
export const metadata: Metadata = {
  title: TITLE,                     // ページ固有
  description: DESCRIPTION,         // ページ固有（120-160 字）
  alternates: { canonical: "/path" },
  openGraph: { ... },               // SNS シェア時のプレビュー上書き
  twitter: { ... },
};
```

## 2. 構造化データ (Schema.org JSON-LD)

### ルートで全ページに付与されるもの

`src/app/layout.tsx` の `<head>` で 2 つの JSON-LD を出力：

| Schema | 役割 |
|---|---|
| **Organization** | 会社名・ロゴ・連絡先など。Google ナレッジパネルにロゴを表示する根拠 |
| **WebSite** | サイトと組織の関係を明示（`publisher` で Organization を参照） |

両方に `@id` を付けて参照可能にしています：

```
Organization @id: "https://hindwill.com/#organization"
WebSite      @id: "https://hindwill.com/#website"
```

各ページの schema からはこの `@id` を `{ "@id": "..." }` で参照することで、LLM・検索エンジンに **「これらは同一の会社/サイトの話」** と伝えられます（ハルシネーション抑制に効く）。

### ページ別の schema 一覧

| ページ | 追加 schema | 効果 |
|---|---|---|
| `/service` | **Service** | サービス系検索でリッチ表示 |
| `/company` | **AboutPage** + **Person** (代表) | ナレッジパネル / 人物情報 |
| `/weare` | **AboutPage** | 会社の理念ページ認識 |
| `/news` | **CollectionPage** | 一覧ページとして認識 |
| `/blog` | **Blog** | ブログとして認識 |
| `/faq` | **FAQPage** (8 Q&A) | 検索結果でアコーディオン表示 |
| `/contact` | **ContactPage** | 問い合わせページとして認識 |
| 全ページ（ホーム除く） | **BreadcrumbList** | 検索結果でパンくず表示 |

### JSON-LD の追加方法

`src/lib/seo.ts` の `jsonLdScript` ヘルパーを使って、各 layout の return 文の中に `<script>` として埋め込みます：

```tsx
import { jsonLdScript, breadcrumbJsonLd } from "@/lib/seo";

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "サービス", path: "/service" },
]);

export default function ServiceLayout({ children }) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      {children}
    </>
  );
}
```

## 3. sitemap.xml / robots.txt

Next.js の Metadata API で自動生成しています。

- **`src/app/sitemap.ts`** → `/sitemap.xml` (10 URL)
- **`src/app/robots.ts`** → `/robots.txt` (sitemap 参照入り)

### サイトに新しいページを追加した時の手順

`src/app/sitemap.ts` の `routes` 配列に 1 行追加するだけです：

```ts
{ path: "/new-page", priority: 0.7, changeFrequency: "monthly" },
```

`/api/` と `/logo-preview` は `robots.ts` で `Disallow` 済みなので、これらの内部ルートはインデックスされません。

## 4. LLMO (`llms.txt`)

`public/llms.txt` に **LLM 向けのサイトインデックス**を Markdown で配置しています。仕様は [llmstxt.org](https://llmstxt.org)。

ChatGPT・Claude・Perplexity・Google AI Overviews などのクローラーは、サイトを要約・引用する際にこのファイルを優先的に参照します。

### 含まれる内容

- 会社の基本情報（事実ベース、要約しやすい形式）
- 全ページのインデックス（タイトル + 説明）
- サービスの要点（契約期間・料金・対応エリアなど）
- 「引用・要約のためのキーセンテンス」セクション

### 更新が必要なケース

- 会社情報（代表者・問い合わせ先など）が変わった時
- 新しいページを追加した時
- サービス内容が変わった時

## 5. Google Search Console 認証

`public/googleb160a3ce726b7e61.html` が認証ファイルです。**絶対に削除・リネームしないでください**（Google が定期的に再確認します。消すと所有権が外れます）。

### 別の認証方法に切り替える場合

メタタグ方式を使う場合、環境変数で値を渡せるようになっています：

```bash
# .env.local や Render / Vercel の環境変数に
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<GSC が発行する verify code>
```

ルート metadata の `verification.google` がこの値を読み込みます。

## 6. SNS シェア時のプレビュー (OGP / Twitter Card)

ルート `metadata` の `openGraph` と `twitter` で設定。各ページの layout でページ固有のタイトル・説明に上書きされます。

OG 画像は `public/will-logo-compass.png` (1200×630 想定で指定)。差し替えたい場合は同じパスのファイルを置き換えるか、`src/lib/seo.ts` の `SITE_LOGO` を変更してください。

## 7. ドメイン変更する場合の手順

ドメインを `hindwill.com` から別のものに変える時は、**`src/lib/seo.ts` の `SITE_URL` を変えるだけ** で全箇所に反映されます：

```ts
export const SITE_URL = "https://newdomain.com";
```

ただし下記は手動更新が必要：

- `public/llms.txt` 内の URL（手書き）
- `src/app/api/contact/route.ts` の CORS / メール from （別管理）

## 8. 動作検証ツール

デプロイ後に以下で確認できます：

| 確認項目 | URL | 何を見るか |
|---|---|---|
| **JSON-LD（リッチリザルト）** | https://search.google.com/test/rich-results | FAQPage・Organization・Breadcrumb が認識されるか |
| **JSON-LD（汎用）** | https://validator.schema.org/ | 全 schema が valid か |
| **OGP プレビュー** | https://developers.facebook.com/tools/debug/ | SNS シェア時の見た目 |
| **サイトマップ** | https://hindwill.com/sitemap.xml | 直接アクセスして XML が見れるか |
| **robots** | https://hindwill.com/robots.txt | 同上 |
| **llms.txt** | https://hindwill.com/llms.txt | 同上 |
| **Google Search Console** | https://search.google.com/search-console | サイトマップ送信ステータス・カバレッジ |

## 9. メンテナンスのポイント

- **FAQ を増やしたい** → `src/data/faqs.ts` に追加するだけで、page.tsx と FAQPage schema の両方に反映されます
- **新しいページを追加** → `src/app/<route>/layout.tsx` を既存のものをコピーして作成 + `src/app/sitemap.ts` の routes に追加
- **会社情報を更新** → `src/lib/seo.ts` の定数 + `public/llms.txt` の事実情報部分
- **CEO / 代表者が変わった** → `src/app/company/layout.tsx` の `ceoJsonLd` + `public/llms.txt`
