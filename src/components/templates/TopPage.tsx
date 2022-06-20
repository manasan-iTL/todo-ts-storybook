import React from "react";
import { AddTaskButton } from "../";
import { Header, Main } from "../organisms";

const TopPage: React.FC<{}> = (props) => {

    const onClick = () => {
        console.log("Click")
    }

    return (
        <div>
            <Header />
            <Main />
            <AddTaskButton text="追加" class="addTask" onClick={onClick}/>
        </div>
    )
}

export default TopPage