import {gql} from 'graphql-request'
import graphCMS from "@/lib/graphCMS";

const QUERY = gql`
    query MyQuery($name:String!){
        city(where:{name:$name}){
            name
            id
            image{
                url
            }
            posts (first:100){
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
            }
        }
    }
`;

type data = {
    city: City
}

export default async function getPostsByCity(cityName: string) {
    const param = cityName.charAt(0).toUpperCase()+cityName.slice(1)
    const {city}: data = await graphCMS.request(QUERY, {name: param})
    if(!city) throw new Error('Failed to fetch data')
    return city
}