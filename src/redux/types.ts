
export interface item {
    id: string,
    task: string,
    finish: boolean,
    pinned: boolean
}

export interface TodoState {
    todos: item[]
}

export interface FilterState {
    open: boolean
}

export interface RootState {
    todos: item[];
    filter: FilterState
}