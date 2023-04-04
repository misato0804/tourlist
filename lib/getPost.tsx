import {gql} from 'graphql-request'
import graphCMS from "@/lib/graphCMS";

const QUERY = gql`
    query MyQuery($slug:String!){
    post(where:{slug:$slug}){
        link
        title
        id
        slug
    }
    }`;

type data = {
    post: Post
}

export default async function getPost(slug: string) {
    const { post }: data = await graphCMS.request(QUERY, {slug})
    if(!post) throw new Error('Failed to fetch post data')
    return post
}

