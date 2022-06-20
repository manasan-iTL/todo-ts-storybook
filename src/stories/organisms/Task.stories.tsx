import React from "react";
import { action } from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { Task } from "../../components";
import * as FinishTask from '../atomics/Buttons/FinishTaskButton.stories'

export default {
    title: 'Task/Task',
    component: Task,
    parameters: {
        backgrounds: {
          values: [
            { name: "pale", value: "#FDECCA" },
            { name: "green", value: "#0f0" },
            { name: "blue", value: "#00f" },
          ],
        },
      },
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const task = Template.bind({})
task.args = {
    finishButton: [
        {...FinishTask, text: 'Finish', class: 'finishTask' }
    ]
}