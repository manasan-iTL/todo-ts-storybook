import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'
import filterReducer from '../features/filters/filterSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch