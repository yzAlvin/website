import Link from "next/link";
import {fetchData} from "../utils";
import {Project} from "../types/types";
import {InferGetStaticPropsType} from "next";
import Image from 'next/image'
import Nav from "../components/Nav";

export const getStaticProps = async () => {
    const list = await fetchData<Project[]>("projects?populate=*")

    return {
        props: {
            list,
        }, revalidate: 1,
    };
};

const Projects = ({list}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (<>
        <Nav/>
        <h1 className="has-text-light title is-1 has-text-centered">Projects</h1>
        <ul>
            {list.map((item) => (<li key={item.id}>
                <Link href={`/project/${item.attributes.slug}`}>
                    <a>{item.attributes.title}</a>
                </Link>
                {item.attributes.cover?.data?.attributes.url && <Image width={100} height={100} src={item.attributes.cover.data.attributes.formats.thumbnail.url} alt={item.attributes.cover.data.attributes.alternativeText}/>}
            </li>))}
        </ul>
    </>)
}

export default Projects;