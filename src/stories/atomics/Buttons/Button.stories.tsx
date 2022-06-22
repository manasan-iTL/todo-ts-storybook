import React from "react";
import { action } from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { Button } from "../../../components/";

export default {
    title: 'Buttons/button',
    componet: Button
} as ComponentMeta <typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const addtaskbutton = Template.bind({})
addtaskbutton.args = {
    text: "Add",
    addTask: true,
    onClick: action("Clicked")
}