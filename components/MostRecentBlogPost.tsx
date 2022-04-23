import {Article} from "../types/types";
import {useEffect, useState} from "react";
import {fetchData} from "../utils";
import Link from "next/link";

const fetchMostRecentBlogPost = async () => {
    const post = await fetchData<Article[]>("articles")
    return post.pop()
}

export const MostRecentBlogPost = () => {
    const [post, setPost] = useState<Article>()
    useEffect(() => {
        fetchMostRecentBlogPost().then(p =>
            setPost(p)
        )
    }, [])

    return post ? <>
            <h5 className='has-text-light title is-5'>{post.attributes.title}</h5>
            <p className='has-text-light subtitle is-6 mb-2'>{post.attributes.blurb}</p>
            <Link href={`/article/${post.id.toString()}`}><a className="has-text-primary">Read</a></Link>
            </>
        :
        <p className='has-text-primary'>Fetching most recent post...</p>
}