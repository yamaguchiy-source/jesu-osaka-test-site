# JeSU大阪サイト 本番移管メモ

## 現在の状態

- テストサイト: https://yamaguchiy-source.github.io/jesu-osaka-test-site/
- 本番ドメイン: https://www.jesu-osaka.jp/
- 現行本番: Strikingly
- 今回のリメイク: 静的HTML/CSS/JavaScript
- 本番用検索設定: `index,follow` に切替済み
- GitHub Pagesカスタムドメイン: `www.jesu-osaka.jp` 設定済み

## 本番移管前に必要な確認

- 株式会社Joshinの会員参画ニュースを公開してよいか。
- 会員資料PDFのURLを現行Strikingly CDNのまま使うか、新しい保管先へ移すか。
- 問い合わせフォームは未接続のため、公開時点では削除し、イベント掲載申込フォーム・X・会員資料への導線に整理済み。
- イベント掲載申込フォームを本番サイト上の主要導線として使うか。
- `JeSU大阪eスポーツ塾` の表示は Coming Soon のままでよいか。
- メンバー写真、活動写真、ロゴの掲載許諾に問題がないか。

## 移管時の停止ライン

以下は会長Goサイン後に実施する。

- `www.jesu-osaka.jp` のDNS切替
- Strikingly側の公開停止または転送設定
- 本番問い合わせフォームの送信先接続
- Google、Cloudflare、GitHubなどへの追加権限付与

## 推奨手順

1. テストサイトで表示と文言を最終確認する。済み
2. 問い合わせフォームの本番送信先を決める。未接続のためフォーム削除で公開
3. 会員資料PDFを新しい保管先へ移すか決める。現行Strikingly CDNを継続利用
4. `noindex,nofollow` を本番公開直前に外す。済み
5. DNS切替前のバックアップを取る。済み
6. 本番ドメイン切替を実施する。DNS管理画面で作業中
7. スマホ、PC、フォーム、SNSカード、検索避け解除を確認する。DNS反映後に最終確認

## DNS切替内容

- 管理: ムームードメイン
- 現在の `www`: Strikingly向けCNAME
- 切替後の `www`: `yamaguchiy-source.github.io`
- GitHub Pages側のカスタムドメイン設定: 済み
- HTTPS強制: GitHub Pages証明書発行後に有効化する
