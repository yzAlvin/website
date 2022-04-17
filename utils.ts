import {url} from "./next.config";

export const fetchData = async <T,>(path: string) => {
    const response = await fetch(`${url}/api/${path}`)
    const data: T = (await response.json()).data
    return data
}