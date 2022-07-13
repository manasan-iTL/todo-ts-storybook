import axios from "axios";
import { item } from "../components/types/types";

const url = "https://wjn8pv712f.execute-api.ap-northeast-1.amazonaws.com/dev/tasks"

export const fetchTodos = async () => {
    const response = await axios.get(url)
    return response.data
}

export const sendTodoApi = async (item: item) => {
    await axios.post(url, item)
}

export const modifyTodoApi = async (taskId: string, taskKey: string, taskValue: boolean) => {
    await axios.patch(url, {
        id: taskId,
        key: taskKey,
        value: taskValue
    })
}