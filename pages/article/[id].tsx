import ReactMarkdown from "react-markdown";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Article} from "../../types/types";
import {fetchData} from "../../utils";
import Nav from "../../components/Nav";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import 'github-markdown-css'

const Article = ({article}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <>
            <Nav/>
            <div>
                <h1 className="has-text-light title is-1 has-text-centered">{article.attributes.title}</h1>
                <ReactMarkdown className='markdown-body blog-body' components={{code: CodeBlock}}
                               >
                    {article.attributes.body}
                </ReactMarkdown>
            </div>
        </>
}

export default Article

export const getStaticProps: GetStaticProps = async (context) => {
    const article = await fetchData<Article>(`articles/${context.params!.id}`)

    return {
        props: {article}, revalidate: 1,
    };
};

export async function getStaticPaths() {
    const articles = await fetchData<Article[]>("articles")

    const paths = articles.map((item) => ({
        params: {id: item.id.toString()},
    }));

    return {paths, fallback: false};
}

// @ts-ignore
const CodeBlock = (code) => {
    const match = /language-(\w+)/.exec(code.className || '')
    return !code.inline && match ? (<SyntaxHighlighter
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            {...(code.props)}
        >
            {String(code.children).replace(/\n$/, '')}
        </SyntaxHighlighter>)

        : (<code className={code.className} {...(code.props)}>
            {code.children}
        </code>)
}
