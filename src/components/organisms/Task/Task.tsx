import React from "react";
import './Task.css'
import { Button, TaskText, StarIcon } from "../..";
import {IconProps} from '../../types/types'

type Props = IconProps & {
    onFinishTask: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    taskText: string,
}

const Task: React.FC<Props> = (props) => {

    return (
        <div className="task">
            <StarIcon id = {`icon${props.id}`} pinned={props.pinned} size={2}  changePinned={(e)=> props.changePinned(e)}/>
            <TaskText text={props.taskText} />
            <Button id={`finishButton${props.id}`} text="Finish" addTask={ false } onClick={(e) => props.onFinishTask(e)} />
        </div>
    )
}

export default Task