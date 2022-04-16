import {url} from "../../next.config"
import ReactMarkdown from "react-markdown";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Article} from "../../types/types";

const Article = ({article}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>{article.attributes.Title}</h1>
            <ReactMarkdown>{article.attributes.Body}</ReactMarkdown>
        </div>
    )
}

export default Article

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await fetch(`${url}/api/articles/${context.params!.id}`);
    const article: Article = (await data.json()).data;

    return {
        props: { article },
        revalidate: 1,
    };
};
export async function getStaticPaths() {
    const res = await fetch(`${url}/api/articles`);
    const articles: Article[] = (await res.json()).data;

    const paths = articles.map((item) => ({
        params: { id: item.id.toString() },
    }));

    return { paths, fallback: false };
}