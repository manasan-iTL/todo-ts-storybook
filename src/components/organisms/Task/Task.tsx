import React from "react";
import './Task.css'
import { Button, TaskText, StarIcon } from "../..";

type Props = {
    pinned:boolean,
    changePinned: () => void
}

const Task: React.FC<Props> = (props) => {

    const handleClick = () => {
        console.log("Clicked Finish")
    }

    return (
        <div className="task">
            <StarIcon pinned={props.pinned} size={2}  changePinned={props.changePinned}/>
            <TaskText text="英語の課題" />
            <Button text="Finish" addTask={ false } onClick={handleClick} />
        </div>
    )
}

export default Task