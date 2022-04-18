import Link from "next/link";
import {fetchData} from "../utils";
import {Article, Tag} from "../types/types";
import {InferGetStaticPropsType} from "next";
import Nav from "../components/Nav";

export const getStaticProps = async () => {
    const list = await fetchData<Article[]>("articles?populate=*")

    return {
        props: {
            list,
        }, revalidate: 1,
    };
};

const Blog = ({list}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (<>
        <Nav/>
        <h1 className="has-text-light title is-1 has-text-centered">Blog</h1>
        <ul>
            {list.map((item) => (<BlogPost {...item} key={item.id}/>))}
        </ul>
    </>)
}

export default Blog;

const BlogPost = (item: Article) => <div className="card blog-post has-background-grey-darker has-text-light mb-5 p-3">
    <Link href={`/article/${item.id}`}>
        <a>
            <p className="is-size-7 has-text-primary">{new Date(item.attributes.publishedAt).toDateString()}</p>
            <h2 className="title is-3 has-text-light is-underlined">{item.attributes.title}</h2>
            <p className="content has-text-light">{item.attributes.blurb}</p>
            {item.attributes.tags.data && item.attributes.tags.data.map((tag: Tag) => <span key={tag.id}
                                                                                            className="tag has-text-primary has-background-black-ter m-1">
                    {tag.attributes.tag}
                </span>)}
        </a>
    </Link>
</div>
