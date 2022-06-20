import React from "react";
import { action } from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { AddTaskButton } from "../../../components";

export default {
    title: 'Buttons/AddTaskButton',
    component: AddTaskButton,
} as ComponentMeta<typeof AddTaskButton>

// export const basic: ComponentStory<typeof AddTaskButton> = () => <AddTaskButton text="追加"/>

const Template: ComponentStory<typeof AddTaskButton> = (args) => < AddTaskButton {...args} />

export const Default = Template.bind({}) 
Default.args = {
    text: "追加",
    class: "addTask",
    onClick: action("Clicked")
}

export const Light = Template.bind({})
Light.args = {
    text:"追加",
    class: "light",
    onClick: action("Clicked")
}

export const Line = Template.bind({})
Line.args = {
    text: '追加',
    class: 'line',
    onClick: action("Clicked")
}