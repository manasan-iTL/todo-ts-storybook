import React from "react";
import styles from './Button.module.css'

type ButtonProps = {
    text: string,
    addTask: boolean,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className={props.addTask? styles.line: styles.finishTask}>
            { props.text }
        </button>
    )
}

export default Button