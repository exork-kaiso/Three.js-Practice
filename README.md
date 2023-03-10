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

### 改善したいところ

- 大きいオブジェクトが横回転するところは迫力があるので、カメラをより広角にすると迫力が増すと思う。
- ずっと見ていると背景と立方体の境界がジャギーっぽく見えてくるので、アンチエイリアスがかかるともっと良くなる気がする。

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

---

## Output 02

practice_ics_03.html をベースにして遊んでみました。

1. 太陽系惑星のテクスチャが入手できたので、太陽系の惑星（10個）を並べてみました。
2. 地球の公転を基準に太陽系惑星の公転速度を設定し、太陽の周りを公転させてみました。

### 改善したいところ

- 実際の太陽系惑星の大きさを再現したい。
- 実際の太陽系惑星の距離を再現したい。
- 太陽系惑星の軌道（円形）を表示させたい。
- 実際の地球の位置から見た太陽系惑星の正確な公転位置を再現したい。
- 太陽系惑星の情報をクラス化して扱いたい。
- 太陽系を基準にマウス操作やタッチ操作を追加したい。
- 太陽系惑星についての情報を調べるだけで相応の時間がかかってしまった。（2～3h）
- マウス操作やタッチ操作でパララックス的に動く背景を設定したい。
- それぞれの惑星の衛星を追加したい。
- 指定した日付の惑星の位置を再現できるようにしたい。
- それぞれ惑星の影を表現したい。
- それぞれ天体の見え方を表現・演出したい。

---

## Practice ics 04

いろんなジオメトリがあることを確認する。

[Three.jsのジオメトリの基本](https://ics.media/tutorial-three/geometry_general/ "")

- BoxGeometry
- CapsuleGeometry
- CircleGeometry
- ConeGeometry
- DodecahedronGeometry
- EdgeGeometry
- IcosahedronGeometry
- LatheGeometry
- OctahedronGeometry
- PlaneGeometry
- PolyhedronGeometry
- RingGeometry
- ShapeGeometry
- SphereGeometry
- TetrahedronGeometry
- TorusGeometry
- TorusKnotGeometry
- TubeGeometry
- WireGeometry

---
## Practice ics 05

[Three.jsのカメラの制御](https://ics.media/tutorial-three/camera_position/ "")

> 3D空間内でカメラ（視点）を自由に移動・回転できます。これを習得することで3Dの表現力が格段に高まります

- 自動回転型
- マウスの位置連動型
- マウスのドラッグ＆ドロップ型

スクリプト上では、角度はラジアンに変換したものを扱う。
ラジアンとは？ 180° = π。

[ラジアンとは何か？角度をラジアンに変換する方法が理解できる練習問題付き](https://juken-mikata.net/how-to/mathematics/radian.html ""s)

[4.2　三角関数](https://r-dimension.xsrv.jp/classes_j/sine_cosine/ "")

サインとコサインでそれぞれカメラのx軸の位置とy軸の位置を計算し、lookAt()メソッドを使うことでどの位置にカメラがあっても原点位置を見つめるように指定する。

※ cameraオブジェクトのlookAt()メソッドを使うと、どんな位置からでも指定した位置にカメラを向くように強制することができる。



マウスの位置に応じてインタラクティブにカメラを動かすのは、WebGLならではの表現方法。

> ポイントとしては、角度の算出方法をステージの幅の何％の位置にマウスがあるかを計算で求め、それを角度に反映しているところです。

> イージングの公式というのがでてきていますが、ウェブコンテンツの開発では一般的によく使われる公式なので、知らない方はぜひ覚えておきましょう。

> `// イージングの公式を用いて滑らかにする`

> `// 値 += (目標値 - 現在の値) * 減速値`

> `rot += (targetRot - rot) * 0.02;`

---

[Three.jsのOrbitControlsで手軽にカメラを制御する](https://ics.media/tutorial-three/camera_orbitcontrols/ "")

> Three.jsにはカメラの動きを自動的に制御する THREE.OrbitControls クラスが存在します。

（1）周回軌道を描くようにカメラを配置する場合、（2）ポインター操作でカメラの配置やアングルを変更する場合に役に立ちます。

OrbitControl.js は Three.js 本体には含まれていないので、別で読み込む必要がある。

OrbitControl.jsの読み込み
`
<script src="https://unpkg.com/three@0.147.0/examples/js/controls/OrbitControls.js"></script>
`

> ※Three.js r148（2022年12月リリース）よりexamples/jsフォルダーでの提供はなくなりました。今後はES Modulesでの利用を推奨されますので、本記事もゆくゆく更新します。

仕組みとしては、THREE.OrbitControlsクラスのコンストラクターへカメラのインスタンスとDOM要素を引数として指定するだけで、マウスと連動してインタラクションが効くようになる。

`
const controls = new THREE.OrbitControls( カメラのインスタンス , DOM要素 );
`

第2引数のDOM要素は、document.body もしくは canvas要素を渡すのが一般的。

THREE.OrbitControlsインスタンスのenableDampingやdampingFactorプロパティーを設定すると心地良い操作感になります。

THREE.OrbitControlsは手軽だがカスタマイズの自由度の制限がある。その場合はカメラの制御を自作するといい。

---

[Three.jsでモデルデータを読み込む](https://ics.media/tutorial-three/model_basic/ "")

Three.js では、様々な形式の3Dデータを取り込むことができる。

> Three.jsではファイルを読み込むときにローダー（ファイルを解析する機能）を使ってモデルデータを読み込みます。

Three.jsが対応しているモデルデータの形式

- GLTF形式
- OBJ形式
- Collada(dae)形式
- FBX形式（バイナリー）
- 3DMax (.3ds)形式
- Quake 2 MD2(.md2)形式
- BlenderからThree.js Exporterを使って出力したJSON形式

それぞれ形式ごとにローダーが用意されているので、読み込ませたいモデルデータの形式にあったローダーを使う。
ローダーはThree.js には含まれていないので、別で読み込む必要がある。

JavascriptでThree.jsを初期化したあと、ローダーを使ってファイルを読み込み、3D空間に追加する。

※ ローダーをES Moduleで読み込むことが多そう。
※ 読み込んだままのモデルデータはジャギって見えるので、アンチエイリアスがかけられると良さそう。

