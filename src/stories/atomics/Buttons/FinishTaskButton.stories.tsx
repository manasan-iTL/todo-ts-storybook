import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { FinishTaskButton } from "../../../components/";

export default {
    title: 'Buttons/FinishTask',
    componet: FinishTaskButton
} as ComponentMeta <typeof FinishTaskButton>

const Template: ComponentStory<typeof FinishTaskButton> = (args) => <FinishTaskButton {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Finish',
    class: 'finishTask'
}
