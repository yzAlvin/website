import {url} from "./next.config";
import {Project} from "./types/types";

export const fetchData = async <T,>(path: string) => {
    const response = await fetch(`${url}/api/${path}`)
    const data: T = (await response.json()).data
    return data
}

export const buildUrl = (project: Project, width: Number, height: Number) =>
    `https://res.cloudinary.com/alvinzhao/image/upload/w_${width},h_${height},c_fill/${project.attributes.cover?.data.attributes.hash}`
