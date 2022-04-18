import type {InferGetStaticPropsType} from "next";
import Head from "next/head";
import {AboutMe} from "../types/types";
import About from "../components/About";
import {fetchData} from "../utils";
import Nav from "../components/Nav";
import {MostRecentBlogPost} from "../components/MostRecentBlogPost";
import {MostRecentProject} from "../components/MostRecentProject";

export const getStaticProps = async () => {
    const about = await fetchData<AboutMe>("about-me")

    return {
        props: {
            about,
        }, revalidate: 1,
    };
};

const Home = ({about}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (<div>
            <Head>
                <title>Alvin Zhao</title>
            </Head>
            <header>
                <Nav/>
            </header>
            <h1 className="has-text-light title is-1 has-text-centered">Alvin Zhao</h1>
            <About data={about}/>
        <div className="columns recent">
            <div className="column has-text-light title is-3">
                <h2>Recent Blog Post</h2>
            </div>
            <div className="column">
                <MostRecentBlogPost/>
            </div>
        </div>
        <div className="columns recent">
            <div className="column has-text-light title is-3">
                <h2>Recent Project</h2>
            </div>
            <div className="column">
                <MostRecentProject/>
            </div>
        </div>
        </div>);
};

export default Home;
