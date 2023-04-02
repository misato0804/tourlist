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

type data = {
    cities: City[]
}

export default async function getCities() {
    const { cities } : data = await graphCMS.request(QUERY)
    if(!cities) throw new Error('Failed to fetch data')
    console.log(cities)
    return cities
}