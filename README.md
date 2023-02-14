# Three.js-Practice

---

## Practice mdn 01

Practice-01 は、2021年12月6日に mdn web docs の WebGLチュートリアルから学んだ内容です。

---

## Practice ics 01

ICS Media の Three.js のチュートリアルを学びました。

[簡単なThree.jsのサンプルを試そう](https://ics.media/tutorial-three/quickstart/ "")

サンプルコードが提供されているため、そのサンプルコードの挙動を見ながらコードの動きを解説してくれています。

1. canvas要素を用意する。
2. CDNからThree.jsを読み込む。
3. windowイベント'DOMContentLoaded'のタイミングでThree.jsを初期化関数を実行する。
   1. レンダラーをつくる。 - canvas要素と紐づける。
   2. シーンをつくる。 - 3D空間をつくる。
   3. カメラをつくる。 - 画角、アスペクト比、描画開始距離、描画終了距離を指定してつくり、シーンに配置する。
   4. レンダリングオブジェクトをつくる。 - ジオメトリとマテリアルを組み合わせてつくり、シーンに配置する。
   5. アニメーションさせる。 - requestAnimationFrame()を再帰処理し、画面の再描画を繰り返す。

[Window.requestAnimationFrame()](https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame "")

> window.requestAnimationFrame() メソッドは、ブラウザーにアニメーションを行いたいことを知らせ、指定した関数を呼び出して次の再描画の前にアニメーションを更新することを要求します。

> このメソッドは、再描画の前に呼び出されるコールバック 1 個を引数として取ります。

> このメソッドは、いつでも画面上でアニメーションの更新準備が整った時に呼び出してください。これにより、ブラウザーの次の再描画が実行される前にアニメーション関数が呼び出されることを要求します。

> 警告: アニメーションが 1 フレームでどれだけ進んだかを計算する場合、常に第 1 引数（または現在時刻を取得する他の方法）を使用するようにしてください、そうしないと、アニメーションはリフレッシュレートの高い画面では速く実行されます。

---

## Output 01

practice_ics_01.html をベースにして遊んでみます。

1. y軸の回転に加えて、x軸とy軸も回転させてみる。→ よりダイナミックに動くようになった。
2. 回転に加えて、canvas要素の範囲内でx軸とy軸の平行移動をさせてみる。→ canvas要素の両端で折り返すようになり、立方体がバウンドしているように見えるようになった。

### 改善したいところ

- 背景色がべた塗りの黒なのが絶妙にダサい。
  - → グラデーションのかかった背景色にしたい。
- 立方体の配色がいかにもNormalな感じでダサい。
  - → 適切なマテリアルを当てたいが、他のマテリアルでは光源が必要。
- バウンドしている場所が必ずしも末端部分じゃないので気持ち悪い。
  - → オブジェクトを球にしてみたが、球が回転している様子が分かりづらくなった。
  - → マテリアルを変更することで、球の回転も判断できるようになるかもしれない。
- 立方体が動く範囲を全画面に展開したい。
  - → ウィンドウサイズの変更をキャッチする必要がある。
  - → 画面サイズによって、立方体のサイズを変更する必要が出てくる。

## ホームページにアップロードしました。

[Rolling Cube](https://kaisokaiso.com/showcase/rolling-cube/ "Rolling Cube")

---

## Practice ics 02

オブジェクトにベタ塗りマテリアルを適用する。

[Three.jsのマテリアルの基本](https://ics.media/tutorial-three/material_basic/ "")

> 代表的なマテリアルとして「単色塗りのマテリアル」と「画像を使ったマテリアル」の二種類があります。

THREE.MeshStandardMaterial()など標準的なマテリアルには、光源が必要。

THREE.DirectionalLight() は平行光源だが、THREE.AmbientLight()は環境光として空間全体を照らすことができる。（他にもいろんな種類の光源がありそう。）

## Practice ics 03

オブジェクトにテクスチャファイルを使ったマテリアルを適用する。

[Three.jsのマテリアルの基本](https://ics.media/tutorial-three/material_basic/ "")

天体のテクスチャは以下のリンクが良さそう。

[Planet Earch Texture Maps](http://planetpixelemporium.com/earth.html "")
