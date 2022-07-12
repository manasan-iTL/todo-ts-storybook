import React from "react";
import { TabGroup, TaskList } from '../..'
import styled from "./ChangeTaskGroup.module.css";

const ChangeTaskGroup: React.FC = () => {

    return (
        <div className={styled.main}>
            <TabGroup />
            <TaskList />
        </div>
    )
}

export default ChangeTaskGroup