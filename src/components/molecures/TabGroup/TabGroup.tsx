import React from "react";
import Tab from "../../atomics/Tabs/Tab";
import styled from './TabGroup.module.css'

type Props = {
    open: boolean,
    onClick: () => void
}

const TabGroup: React.FC<Props> = (props) => {
    return (
        <div className={styled.tabGroup}>
            <Tab text="完了" open={true} onClick = {props.onClick}/>
            <Tab text="未完了" open={false} onClick = {props.onClick}/>
        </div>
    )
}

export default TabGroup