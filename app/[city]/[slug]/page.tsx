import React from 'react';
import getPost from "@/lib/getPost";
import {Suspense} from 'react'
import type {Metadata} from "next";
import Main from "@/app/[city]/[slug]/component/Main";
import getAllPost from "@/lib/getAllPosts";

type Params = {
    params: {
        city: string,
        slug: string
    }
}

export const generateMetadata = async ({params: {slug}}: Params): Promise<Metadata> => {
    const postData: Promise<Post> = getPost(slug)
    const post: Post = await postData
    return {
        title: post.slug,
        description: `This is the page about ${post.title}`
    }
}

const PostPage = async ({params: {city, slug}}: Params) => {

    const postData: Promise<Post> = getPost(slug)
    const data: Post = await postData
    const postInfo = await data

    console.log(postInfo)

    return (
        <div>
            <Main city={city as string} postData={postInfo}/>
        </div>
    );
};

export default PostPage;

export async function generateStaticParams() {
    const allSlug: Promise<Post[]> = getAllPost()
    const data: Post[] = await allSlug

    return data.map(post => ({
        slug: post.slug
    }))
}