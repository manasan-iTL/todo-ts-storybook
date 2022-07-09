import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
    open: boolean
}

const initialState: FilterState = {
    open: false
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changePinned: (state, action:PayloadAction<FilterState>) => {
            return {
                ...state,
                open: !state.open
            }
        }
    }
})

export const {changePinned} = filterSlice.actions
export default filterSlice.reducer