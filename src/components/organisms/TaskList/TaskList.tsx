import React, {useEffect} from "react";
import Task from "../Task/Task";
import styled from './TaskList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { FilterTodosByTab } from "../../../redux/selector";
import { fetchAllTodos } from "../../../redux/slices/todos/todoSlice";

const TaskList: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const open = useSelector((state: RootState) => state.filter)
    const todos = useSelector((state: RootState) => state.todo.todos)
    const result = FilterTodosByTab(todos, open)

    useEffect(() => {
        dispatch(fetchAllTodos())
    }, [dispatch])

    return (
        <div className={styled.taskList}>
            {
                result.map(item => 
                          <Task id={item.id} 
                                key={item.id}  
                                taskText={item.task} 
                                buttonText = {open? "終了": "取り消す" }
                                pinned={item.pinned} /> )
            }

        </div>
    )
}

export default TaskList