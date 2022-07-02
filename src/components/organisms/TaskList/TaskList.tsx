import React from "react";
import Task from "../Task/Task";
import styled from './TaskList.module.css'
import {IconProps, item} from '../../types/types'

type Props = IconProps & {
    open: boolean,
    onFinishTask: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    items: item[]
}

const TaskList: React.FC<Props> = (props) => {

    // タブが進行中か完了かによってタスクをソートする
    const sortTaskList = props.items.filter((item) => props.open === item.finish)
    // pinned（ピンがつけられているか）によって順番を変える
    const piinedTasks = sortTaskList.filter((order) => order.pinned)
    const unPinnedTasks = sortTaskList.filter((order) => !(order.pinned))
    const result = [...piinedTasks, ...unPinnedTasks]
    return (
        <div className={styled.taskList}>
            {
                result.map(item => 
                          <Task id={item.id} 
                                key={item.id}  
                                taskText={item.task} 
                                pinned={item.pinned} 
                                changePinned={(e) => props.changePinned(e)} 
                                onFinishTask = {(e) => props.onFinishTask(e)} /> )
            }

        </div>
    )
}

export default TaskList