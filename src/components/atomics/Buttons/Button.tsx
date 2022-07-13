import React from "react";
import styled from './Button.module.css'
import { ButtonProps } from '../../types/types'

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button id={props.id} onClick={props.onClick} className={props.addTask? styled.line: styled.finishTask}>
            { props.text }
        </button>
    )
}

export default Button