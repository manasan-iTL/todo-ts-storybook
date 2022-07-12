import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todos/todoSlice'
import filterReducer from './slices/filters/filterSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch