import {Project} from "../types/types";
import {useEffect, useState} from "react";
import {fetchData} from "../utils";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const fetchMostRecentProject = async () => {
    const projects = await fetchData<Project[]>("projects")
    return projects.pop()
}

export const MostRecentProject = () => {
    const [project, setProject] = useState<Project>()
    useEffect(() => {
        fetchMostRecentProject().then(p =>
            setProject(p)
        )
    }, [])

    return project ? <>
            <h5 className='has-text-light title is-5'>{project.attributes.title}</h5>
            <ReactMarkdown className='markdown-body has-text-light subtitle is-6 mb-2'>{project.attributes.description}</ReactMarkdown>
            <Link href={`/project/${project.attributes.slug}`}><a className="has-text-primary">View</a></Link>
        </>
        :
        <p className='has-text-primary'>Fetching most recent project...</p>
}