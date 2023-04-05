import React, {Suspense, useEffect, useState} from "react";
import getPostsByCity from "@/lib/getPostByCity";
import getCities from "@/lib/getCities";
import Main from "@/app/[city]/component/Main";

type Params = {
    params: {
        city: string
    }
}

async function generateMetadata({params: {city}}: Params) {
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
        <>
            <Main city={city as string} cityData={cityInfo}/>
        </>
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