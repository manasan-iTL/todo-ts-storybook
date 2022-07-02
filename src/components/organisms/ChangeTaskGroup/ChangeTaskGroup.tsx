import React from "react";
import { TabGroup, TaskList } from '../..'
import styled from "./ChangeTaskGroup.module.css";
import {IconProps, TabProps, item} from '../../types/types'

type Props = IconProps & TabProps & {
    items: item[]
    onFinishTask: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ChangeTaskGroup: React.FC<Props> = (props) => {

    return (
        <div className={styled.main}>
            <TabGroup open = {props.open} changeTab={props.changeTab}/>
            <TaskList items = {props.items} open={props.open} onFinishTask={(e) => props.onFinishTask(e)} changePinned={(e) => props.changePinned(e)}/>
        </div>
    )
}

export default ChangeTaskGroup