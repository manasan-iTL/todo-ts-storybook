import { addTodoCreator, fetchTodosCreator, modifyTodoCreator } from "../types"

export const INITIAL = "INITIAL"
export const ADD = "ADD"
export const MODIFY = "FINISH" || "PINNED"

export const fetchTodosAction: fetchTodosCreator = (todoList) => {
    return {
        type: INITIAL,
        payload : todoList
    }
}
export const addTodoAction: addTodoCreator = (todo) => {
    return {
        type: ADD,
        payload: todo
    }
} 
export const modifyTodoAction: modifyTodoCreator = (params) => {

    return params.key === "pinned"? 
      {type: "PINNED", payload:params} : {type: "FINISH", payload:params}
}