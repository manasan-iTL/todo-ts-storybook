import React from "react";
import '../../assets/css/Task.css'
import { FinishTaskButton, TaskText } from "../";

const Task: React.FC<{}> = (props) => {

    const handleClick = () => {
        console.log("Clicked Finish")
    }

    return (
        <div className="task">
            <TaskText text="英語の課題" />
            <FinishTaskButton text="Finish" class="finishTask" onClick={handleClick} />
        </div>
    )
}

export default Task