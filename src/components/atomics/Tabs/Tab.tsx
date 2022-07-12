import React from "react";
import styles from './Tab.module.css'
import {TabProps} from '../../types/types'
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { changePinned } from "../../../redux/slices/filters/filterSlice";

const Tab: React.FC<TabProps> = (props) => {
    const dispatch: AppDispatch = useDispatch()
    return (
        <button  className={`${props.open?styles.notActive: styles.Tab }`} onClick={() => dispatch(changePinned())}>
            { props.text }
        </button>
    )
}

export default Tab