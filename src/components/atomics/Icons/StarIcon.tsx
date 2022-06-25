import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdOutlineStarBorderPurple500, MdOutlineStarPurple500 } from 'react-icons/md'

type Props = {
    pinned: boolean,
    size: number,
    changePinned: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const StarIcon: React.FC<Props> = (props) => {

    // const [pinned, setPinned] = useState<boolean>(false)

    // const handleChangePinned = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    //     setPinned(true)
    // }
    
    return (
        <IconContext.Provider value={{color: (props.pinned? 'yellow': "gray"), size: props.size + 'rem'}}>
            <span onClick={(event) => props.changePinned(event) }>
                < MdOutlineStarPurple500 style={{cursor: "pointer"}}/>
            </span>   
        </IconContext.Provider>
    )
}

export default StarIcon