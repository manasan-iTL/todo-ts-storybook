// ActionCreatorの型定義
export type filterActionCreator = () => filterAcionReturn

export type fetchTodosCreator = (todoList: Todo[]) => fetchTodosReturn

export type addTodoCreator = (todo: Todo) => addTodoReturn

export type modifyTodoCreator = (params: modifyTodo) => modifyTodoReturn

// Stateの型定義
export type TodoList = {
    todos: Todo[]
}

export type filter = {
    open: boolean
}

// Actionの型定義
export interface filterAcionReturn {
    type: "OPEN",
    payload: {}
}

export type todoAction = fetchTodosReturn | addTodoReturn | modifyTodoReturn

// Reducerの型定義
export type filterReducer = (state: filter, action: filterAcionReturn) => filter

export type todoReducer = (state: TodoList, action: todoAction) => TodoList

// ActionCreatorの返り値　＝＝　Action

interface fetchTodosReturn {
    type: "INITIAL"
    payload: Todo[]
}

interface addTodoReturn {
    type: "ADD",
    payload: Todo
}

interface modifyTodoReturn {
    type: "FINISH"| "PINNED",
    payload: modifyTodo
}

// その他必要な型
export interface modifyTodo {
    id: string,
    key: string,
    value?: boolean
}

export interface Todo {
    id: string,
    task: string,
    pinned: boolean,
    finish: boolean
}
