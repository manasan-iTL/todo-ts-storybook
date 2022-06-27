import React, { useState } from "react";
import {TopPage} from "../"
import { PageProps, item } from "../types/types";

const Page: React.FC<PageProps> = (props) => {

    // input onChangeイベント用　要らないかも？
    const [value, setValue] = useState<string>("")

    // itemsを更新する
    const [items, setItems] = useState<item[]>([...props.items])
    const [open, setOpen] = useState<boolean>(false)
    // const [pinned, setPinned] = useState<boolean>(false)

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const changeTab = () => {
        setOpen(!open)
    } 

    // useEffect(() => {
    //     const tasks = items.filter((item) => item.finish === open)
    //     setItems(tasks)
    // }, [open])

    const changePinned = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const newObj = items.filter(item => item.id === e.currentTarget.id)[0]
        const oldArray = items.filter(item => item.id !== e.currentTarget.id)
        newObj.pinned = !(newObj.pinned)
        const orderArray = [...oldArray, newObj].sort((first, second) => {
            if(first.id > second.id) {return 1}
            else if (first.id < second.id) {return -1}
            else {return 0}
        })
        setItems(orderArray)
    }

    const onAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefaultが必要
        e.preventDefault()
        const newTask:item = {
            id: String(items.length + 1),
            task: value,
            finish: false,
            pinned: false
        }
        setItems([...items, newTask])
        setValue("")
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
            onFinishTask = {props.onFinishTask}/>
    )
}

export default Page