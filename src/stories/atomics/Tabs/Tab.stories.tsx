import React from "react";
import { action } from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { Tab } from "../../../components/";

export default {
    title: 'Tabs/Tab',
    component: Tab,
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />

export const ActiveTab = Template.bind({})
ActiveTab.args = {
    text: '完了',
    open: true,
    // onClick: action("Clicked")
}

export const DisActiveTab = Template.bind({})
DisActiveTab.args = {
    text: '未完了',
    open: false,
    // onClick: action("Clicked")
}