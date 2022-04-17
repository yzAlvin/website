import ReactMarkdown from "react-markdown";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Project, Tag} from "../../types/types";
import Link from "next/link";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import {fetchData} from "../../utils";

const Projects = ({project}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log('ss', project.attributes.tags)
    return (
        <div>
            <h1>{project.attributes.title}</h1>
            <ReactMarkdown>{project.attributes.description}</ReactMarkdown>
            {project.attributes.repoLink && <Link href={project.attributes.repoLink}><a><FiGithub/></a></Link>}
            {project.attributes.projectLink &&
                <Link href={project.attributes.projectLink}><a><FiExternalLink/></a></Link>}
            <h4>Tags</h4>
            <ul>
                {project.attributes.tags.data.map((t: Tag) => <li key={t.attributes.tag}>{t.attributes.tag}</li>)}
            </ul>
        </div>
    )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
    const allProjectsData = await fetchData<Project[]>("projects")
    const projectResponse: Project = allProjectsData.find((p: Project) => p.attributes.slug === context.params!.slug)!;

    const project: Project = await fetchData<Project>(`projects/${projectResponse.id}?populate=*`)

    return {
        props: {project},
        revalidate: 1,
    };
};

export async function getStaticPaths() {
    const projects = await fetchData<Project[]>("projects")

    const paths = projects.map((item) => ({
        params: {slug: item.attributes.slug},
    }));

    return {paths, fallback: false};
}