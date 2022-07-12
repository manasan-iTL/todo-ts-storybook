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

    console.log(result)
    // useEffect(() => {
    //     FilterTodosByTab(todos,open)
    // }, [open])
    // // タブが進行中か完了かによってタスクをソートする
    // const sortTaskList = props.items.filter((item) => props.open === item.finish)

    // // pinned（ピンがつけられているか）によって順番を変える
    // const piinedTasks = sortTaskList.filter((order) => order.pinned)
    // const unPinnedTasks = sortTaskList.filter((order) => !(order.pinned))

    // // ピン付けされたタスク→そうでないタスクの順で更新を行い、ピン付けされたタスクが上位に表示できるようにする
    // const result = [...piinedTasks, ...unPinnedTasks]
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