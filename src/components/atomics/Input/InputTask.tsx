import React from "react";
import styled from './Input.module.css'
import { InputProps } from '../../types/types'

const InputTask: React.FC<InputProps> = (props) => {
    return (
        <input  type="text"
                placeholder="タスクを入力してください" 
                className={styled.input} 
                value= {props.value} 
                onChange={(e) => props.changeInputValue(e)} />
    )
}

export default InputTask