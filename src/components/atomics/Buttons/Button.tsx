import React from "react";
import styled from './Button.module.css'
import { ButtonProps } from '../../types/types'

// type Props = {
//     text: string,
//     addTask: boolean,
//     onClick: () => void,
//     type?: string
// }

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className={props.addTask? styled.line: styled.finishTask}>
            { props.text }
        </button>
    )
}

export default Button