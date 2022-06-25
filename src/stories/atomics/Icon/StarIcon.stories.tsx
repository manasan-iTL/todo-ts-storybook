import { action } from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { StarIcon } from "../../../components/";

export default {
    title: 'Icons/staricon',
    componet: StarIcon
} as ComponentMeta <typeof StarIcon>

const Template: ComponentStory<typeof StarIcon> = (args) => <StarIcon {...args} />

export const Default = Template.bind({})
Default.args = {
    pinned: true,
    size: 2,
    changePinned: action("Trueになる")
}

export const Pinned = Template.bind({})
Pinned.args = {
    pinned: false,
    changePinned: action("Falseになる")
}