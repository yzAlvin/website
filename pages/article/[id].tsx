import {url} from "../../next.config"
import ReactMarkdown from "react-markdown";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Article} from "../../types/types";
import {fetchData} from "../../utils";

const Article = ({article}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>{article.attributes.title}</h1>
            <ReactMarkdown>{article.attributes.body}</ReactMarkdown>
        </div>
    )
}

export default Article

export const getStaticProps: GetStaticProps = async (context) => {
    const article = await fetchData<Article>(`articles/${context.params!.id}`)

    return {
        props: { article },
        revalidate: 1,
    };
};
export async function getStaticPaths() {
    const articles = await fetchData<Article[]>("articles")

    const paths = articles.map((item) => ({
        params: { id: item.id.toString() },
    }));

    return { paths, fallback: false };
}