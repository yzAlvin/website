import type {InferGetStaticPropsType, NextPage} from "next";
import Head from "next/head";
import { url } from "../next.config";
import Link from "next/link";
import {AboutMe, Article} from "../types/types";
import About from "../components/about";

const fetchData = async <T,>(path: string) => {
    const response = await fetch(`${url}/api/${path}`)
    const data: T = (await response.json()).data
    return data
}

export const getStaticProps = async () => {
    const list = await fetchData<Article[]>("articles")
    const about = await fetchData<AboutMe>("about-me")

  return {
    props: {
      list,
        about,
    },
    revalidate: 1,
  };
};

const Home = ({ list, about }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Alvin Zhao</title>
      </Head>
      <h1>Alvin Zhao</h1>
       <About data={about}/>
        <h2>Blog Posts</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link href={`/article/${item.id}`}>
              <a>{item.attributes.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
