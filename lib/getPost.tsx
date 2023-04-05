import {gql} from 'graphql-request'
import graphCMS from "@/lib/graphCMS";

const QUERY = gql`
    query MyQuery($slug:String!){
        post(where:{slug:$slug}){
            id
            title
            link
            slug
            coverPhoto {
                url
            }
            category
            jpy
            cad
            location {
                latitude
                longitude
            }
            city {
                name
            }
        }
    }`;

type data = {
    post: Post
}

export default async function getPost(slug: string) {
    const {post}: data = await graphCMS.request(QUERY, {slug})
    if (!post) throw new Error('Failed to fetch post data')
    return post
}

