import Link from "next/link";
import {fetchData} from "../utils";
import {Project} from "../types/types";
import {InferGetStaticPropsType} from "next";
import Image from 'next/image'
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";
import Tag from "../components/Tag";

export const getStaticProps = async () => {
    const list = await fetchData<Project[]>("projects?populate=*")

    return {
        props: {
            list,
        }, revalidate: 1,
    };
};

const buildUrl = (project: Project, width: Number, height: Number) =>
    `https://res.cloudinary.com/alvinzhao/image/upload/w_${width},h_${height},c_fill/${project.attributes.cover?.data.attributes.hash}`

const Projects = ({list}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (<>
        <Nav/>
        <h1 className="has-text-light title is-1 has-text-centered">Projects</h1>
        {list.map((item) => (<div className="card blog-post-card has-background-grey-darker mb-5 p-3" key={item.id}>
            <Link href={`/project/${item.attributes.slug}`}>
                <a>
                    <div className="columns">
                        <div className="column">
                    {item.attributes.cover?.data?.attributes.url && <Image width={500} height={150}
                                                                            src={buildUrl(item, 500, 150)}
                                                                           alt={item.attributes.cover.data.attributes.alternativeText}/>}
                        </div>
                        <div className="column">
                    <p className="title is-5 has-text-light">{item.attributes.title}</p>
                    <ReactMarkdown className="subtitle is-6 has-text-light markdown-body">{item.attributes.description}</ReactMarkdown>
                    {item.attributes.tags.data && item.attributes.tags.data.map((tag) => <Tag key={tag.id} {...tag}/>)}
                        </div>
                    </div>
                </a>
            </Link>
        </div>))}
    </>)
}

export default Projects;