import type {InferGetStaticPropsType, NextPage} from "next";
import Head from "next/head";
import { url } from "../next.config";
import Link from "next/link";
import {Article} from "../types/types";

export const getStaticProps = async () => {
  const data = await fetch(`${url}/api/articles`);
  const list: Article[] = (await data.json()).data;

  return {
    props: {
      list,
    },
    revalidate: 1,
  };
};

const Home = ({ list }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Welcome home!</h1>
      <p>{url}</p>
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
