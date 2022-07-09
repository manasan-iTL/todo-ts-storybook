# Redux toolkit(Reduxを含む)を用いた状態管理の流れ

## 目的
- Reduxによる状態管理が初めてなので、流れや設計を書き残しておいて後で振り返る
- 頭で考えるより、文書に残した方が整理しやすい。

## Reduxの概念や仕組みは課題の方のドキュメントに書いてあるので割愛

## Reduxのチュートリアルの流れに沿って行う　[URL](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)

## 状態の洗い出し
- 現状のTodoアプリの状態
  - items
    - すべてのタスク情報を管理している。
    - 初期値　外部APIから取得している。
    - データ型 オブジェクト、item[] (TypeScriptで書いている)
  - value
    - input要素の値を管理する。（追加されるタスクの情報を管理している）
    - 初期値 空文字
    - データ型 String
  - open
    - タブ機能があり、進行中と完了の状態を管理している。
    - 初期値 false
    - データ型 boolean

## Reduxで管理する状態
- チュートリアルにもあるが、すべての状態をReduxで管理する必要はない
- value
  - 元のTodoアプリでは最上位のpageで管理していた。
  - その理由として、タスクを追加する＝itemsを更新するため、itemsと同じかそれより上で状態を管理しないといけなかった。
  - Reduxを導入する場合、ローカルで管理してもOK
- open
  - openはタブの状態を管理しているが、値によってitemsをフィルターする必要がある。
  - 複数のコンポーネントでデザインの都合上参照しているので今回はグローバルステートとして扱う
- items
  - 複数のコンポーネントを経由する必要が生じるため、グローバルステートにしたほうが良いと判断

### ステート
```javascript:index.js

const topState = {
  items: [
    {id: "1", task: "英語課題", pinned: false, finish: false},
    {id: "2", task: "英語課題", pinned: false, finish: false},
    {id: "3", task: "英語課題", pinned: false, finish: false},
    {id: "4", task: "英語課題", pinned: false, finish: false},
  ],
  filters: {
    open: false
  }  
}

```

## Actionsの定義
- アクション
  - タスクを追加する
  - ピン付け
  - タスクを完了する、完了を取り消す
  - 完了タブ

- type
  - {type: "todos/addTask", payload: task}
  - {type: "todos/modifyTask", payload: task.id, key, value}
  - {type: "filters/open", payload: open}

## Reducer
