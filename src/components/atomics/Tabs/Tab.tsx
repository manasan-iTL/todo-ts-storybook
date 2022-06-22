import React from "react";
import styles from './Tab.module.css'

type Props = {
    text: string;
    open: boolean;
    onClick: () => void
}

const Tab: React.FC<Props> = (props) => {
    return (
        <button  className={`${props.open? styles.Tab: styles.notActive}`} onClick={props.onClick}>
            { props.text }
        </button>
    )
}

export default Tab