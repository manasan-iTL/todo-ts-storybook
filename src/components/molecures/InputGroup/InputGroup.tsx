import React, {useContext, useState} from "react";
import { InputTask, Button } from '../../'
import styled from './InputGroup.module.css'
import { TodoContext } from "../../../Provider/todoProvider";

const InputGroup: React.FC = () => {

    //Contextの呼び出し
    const {addTodo} = useContext(TodoContext)
    // 上位コンポーネントで管理していたステートを移植　入力値の管理及び更新関数
    const [value, setValue] = useState<string>("")
    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }    

    // タスクを追加する処理
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value === "" || value.trim() === "") {
            alert("文字を入力してください")
            setValue("")
        } else {
            addTodo(value)
            setValue("")
        }
    }

    return (
        <form action="" className={styled.form} onSubmit={(e) => handleSubmit(e)}>
            <dl className={styled.inputGroup}>
                <dt className={styled.formItem}>
                    <InputTask value={value} changeInputValue={(e) => changeInputValue(e)}/>
                </dt>
                <dd className={styled.formItem}>
                    <Button text="追加" addTask={true} type="submit"/>
                </dd>
            </dl>
        </form>
    )
}

export default InputGroup