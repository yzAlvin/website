import ReactMarkdown from "react-markdown";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Project, Tag as TagType} from "../../types/types";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import {buildUrl, fetchData} from "../../utils";
import Image from "next/image";
import {IconLink} from "../../components/IconLink";
import Tag from "../../components/Tag";
import Nav from "../../components/Nav";

const ProjectLinks = (project: InferGetStaticPropsType<typeof getStaticProps>) => <>
    {project.attributes.repoLink &&
<IconLink link={project.attributes.repoLink}><FiGithub size={50}/></IconLink>}
    {project.attributes.projectLink &&
<IconLink link={project.attributes.projectLink}><FiExternalLink size={50}/></IconLink>}
        </>

const Projects = ({project}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (<>
            <Nav/>
            <div className="has-text-light has-text-centered has-background-info p-5">
                <p className="is-size-1">Project pages are under construction!</p>
                <p className="is-size-2">I plan to write more in depth about each project beyond the short descriptions, but who knows when I will actually do it :)</p>
            </div>
            <div>
                <h1 className="has-text-light title is-1 has-text-centered">{project.attributes.title}</h1>
                <div className="project-image"><ProjectLinks {...project}/></div>
                <div className="project-image">
                {project.attributes.cover?.data?.attributes.url && <Image width={600} height={300}
                                                                          src={buildUrl(project, 600, 300)}
                                                                          alt={project.attributes.cover.data.attributes.alternativeText}/>}
                </div>
                <ReactMarkdown
                    className="markdown-body blog-body has-text-light">{project.attributes.description}</ReactMarkdown>
                <h4 className="has-text-light mb-2 title is-4">Tags</h4>
                {project.attributes.tags.data.map((tag: TagType) => <Tag
                    key={tag.id} {...tag}/>)}
            </div>
        </>

    )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
    const allProjectsData = await fetchData<Project[]>("projects")
    const projectResponse: Project = allProjectsData.find((p: Project) => p.attributes.slug === context.params!.slug)!;

    const project: Project = await fetchData<Project>(`projects/${projectResponse.id}?populate=*`)

    return {
        props: {project}, revalidate: 1,
    };
};

export async function getStaticPaths() {
    const projects = await fetchData<Project[]>("projects")

    const paths = projects.map((item) => ({
        params: {slug: item.attributes.slug},
    }));

    return {paths, fallback: false};
}