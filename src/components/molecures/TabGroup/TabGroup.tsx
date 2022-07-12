import React from "react";
import Tab from "../../atomics/Tabs/Tab";
import styled from './TabGroup.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


const TabGroup: React.FC = () => {
    const open = useSelector((state: RootState) => state.filter.open)
    return (
        <div className={styled.tabGroup}>
            <Tab text="進行中" open={open}/>
            <Tab text="完了" open={!open}/>
        </div>
    )
}

export default TabGroup