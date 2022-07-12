import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { modifyTodo } from "../../../redux/slices/todos/todoSlice";
import {IconProps} from '../../types/types'

// type Props = {
//     pinned: boolean,
//     size?: number,
//     changePinned: () => void
// }

const StarIcon: React.FC<IconProps> = (props) => {

    const dispatch: AppDispatch = useDispatch()
    const changePinned = (e: React.MouseEvent<HTMLSpanElement>) => {
        return dispatch(modifyTodo({todoId: e.currentTarget.id.slice(-1), keyValue: "pinned", taskValue: props.pinned}))
    }

    return (
        <IconContext.Provider value={{color: (props.pinned? 'yellow': "gray"), size: props.size + 'rem'}}>
            <span id={props.id} onClick={(e) => changePinned(e) }>
                < MdOutlineStarPurple500 style={{cursor: "pointer"}}/>
            </span>   
        </IconContext.Provider>
    )
}

export default StarIcon