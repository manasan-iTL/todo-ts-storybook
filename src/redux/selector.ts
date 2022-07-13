import {Todo, filter} from '../redux/types'

export const FilterTodosByTab = (
    todos: Todo[],
    finish: filter
) : Todo[] => {
    if (finish.open) {
        // 進行中か完了しているかでタスクを分ける
        const sortTaskList = todos.filter((todo) => todo.finish)
        // ピン付けされたタスクを上位に表示させるために、別々に抽出して並び替えている。
        const piinedTasks = sortTaskList.filter((order) => order.pinned)
        const unPinnedTasks = sortTaskList.filter((order) => !(order.pinned))
        return [...piinedTasks, ...unPinnedTasks]
    } else {
        const sortTaskList = todos.filter((todo) => !todo.finish)
        const piinedTasks = sortTaskList.filter((order) => order.pinned)
        const unPinnedTasks = sortTaskList.filter((order) => !(order.pinned))
        return [...piinedTasks, ...unPinnedTasks]
    }
}