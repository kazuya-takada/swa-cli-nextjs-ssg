# 概要

- Azure Static Web Apps の実装。
- Nextjs の SSG を使用したうえで、SWA CLI を使用使ってデプロイする。

# 環境構築

```bash
$ npm install
```

# ローカルでの確認

- ビルド

  ```bash
  $ swa build
  ```

- ビルドされたファイルをローカルで実行

  ```bash
  $ swa start
  ```

# デプロイ

- ルート直下に`.env`ファイルを作成し、各環境に合わせて記述する。

  ```bash
  SWA_CLI_APP_NAME=swa-nextjs-ssg
  AZURE_TENANT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx # Azureのテナントid
  AZURE_SUBSCRIPTION_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx # サブスクリプションid
  AZURE_RESOURCE_GROUP=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx # デプロイするリソースグループを指定
  AZURE_REGION_LOCATION=eastasia # リージョンの指定。今回はeastasiaを指定。
  SWA_CLI_DEPLOY_ENV=Production # デプロイ環境。デフォルトではPreview環境となりますが、今回は本番環境に直接デプロイするため、Productionに変更。
  ```

- デプロイ
  ```bash
  $ swa deploy --no-use-keychain
  ```

# 備考

[詳細の手順をまとめた Qiita 記事](https://qiita.com/fsdg-takada/items/ff64bc0d46bc2e2a470b)
