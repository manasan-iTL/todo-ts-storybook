import axios, {AxiosResponse} from "axios"
import { item } from "../types/types"

const url = "https://wjn8pv712f.execute-api.ap-northeast-1.amazonaws.com/dev/tasks"

export const fetchApi = async () => {
    const response = await axios.get(url).then((res: AxiosResponse<item[]>) => res.data)
    return response
}