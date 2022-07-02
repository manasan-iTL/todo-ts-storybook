import axios from "axios";
import React, { useEffect, useState } from "react";
import {TopPage} from "../"
import { Pinned } from "../../stories/atomics/Icon/StarIcon.stories";
import { PageProps, item } from "../types/types";

const url = "https://wjn8pv712f.execute-api.ap-northeast-1.amazonaws.com/dev/tasks"
const Page: React.FC<PageProps> = (props) => {

    // API通信

    //タスクを追加する
    const sendTask = async (item:item) => {
        const response = await axios.post(url, item)
        console.log(response)
        return response
    }

    // タスクを変更する
    const sendModifyTask = async (taskId:string, taskKey:string, taskValue:string|boolean) => {
        const response = await axios.patch(url, {
            id:taskId,
            key:taskKey,
            value:taskValue})
        console.log(response)
        return response
    }

    // input onChangeイベント用　要らないかも？
    const [value, setValue] = useState<string>("")

    // itemsを更新する
    const [items, setItems] = useState<item[]>([])
    const [open, setOpen] = useState<boolean>(false)

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const changeTab = () => {
        setOpen(!open)
    } 
    const changePinned = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const newObj = items.filter(item => item.id === e.currentTarget.id.slice(-1))[0]
        const oldArray = items.filter(item => item.id !== e.currentTarget.id.slice(-1))
        newObj.pinned = !(newObj.pinned)
        sendModifyTask(newObj.id, "pinned" ,newObj.pinned )
        const orderArray = [...oldArray, newObj].sort((first, second) => {
            if(first.id > second.id) {return 1}
            else if (first.id < second.id) {return -1}
            else {return 0}
        })
        setItems(orderArray)
    }

    const onAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask:item = {
            id: String(items.length + 1),
            task: value,
            finish: false,
            pinned: false
        }
        sendTask(newTask)
        setItems([...items, newTask])
        setValue("")
    }

    // 初回レンダリング時にデータを取得する
    useEffect(() => {
        axios.get(url).then((response) => {
            setItems(response.data.Items)
        })
    }, [])

    const onFinishTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.currentTarget.id)
        const newObj = items.filter(item => item.id === e.currentTarget.id.slice(-1))[0]
        const oldArray = items.filter(item => item.id !== e.currentTarget.id.slice(-1))
        newObj.finish = !(newObj.finish)
        sendModifyTask(newObj.id, "finish", newObj.finish )
        const orderArray = [...oldArray, newObj]
        setItems(orderArray)
    }

    return (
        <TopPage 
            items={items}
            value={value} 
            open={open}
            changeInputValue = {(e) => changeInputValue(e)} 
            changePinned = {(e) => changePinned(e)}
            changeTab={changeTab}
            onAddTask = {(e) => onAddTask(e)}
            onFinishTask = {(e) => onFinishTask(e)}/>
    )
}

export default Page