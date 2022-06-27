import React from "react";
import { TitleText } from '../../'

type Props = {
    text: string,
}

const Header: React.FC<Props> = (props) => {
    return (
        <header>
            <TitleText text={props.text} />
        </header>
    )
}

export default Header