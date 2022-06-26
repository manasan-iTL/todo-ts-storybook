import React from "react";
import Task from "../Task/Task";
import styled from './TaskList.module.css'

type Props = {
    changePinned: () => void
}

const TaskList: React.FC<Props> = (props) => {

    // const orderTaskList = (items: [])

    return (
        <div className={styled.taskList}>
            <Task pinned={true} changePinned={() => props.changePinned()} />
            <Task pinned={false} changePinned={() => props.changePinned()} />
            <Task pinned={true} changePinned={() => props.changePinned()} />
            <Task pinned={false} changePinned={() => props.changePinned()} />
        </div>
    )
}

export default TaskList