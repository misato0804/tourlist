import getPost from "@/lib/getPost";
import React, {Suspense, useState} from "react";
import getPostsByCity from "@/lib/getPostByCity";
import getCities from "@/lib/getCities";
import Link from "next/link";

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
    const content = cityInfo.posts.map(post => (
        <section>
            <h1>{post.title}</h1>
            <Link href={`/${city}/${post.slug}`}>{post.title}</Link>
        </section>
    ))
    return (
        <div>
            <Suspense fallback={<h2>...loading...</h2>}>
                <h1>{city}</h1>
                {content}
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