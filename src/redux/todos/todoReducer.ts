import { todoReducer } from "../types";
import { INITIAL, ADD, MODIFY } from "./todoAction";

const reducer:todoReducer = (state, action) => {
    switch(action.type) {
        case INITIAL:
            return {
                todos:[...action.payload]
            }
        case ADD:
            return {
                todos: [...state.todos, action.payload]
            }
        case MODIFY && "FINISH":
            return {
                todos: state.todos.map((todo) => 
                    todo.id === action.payload.id ? {...todo, finish: !todo.finish} : todo )
            }
        case MODIFY && "PINNED":
            return {
                todos: state.todos.map((todo) => 
                  todo.id === action.payload.id ? {...todo, pinned: !todo.pinned} : todo)
            }
        default:
            return state
    }
}

export default reducer