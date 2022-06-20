import React from "react";
import '../../../assets/css/Tab.css'

type Props = {
    text: string;
    class: string;
    onClick: () => void
}

const Tab: React.FC<Props> = (props) => {
    return (
        <button  className={`${props.class}`} onClick={props.onClick}>
            { props.text }
        </button>
    )
}

export default Tab