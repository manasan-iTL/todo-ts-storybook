import React, { useContext } from "react";
import { FilterContext } from "../../../Provider/filterProvider";
import Tab from "../../atomics/Tabs/Tab";
import styled from './TabGroup.module.css'

const TabGroup: React.FC = () => {
    const {filterState} = useContext(FilterContext)
    console.log(filterState)
    return (
        <div className={styled.tabGroup}>
            <Tab text="進行中" open={filterState.open} />
            <Tab text="完了" open={!(filterState.open)} />
        </div>
    )
}

export default TabGroup