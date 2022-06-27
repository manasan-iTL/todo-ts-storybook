import { IconContext } from "react-icons";
import { MdOutlineStarPurple500 } from 'react-icons/md'
import {IconProps} from '../../types/types'

// type Props = {
//     pinned: boolean,
//     size?: number,
//     changePinned: () => void
// }

const StarIcon: React.FC<IconProps> = (props) => {
    
    return (
        <IconContext.Provider value={{color: (props.pinned? 'yellow': "gray"), size: props.size + 'rem'}}>
            <span id={props.id} onClick={(e) => props.changePinned(e) }>
                < MdOutlineStarPurple500 style={{cursor: "pointer"}}/>
            </span>   
        </IconContext.Provider>
    )
}

export default StarIcon