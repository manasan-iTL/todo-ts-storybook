import React from "react";
import './Task.css'
import { Button, TaskText } from "../..";

const Task: React.FC<{}> = (props) => {

    const handleClick = () => {
        console.log("Clicked Finish")
    }

    return (
        <div className="task">
            <TaskText text="英語の課題" />
            <Button text="Finish" addTask={ false } onClick={handleClick} />
        </div>
    )
}

export default Task