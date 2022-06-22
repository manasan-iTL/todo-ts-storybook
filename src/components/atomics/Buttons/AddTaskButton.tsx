import React from "react";
import './AddTaskButton.css'

type AddTaskButtonProps = {
    text: string;
    class: string;
    onClick: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = (props) => {
    return (
        <button className={`${props.class}`} onClick = {props.onClick}>
            { props.text }
        </button>
    )
}

export default AddTaskButton