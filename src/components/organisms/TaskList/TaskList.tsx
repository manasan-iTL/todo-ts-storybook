import React, { useContext } from "react";
import { FilterContext } from "../../../Provider/filterProvider";
import { TodoContext } from "../../../Provider/todoProvider";
import { FilterTodosByTab } from "../../../redux/selector";
import Task from "../Task/Task";
import styled from './TaskList.module.css'

const TaskList: React.FC = () => {

    const {todoState} = useContext(TodoContext)
    const {filterState} = useContext(FilterContext)
    const result = FilterTodosByTab(todoState.todos, filterState)

    return (
        <div className={styled.taskList}>
            {
                result.map(item => 
                          <Task id={item.id} 
                                key={item.id}  
                                taskText={item.task} 
                                buttonText = {filterState.open? "取り消す": "終了" }
                                pinned={item.pinned} /> )
            }

        </div>
    )
}

export default TaskList