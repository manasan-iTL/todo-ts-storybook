import React from "react";
import './Task.css'
import { Button, TaskText, StarIcon } from "../..";
import {IconProps} from '../../types/types'
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { modifyTodo } from "../../../redux/slices/todos/todoSlice";

type Props = IconProps & {
    id: string,
    taskText: string,
    buttonText: string
}

const Task: React.FC<Props> = (props) => {

    const dispatch: AppDispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todo.todos)

    const handleClick = () => {
        const isFinish = todos.map((todo) => todo.id === props.id)
        return dispatch(modifyTodo({todoId: props.id, keyValue: "finish", taskValue:!isFinish }))
    }

    return (
        <div className="task">
            <StarIcon id = {`icon${props.id}`} pinned={props.pinned} size={2} />
            <TaskText text={props.taskText} />
            <Button id={`finishButton${props.id}`} text={props.buttonText} addTask={ false } onClick={() => handleClick()} />
        </div>
    )
}

export default Task