import getPost from "@/lib/getPost";
import React, {Suspense} from "react";
import getPostsByCity from "@/lib/getPostByCity";
import getCities from "@/lib/getCities";

type Params = {
    params: {
        city: string
    }
}

export async function generateMetadata({params: {city}}: Params) {
    const cityData : Promise<City> = getPostsByCity(city)
    const data : City = await cityData
    return {
        title: data.name,
        description: `This is page of ${data.name}`
    }

}

const PostPage = async ({params: {city}}: Params) => {
    const cityData : Promise<City> = getPostsByCity(city)
    const data : City = await cityData
    const cityInfo = await data
    return (
        <div>
            <Suspense fallback={<h2>...loading...</h2>}>
                <h1>{city}</h1>
            </Suspense>
        </div>
    );
};

export default PostPage;

export async function generateStaticParams() {
    const citiesData : Promise<City[]> = getCities();
    const citiesInfo: City[] = await citiesData

    return citiesInfo.map(cityInfo => ({
            city: cityInfo.name
        }))
}