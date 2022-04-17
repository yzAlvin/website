import {url} from "../../next.config"
import ReactMarkdown from "react-markdown";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Project} from "../../types/types";
import Link from "next/link";
import {FiExternalLink, FiGithub} from "react-icons/fi";

const Projects = ({project}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>{project.attributes.title}</h1>
            <ReactMarkdown>{project.attributes.description}</ReactMarkdown>
            <Link href={project.attributes.repoLink}><a><FiGithub /></a></Link>
            <Link href={project.attributes.projectLink}><a><FiExternalLink/></a></Link>
        </div>
    )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
    const allProjects = await fetch(`${url}/api/projects`)
    const allProjectsData = (await allProjects.json()).data;
    const projectResponse: Project = allProjectsData.find((p: Project) => p.attributes.slug === context.params!.slug);

    const data = await fetch(`${url}/api/projects/${projectResponse.id}`);
    const project: Project = (await data.json()).data;

    return {
        props: { project },
        revalidate: 1,
    };
};
export async function getStaticPaths() {
    const res = await fetch(`${url}/api/projects`);
    const projects: Project[] = (await res.json()).data;

    const paths = projects.map((item) => ({
        params: { slug: item.attributes.slug },
    }));

    return { paths, fallback: false };
}