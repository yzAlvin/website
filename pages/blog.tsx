import Link from "next/link";
import {fetchData} from "../utils";
import {Article} from "../types/types";
import {InferGetStaticPropsType} from "next";

export const getStaticProps = async () => {
    const list = await fetchData<Article[]>("articles")

    return {
        props: {
            list,
        }, revalidate: 1,
    };
};

const Blog = ({list}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (<>
        <h1>Blog</h1>
        <ul>
            {list.map((item) => (<li key={item.id}>
                <Link href={`/article/${item.id}`}>
                    <a>{item.attributes.title}</a>
                </Link>
                <p>{item.attributes.blurb}</p>
            </li>))}
        </ul>
    </>)
}

export default Blog;