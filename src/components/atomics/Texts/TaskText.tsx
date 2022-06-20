import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type Props = {
    text: string;
    class?: string;
}

const TaskText: React.FC<Props> = (props) => {
    return (
        <p className={`${props.class}`} >{props.text}</p>
    )
}

export default TaskText