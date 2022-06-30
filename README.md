# Next.js + SCSS + TypeScript : Starter kit.

## これはなに

- Reactベースの Next.js + SCSS + TypeScript が使えるもっともシンプルな環境を構築するもの
- `pages/index.tsx` と `pages/about.tsx` の間に張られたリンクを行き来するだけのシンプルな構成
- tsxファイル内は、
  - Next.js 用のwebページテンプレート
  - 最小限の TypeScript 実装
  - SCSS に対応した Styled JSX

  で構成されています。

<img src="https://user-images.githubusercontent.com/102408514/176702815-10ec5f2c-1f56-4a57-9a48-a4dd37450523.png" width="50%" />

- 想定使用者層
  - webプログラミング初学者
  - HTML + CSS + JavaScript + jQueryからステップアップしたいが、何から手を付けて良いか迷っている方

- 公式情報
  - [Next.js Start Learning](https://nextjs.org/learn/foundations/about-nextjs)

- 動作環境
  - node.js `v16.14.2`
  - yarn `v1.22.18`
  - npm `v8.5.0`

## セットアップ

- gitリポジトリから取得

```bash
git clone https://github.com/old-pgmrs-will/nextjs_scss_starter
cd nextjs_scss_starter
```

- モジュール・インストール

```bash
# yarn
yarn install

# npm
npm install
```

- 開発用サーバ起動

```bash
# yarn
yarn dev

# npm
npm run dev
```

稼働環境: http://localhost:3000

- プロダクション・ビルド

```bash
yarn build
```

- プロダクション・ビルドのローカルプレビュー

```bash
yarn start
```
