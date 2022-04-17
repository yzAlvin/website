import type {InferGetStaticPropsType, NextPage} from "next";
import Head from "next/head";
import { url } from "../next.config";
import Link from "next/link";
import {AboutMe, Article} from "../types/types";
import About from "../components/about";

export const getStaticProps = async () => {
  const data = await fetch(`${url}/api/articles`);
  const list: Article[] = (await data.json()).data;

    const res = await fetch(`${url}/api/about-me`);
    const about: AboutMe = (await res.json()).data;

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
