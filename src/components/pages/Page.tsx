import axios from "axios";
import React, { useEffect, useState } from "react";
import { TopPage } from "../"
import { item } from "../types/types";

/* 外部APIのURL   */
const url = "https://wjn8pv712f.execute-api.ap-northeast-1.amazonaws.com/dev/tasks"

const Page: React.FC = () => {

    /*  　　　外部APIとの通信用の関数　axiosをラップする関数 　　　*/

    //タスクを追加するAPIとの通信を行う
    const sendTask = async (item: item) => {
        const response = await axios.post(url, item)
        return response
    }

    // タスクを変更するAPIと通信を行う。
    // 今回は、タスクをピン付けするか・タスクが完了したかを変更するAPIと通信を行う。

    const sendModifyTask = async (taskId: string, taskKey: string, taskValue: string | boolean) => {
        const response = await axios.patch(url, {
            id: taskId,
            key: taskKey,
            value: taskValue
        })
        console.log(response)
        return response
    }

    /*     Stateの初期化とそれを更新する関数　　　　　　　 */

    // input onChangeイベント用　useRefでも良いかも？

    const [value, setValue] = useState<string>("")

    // items(すべてのタスク)用のState
    const [items, setItems] = useState<item[]>([])

    // タブの開閉を管理するState
    const [open, setOpen] = useState<boolean>(false)

    // valueを更新するsetValueのラップ関数
    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    // openを更新するsetValueのラップ関数
    const changeTab = () => {
        setOpen(!open)
    }


    /*       
        複数のロジックを含むState更新用の関数
        １　ユーザのアクションによって変化したitems内のitemオブジェクトを抽出
        ２　変化した値を更新
        ３　変化した情報をDBに保存するための関数を実行　上で定義したAPI通信用の関数を実行
        ４　itemsを更新する
              */

    // ピンをつけたかどうかを、items.pinnedで管理しており、それを更新する関数

    const changePinned = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {

        // クリックされたDOMのidによって、更新するオブジェクトとそうてないオブジェクトを抽出
        // id: iconO(O = item.id) 末尾の数字とitem.idは一致している

        setItems(items.map(item => {
            if (item.id === e.currentTarget.id.slice(-1)) {
                sendModifyTask(item.id, "pinned", !item.pinned)
                return { ...item, pinned: !item.pinned }
            } else {
                return item
            }
        }))
    }


    // タスクを完了する処理
    const onFinishTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // 処理自体はchengePinned()と同じ　共通化しても良いかも
        setItems(items.map(item => {
            if (item.id === e.currentTarget.id.slice(-1)) {
                sendModifyTask(item.id, "finish", !item.finish)
                return { ...item, finish: !item.finish }
            } else {
                return item
            }
        }))
    }


    // タスクを追加する処理

    const onAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // タスクの生成
        const newTask: item = {
            id: String(items.length + 1),
            task: value,
            finish: false,
            pinned: false
        }

        // バリデーションチェック
        if (newTask.task === "" || newTask.task.trim() === "") {
            alert("文字を入力してください")
            setValue("")
        } else {
            // API通信
            sendTask(newTask)

            // ステートの更新
            setItems([...items, newTask])
            setValue("")
        }

    }


    /*   　　　　　　　useEffectの処理　　　　　　　　　　　　 */


    // 初回レンダリング時にデータを取得する
    useEffect(() => {
        axios.get(url).then((response) => {
            setItems(response.data.Items)
        })
    }, [])


    return (
        <TopPage
            items={items}
            value={value}
            open={open}
            changeInputValue={(e) => changeInputValue(e)}
            changePinned={(e) => changePinned(e)}
            changeTab={changeTab}
            onAddTask={(e) => onAddTask(e)}
            onFinishTask={(e) => onFinishTask(e)} />
    )
}

export default Page