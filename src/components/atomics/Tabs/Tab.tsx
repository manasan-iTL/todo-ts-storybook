import React, { useContext } from "react";
import styles from './Tab.module.css'
import {TabProps} from '../../types/types'
import { changeTabAction } from "../../../redux/filter/filterAction";
import { FilterContext } from "../../../Provider/filterProvider";

const Tab: React.FC<TabProps> = (props) => {
    const {filterDispatch} = useContext(FilterContext)
    return (
        <button  className={`${props.open?styles.notActive: styles.Tab }`} onClick={() => filterDispatch(changeTabAction())}>
            { props.text }
        </button>
    )
}

export default Tab