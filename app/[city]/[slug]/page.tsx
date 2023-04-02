import React from 'react';
import getPost from "@/lib/getPost";
import {Suspense} from 'react'
import type {Metadata} from "next";

type Params = {
    params: {
        city: string,
        slug: string
    }
}

export const generateMetadata = async({params: {slug}}: Params) : Promise<Metadata> => {
    console.log(slug)

    const postData: Promise<Post> = getPost(slug)
    const post : Post = await postData
    return {
        title: post.slug,
        description: `This is the page about ${post.title}`
    }
}

const PostPage = async ({params: {city,slug}}: Params) => {
    console.log(slug, city)
    // const postData: Promise<Post> = getPost(slug)
    // console.log(postData)
    // const [post] = await Promise.all([postData])

    return (
        <div>
            <Suspense fallback={<h2>...loading...</h2>}>
                {/*<h1>{post.title}</h1>*/}
                {slug}
            </Suspense>
        </div>
    );
};

export default PostPage;