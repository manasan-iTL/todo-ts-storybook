import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { item } from "../../components/types/types";
// import { fetchApi } from "../../components/utility/Fetchap";
export interface TodoState {
    todos: item[]
}

const initialState:TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTask: (state, action: PayloadAction<item>) => {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        },

        changePinned: (state, action: PayloadAction<item>) => {
            return {
                ...state,
                todos: state.todos.map((todo) => { 
                  if (todo.id !== action.payload.id) {
                    return todo
                  }
                  return {
                    ...todo,
                    pinned: !todo.pinned
                  }
                })
            }
        },

        finishTask: (state, action: PayloadAction<item>) => {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.finish !== action.payload.finish) {
                        return todo
                    }
                    return {
                        ...todo,
                        finish: !todo.finish
                    }
                })
            }
        }

    }
})

export const {addTask, changePinned, finishTask} = todoSlice.actions
export default todoSlice.reducer