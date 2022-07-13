import React, { useContext } from "react";
import './Task.css'
import { Button, TaskText, StarIcon } from "../..";
import {IconProps} from '../../types/types'
import { TodoContext } from "../../../Provider/todoProvider";

type Props = IconProps & {
    id: string,
    taskText: string,
    buttonText: string
}

const Task: React.FC<Props> = (props) => {

    // Todosを取得する
    const {todoState,modifyTodo} = useContext(TodoContext)
    
    // 終了したタスクの処理
    const handleClick = () => {
        const isFinish = todoState.todos.map((todo) => todo.id === props.id)
        return modifyTodo({id: props.id, key: "finish",value: !isFinish })
    }

    return (
        <div className="task">
            <StarIcon id = {`icon${props.id}`} pinned={props.pinned} size={2} />
            <TaskText text={props.taskText} />
            <Button id={`finishButton${props.id}`} text={props.buttonText} addTask={ false } onClick={(e) => handleClick()} />
        </div>
    )
}

export default Task