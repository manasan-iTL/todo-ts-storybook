import { filterActionCreator } from "../types"
// Action
export const OPEN = "OPEN"

// Action Creator
export const changeTabAction: filterActionCreator = () => {
    return {
        type: OPEN,
        payload: {}
    }
}

