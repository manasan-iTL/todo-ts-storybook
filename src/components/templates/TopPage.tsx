import React from "react";
import { Header, Main } from "../";
import { InputProps, IconProps,TabProps, item } from '../types/types'

type Props = InputProps & IconProps & TabProps & {
    items: item[]
    onAddTask: (e: React.FormEvent<HTMLFormElement>) => void,
    onFinishTask: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const TopPage: React.FC<Props> = (props) => {


    return (
        <div style={{backgroundColor: "#FCFCF1"}}>
            <Header text="TODO管理アプリ"/>
            <Main 
                items={props.items}
                value={props.value} 
                open = {props.open}
                changeInputValue = {(e) => props.changeInputValue(e)}    
                onAddTask = {(e) => props.onAddTask(e)} 
                onFinishTask = {(e) => props.onFinishTask(e)}
                changeTab = {props.changeTab}
                changePinned = {(e) => props.changePinned(e)}/>
                

        </div>
    )
}

export default TopPage