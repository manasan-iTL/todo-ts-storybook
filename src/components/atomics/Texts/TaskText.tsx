import React from "react";
import { TextProps } from "../../types/types";
// type Props = {
//     text: string;
//     class?: string;
// }

const TaskText: React.FC<TextProps> = (props) => {
    return (
        <p className={`${props.class}`} >{props.text}</p>
    )
}

export default TaskText