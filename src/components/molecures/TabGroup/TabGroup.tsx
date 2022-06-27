import React from "react";
import Tab from "../../atomics/Tabs/Tab";
import styled from './TabGroup.module.css'
import { TabProps } from "../../types/types";

// type Props = {
//     open: boolean,
//     changeTab: () => void
// }

const TabGroup: React.FC<TabProps> = (props) => {
    return (
        <div className={styled.tabGroup}>
            <Tab text="進行中" open={props.open} changeTab = {props.changeTab}/>
            <Tab text="完了" open={!(props.open)} changeTab = {props.changeTab}/>
        </div>
    )
}

export default TabGroup