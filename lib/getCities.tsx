import {gql} from 'graphql-request'
import graphCMS from "@/lib/graphCMS";

const QUERY = gql`
    query MyQuery {
        cities {
            id
            name
            image {
                url
            }
        }
    }
`

export default async function getCities() {
    const { cities } = await graphCMS.request(QUERY)
    if(!cities) throw new Error('Failed to fetch data')
    console.log(cities)
    return cities
}