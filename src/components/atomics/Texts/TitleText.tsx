import React from "react";
import { TextProps } from "../../types/types";
// type Props = {
//     text: string,
// }

const TitleText: React.FC<TextProps> = (props) => {
    return (
        <h1> {props.text} </h1>
    )
}

export default TitleText