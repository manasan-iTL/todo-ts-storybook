import React from "react";
import { InputTask, Button } from '../../'
import styled from './InputGroup.module.css'
import {InputProps} from '../../types/types'

type Props = InputProps & {
    onAddTask: (e: React.FormEvent<HTMLFormElement>) => void,
}

const InputGroup: React.FC<Props> = (props) => {


    return (
        <form action="" className={styled.form} onSubmit={(e) => props.onAddTask(e)}>
            <dl className={styled.inputGroup}>
                <dt className={styled.formItem}>
                    <InputTask value={props.value} changeInputValue={(e) => props.changeInputValue(e)}/>
                </dt>
                <dd className={styled.formItem}>
                    <Button text="追加" addTask={true} type="submit"/>
                </dd>
            </dl>
        </form>
    )
}

export default InputGroup