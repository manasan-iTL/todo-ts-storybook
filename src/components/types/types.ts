import React from "react"

export type ButtonProps = {
    text?: string,
    id?: string,
    addTask?: boolean,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    type?: string
}

export type InputProps = {
    value: string,
    changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type TabProps = {
    text?: string;
    open: boolean
}

export type IconProps = {
    id: string,
    pinned: boolean,
    size?: number,
}

export type TextProps = {
    class?: string,
    text: string
}

export type PageProps =  {
    addTaskApi?: () => void,
    finishTaskApi?: () => void
}

export type item = {
    id: string,
    task: string,
    finish: boolean,
    pinned: boolean
}