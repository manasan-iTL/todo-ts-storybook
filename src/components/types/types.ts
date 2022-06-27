import React from "react"

export type ButtonProps = {
    text?: string,
    addTask?: boolean,
    onClick?: () => void,
    type?: string
}

export type InputProps = {
    value: string,
    changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type TabProps = {
    text?: string;
    open: boolean;
    changeTab: () => void
}

export type IconProps = {
    id?: string,
    pinned?: boolean,
    size?: number,
    changePinned: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

export type TextProps = {
    class?: string,
    text: string
}

export type PageProps =  {
    items: item[]
    addTaskApi?: () => void,
    onFinishTask: () => void,
    finishTaskApi?: () => void
}

export type item = {
    id: string,
    task: string,
    finish: boolean,
    pinned: boolean
}