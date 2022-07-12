import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { item } from "../../../components/types/types";
import { TodoState } from "../../types";
import { RootState } from "../../store";
import { fetchTodos, modifyTodoApi, sendTodoApi } from "../../../api/FetchApi";


export const fetchAllTodos = createAsyncThunk<TodoState> (
    "todo/fetchAllTodos",
    async () => {
        const response = await fetchTodos()
        const {Items} = response
        return {todos: Items}
    }
)

export const sendTodo = createAsyncThunk<item, string, {state: RootState} >(
    "todo/sendTask",
    async (todo, thunkapi) => {
        const { todos } = thunkapi.getState().todo

        // タスクの生成
        const newTodo: item = {
            id: String(todos.length + 1),
            task: todo,
            finish: false,
            pinned: false
        }

        await sendTodoApi(newTodo)
        return newTodo
    }
)

export const modifyTodo = createAsyncThunk <{id: string, key:string, value: boolean}, {todoId: string, keyValue: string, taskValue: boolean}, {state: RootState} > (
    "todo/modifyTodo",
    async ({todoId, keyValue, taskValue}) => {
        await modifyTodoApi(todoId, keyValue, taskValue)
        return {
            id: todoId,
            key: keyValue,
            value: taskValue
        }
    }
)


const initialState:TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
            state.todos = action.payload.todos
        })
        builder.addCase(sendTodo.fulfilled, (state, action) => {
            state.todos = [
                ...state.todos,
                action.payload
            ]
        })
        builder.addCase(modifyTodo.fulfilled, (state, action) => {
            const todoItems = state.todos.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo
                }
                if (action.payload.key === 'pinned') {
                    return {
                        ...todo,
                        pinned: !todo.pinned
                    }
                } else {
                    return {
                        ...todo,
                        finish: !todo.finish
                    }
                }
            })
            state.todos = todoItems
        })
    }
})

export default todoSlice.reducer