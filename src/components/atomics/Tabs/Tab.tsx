import React from "react";
import styles from './Tab.module.css'
import {TabProps} from '../../types/types'

const Tab: React.FC<TabProps> = (props) => {
    return (
        <button  className={`${props.open?styles.notActive: styles.Tab }`} onClick={props.changeTab}>
            { props.text }
        </button>
    )
}

export default Tab