import React, { useState } from "react";
import { InputTask, Button } from '../../'
import styled from './InputGroup.module.css'
import { useDispatch } from "react-redux";
import { sendTodo } from "../../../redux/slices/todos/todoSlice";
import { AppDispatch } from "../../../redux/store";

const InputGroup: React.FC = () => {

    const [value, setValue] = useState<string>("")
    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const dispatch: AppDispatch = useDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value === "" || value.trim() === "") {
            alert("文字を入力してください")
            setValue("")
        } else {
            dispatch(sendTodo(value))
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