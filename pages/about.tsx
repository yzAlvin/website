import { url } from "../next.config";
import {InferGetStaticPropsType} from "next";
import {AboutMe} from "../types/types";
export default function About({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(data);

    return (
        <div>
            <h1>About the author:</h1>
            {data.attributes.Body}
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`${url}/api/about-me`);
    const data: AboutMe = (await res.json()).data;

    return {
        props: { data },
        revalidate: 1,
    };
};