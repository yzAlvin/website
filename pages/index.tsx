import type {InferGetStaticPropsType, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {AboutMe, Article} from "../types/types";
import About from "../components/About";
import {fetchData} from "../utils";
import Nav from "../components/Nav";

export const getStaticProps = async () => {
    const about = await fetchData<AboutMe>("about-me")

  return {
    props: {
        about,
    },
    revalidate: 1,
  };
};

const Home = ({ about }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Alvin Zhao</title>
      </Head>
        <header>
            <Nav/>
        </header>
      <h1>Alvin Zhao</h1>
       <About data={about}/>
    </div>
  );
};

export default Home;
