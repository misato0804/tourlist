import {gql} from 'graphql-request'
import graphCMS from "@/lib/graphCMS";

const QUERY = gql`
    query MyQuery{
        posts (first:100) {
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
            city {
                name
            }
        }
    }`;

type data = {
    posts : Post[]
}

export default async function getAllPost() {
    const {posts} : data = await graphCMS.request(QUERY)
    if(!posts) throw new Error('Failed to fetch data')
    return posts
}