import { filterReducer } from "../types";
import { OPEN } from "./filterAction";

const reducer: filterReducer = (state, action) => {
    switch (action.type) {
        case OPEN:
            return {
                ...state,
                open: !state.open
            }
        default:
            return state
    }
}

export default reducer