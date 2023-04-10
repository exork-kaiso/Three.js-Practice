voltaの公式サイトから、windows向けアプリケーションをダウンロード・インストールする。
https://volta.sh/

cortanaから「開発者向け設定」を検索し、windowsの開発者向け設定を有効化する。

vscodeを再起動してからターミナルを起動し、voltaが正しくインストールできているか確認する。

`
volta --version
`

voltaからNode.jsをインストールする。

`
volta install node
`

node.jsが正しくインストールできているか確認する。

`
node -v
`

node.jsを初期化する。

`
npm init
`

最新版のThree.jsをインストールする。

`
npm install three
`

Three.jsが正しくインストールできているか確認する。

`
npm list
`

Parcelをインストールする。

`
npm install parcel-bundler
`

プロジェクトに必要なディレクトリとファイルを生成する。

/src/
/src/index.html
/src/js/
/src/js/index.js

/src/index.htmlファイルを編集する。

`
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>three.js practice</title>
</head>
<body>
  <script src="/js/index.js"></script>
</body>
</html>
`

/src/js/index.jsファイルを編集する。

`
import * as THREE from 'three';

const init = () => {
  const scene = new THREE.Scene();
  console.log( scene );
}

if ( document.readyState === 'complete' ){
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
`

---

UbuntuにVoltaをインストールする。

※ 事前に名前解決を行っておく。

`
cat /etc/resolv.conf
sudo vi /etc/resolv.conf
nameserver 8.8.8.8
`

curlでvoltaをインストールし、インストールを確認する。

`
sudo curl https://get.volta.sh | bash
exec $SHELL -l
volta --version
`

voltaでNode.jsをインストールする。

`
volta install node
`

node.jsの最新バージョンをインストールする。

`
volta install node@latest
`

指定したバージョンのnode.jsをインストールする。

`
volta install node@バージョン
`
※ 上記インストールコマンドと同じコマンドで、node.jsのバージョンを切り替えます。

voltaでインストールしたnode.jsの一覧を表示する。

`
volta list all
`

指定したバージョンのnode.jsを削除する。

`
rm -rf ~/.volta/tools/image/node/バージョン
`

【Ubuntu】node.jsのバージョン管理システム「Volta」のインストール・使い方
https://lunaris-code.com/web/351/
