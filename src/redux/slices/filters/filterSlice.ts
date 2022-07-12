import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../../types";


const initialState: FilterState = {
    open: false
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changePinned: (state) => {
            return {
                ...state,
                open: !state.open
            }
        }
    }
})

export const {changePinned} = filterSlice.actions
export default filterSlice.reducer