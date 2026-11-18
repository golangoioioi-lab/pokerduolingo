# Holdem Lab

テキサスホールデム戦略の学習アプリ（PWA）。iOS 純正アプリに近い UI、ライト / ダーク対応。
設計の詳細は [docs/設計書.md](docs/設計書.md)。

## 開発

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # 役判定・勝率・レンジ・課金ルール・コンテンツの整合性テスト
npm run build      # 型チェック + 本番ビルド（dist/）
npm run lint
```

環境変数が空のままなら **デモモード**（データは端末内）で動きます。

今は有料プランを止めていて、全レッスン・全機能が無料です（`VITE_PAID_PLANS=true` で Pro とペイウォールが戻ります）。

## 公開（push で自動）

`npm install` すると git の pre-push フックが有効になり、`main` を push するとこの PC から
テスト → DB 更新 → ビルド → Cloudflare Pages へ公開してから push します（失敗したら push しません）。
事前に `npx wrangler login` 済みであること。公開せずに push だけしたいときは `SKIP_DEPLOY=1 git push`。
手動で公開だけするなら `npm run deploy`。

## 構成

```
src/
  domain/poker/      カード・役判定・勝率計算（Web Worker）・レンジ
  domain/content/    コース目録（catalog.ts）とレッスン本文（lessons/free, lessons/pro）、練習の解説生成
  services/          account（ログイン・Pro 判定・購入）、access（無料/Pro のルール）、content、practice、settings など
  ui/                画面部品（ハンド表、カード、テーブル、ペイウォール）
  pages/             learn / practice / tools / me
  theme/             iOS システムカラー（ライト/ダーク）とアプリ固有のスタイル
server/             API（Hono）: 認証・課金・レッスン配信。functions/api が入口
migrations/         D1 のテーブル定義
```

## 本番接続

Cloudflare Pages（静的ファイル＋`functions/` の API）＋ D1、Google ログイン、Stripe。
手順は [docs/バックエンド構築手順.md](docs/バックエンド構築手順.md)。ローカルで本番と同じ仕組みを試すには:

```bash
npm run db:migrate:local && npm run db:seed:local && npm run cf:dev
```
