import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { TodoContext } from "../../../Provider/todoProvider";
import {IconProps} from '../../types/types'

const StarIcon: React.FC<IconProps> = (props) => {

    const {modifyTodo} = useContext(TodoContext)
    const changePinned = (e:React.MouseEvent<HTMLSpanElement>) => {
        
        //id末尾数字を抽出する
        const id = String(e.currentTarget.id.replace(/[^0-9]/g, ''))
        const params = {
            id: id,
            key: "pinned",
            value: !props.pinned
        }
        return modifyTodo(params)
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