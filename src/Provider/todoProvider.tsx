import React, { useEffect, useReducer } from "react";
import { TodoList ,todoAction} from "../redux/types";
import TodoReducer from '../redux/todos/todoReducer'
import {fetchTodos, sendTodoApi, modifyTodoApi} from '../api/fetchApi'
import {fetchTodosAction, addTodoAction, modifyTodoAction} from '../redux/todos/todoAction'

type Props = {
    children: React.ReactNode
}

export const TodoContext = React.createContext({} as {
    todoState: TodoList,
    todoDispatch: React.Dispatch<todoAction>,
    addTodo: (value: string) => Promise<void>,
    modifyTodo: (params: {id:string, key:string, value: boolean}) => Promise<void>
})

export const TodoProvider: React.FC<Props> = (props) => {

    const [todoState, todoDispatch] = useReducer(TodoReducer, {todos: []})

    useEffect(() => {
        const allTodos = async() => {
            const response = await fetchTodos()
            const {Items} = response
            todoDispatch(fetchTodosAction(Items))
        }
        allTodos()
    }, [])

    const addTodo = async(taskValue: string ) => {
        const newTodo = {
            id: String(todoState.todos.length + 1),
            task: taskValue,
            pinned: false,
            finish: false
        }
        await sendTodoApi(newTodo)
        return todoDispatch(addTodoAction(newTodo))
    }

    const modifyTodo = async({id,key,value} : {id:string, key:string, value: boolean}) => {
        await modifyTodoApi(id, key, value)
        return todoDispatch(modifyTodoAction({id:id, key: key}))
    }

    return (
        <TodoContext.Provider value={{todoState, todoDispatch, addTodo, modifyTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider