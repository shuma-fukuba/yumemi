# Resas (Yumemi Intern Exam)

## 概要
コーディング試験問題。Resas API(https://opendata.resas-portal.go.jp/)から都道府県ごとの人口を取得してグラフ化するSPA。

## 使い方
### Production
https://shuma-yumemi-exam.netlify.app/ にアクセス。
都道府県のチェックボックスが一覧で表示される。グラフに表示したい都道府県をチェックすると、横軸年、縦軸人口数の折れ線グラフが描画される。同時に複数の都道府県を表示させることができる。レスポンシブ対応

### Development
以下のコマンドをターミナルで実行

1. `yarn install`

2. `yarn dev`

その後、http://localhost:3000にアクセス

フォーマットには以下を実行する。

`yarn format`

lintは以下を実行する

`yarn lint`


### deployment
mainブランチpushすると、自動的にnetlifyへのアップロードが実行される。

## 使用技術
・React(v18.2.0)

・Next(v13.0.1)

・TypeScript(v4.8.4)

・redux(v4.2.0)

## ディレクトリ構成(src配下)
・pages - next jsの標準ディレクトリ。

・styles - グローバルcssや、レスポンシブ用のスクリプトを格納

・modules - reduxのstoreや、API連携のりデューサーを定義。また、axiosの設定などが書かれている。

・hooks - reduxのhooksをTypeScriptが型を認識できるように定義

・entities - APIから受け取ったデータをオブジェクト化し、扱いやすくするための型を定義

・const - 定数を定義する。ここでは環境変数を読み込んでいる。


・component - Reactの各コンポーネントを定義
