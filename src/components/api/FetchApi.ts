import axios, {AxiosResponse} from "axios"
import { item } from "../types/types"

const url = "https://wjn8pv712f.execute-api.ap-northeast-1.amazonaws.com/dev/tasks"

export const fetchTodos = async () => {
    const response = await axios.get(url)
    return response
}

export const modifyTodo = async (taskId: string, taskKey: string, taskValue: string | boolean) => {
    const response = await axios.patch(url, {
        id: taskId,
        key: taskKey,
        value: taskValue
    })
    return response
}