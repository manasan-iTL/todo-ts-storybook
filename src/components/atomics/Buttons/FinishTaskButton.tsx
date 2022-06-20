import React from "react";
import '../../../assets/css/FinishTaskButton.css'

type Props = {
    text: string;
    class: string;
    onClick: () => void
}

const FinishTaskButton: React.FC<Props> = (props) => {
    return (
        <button className={`${props.class}`} onClick = {props.onClick}>
            { props.text }
        </button>
    )
}

export default FinishTaskButton