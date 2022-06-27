import React from "react";
import { ChangeTaskGroup, InputGroup } from "../../";
import styled from './Main.module.css'
import { InputProps, IconProps, TabProps, item } from '../../types/types'
type Props = InputProps & IconProps & TabProps & {
    items: item[]
    onAddTask: (e: React.FormEvent<HTMLFormElement>) => void,
    onFinishTask: () => void
}

const Main: React.FC<Props> = (props) => {
    return (
        <main className={styled.main}>
            <InputGroup onAddTask={(e) => props.onAddTask(e)} value={props.value} changeInputValue={(e) => props.changeInputValue(e)}/>
            <ChangeTaskGroup open={props.open} items={props.items} onFinishTask={props.onFinishTask} changeTab={props.changeTab} changePinned={(e) => props.changePinned(e)}/>
        </main>
    )
}

export default Main