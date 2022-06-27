import React from "react";
import './Task.css'
import { Button, TaskText, StarIcon } from "../..";
import {IconProps} from '../../types/types'

type Props = IconProps & {
    onFinishTask: () => void,
    taskText: string,
}

const Task: React.FC<Props> = (props) => {

    return (
        <div className="task">
            <StarIcon id = {props.id} pinned={props.pinned} size={2}  changePinned={(e)=> props.changePinned(e)}/>
            <TaskText text={props.taskText} />
            <Button text="Finish" addTask={ false } onClick={props.onFinishTask} />
        </div>
    )
}

export default Task