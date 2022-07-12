import React from "react";
import { ChangeTaskGroup, InputGroup } from "../../";
import styled from './Main.module.css'

const Main: React.FC = () => {
    return (
        <main className={styled.main}>
            <InputGroup/>
            <ChangeTaskGroup />
        </main>
    )
}

export default Main