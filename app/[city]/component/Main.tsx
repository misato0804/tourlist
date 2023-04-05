'use client';

import React, {Suspense, useEffect, useState} from 'react';
import Image, {StaticImageData} from "next/image";
import Tokyo from "@/public/image/tokyo.jpg";
import Kyoto from "@/public/image/kyoto.jpg";
import Osaka from "@/public/image/osaka.jpg";
import PostCard from "@/app/[city]/component/PostCard";
import category from "@/lib/category";

type MainProps = {
    city: string,
    cityData: City
}

const Main = ({city, cityData}: MainProps) => {

    const [image, setImage] = useState<StaticImageData | undefined>()
    const [showCategory, setShowCategory] = useState('all')
    const [posts, setPosts] = useState<Post[]>(cityData.posts)

    useEffect(() => {
        cityData.posts && setPosts(cityData.posts)
    }, [])

    useEffect(() => {
        if (city === 'Tokyo') setImage(Tokyo)
        else if (city === 'Osaka') setImage(Osaka)
        else if (city === 'Kyoto') setImage(Kyoto)
        else throw new Error('No image')
    }, [city])


    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const clickedCategory = e.currentTarget.innerText.toLowerCase()
        const arr = cityData.posts.filter(post => post.category.includes(clickedCategory))
        setPosts(arr)
    }


    if (!image) {
        return <h1>Loading</h1>
    }

    const onClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {

    }

    const mainTextStyle = `
        absolute 
        top-12
        left-1/2 
        transform 
        -translate-x-1/2
        text-slate-50
        text-6xl
        w-full
        text-center
        font-extrabold
    `

    return (
        <div className='relative w-screen h-screen'>
            <Suspense fallback={<h2>...loading...</h2>}>
                <Image
                    src={image}
                    alt={`${city} image`}
                    style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        height: "100vh",
                        width: "100vw",
                        zIndex: -1
                    }}
                    priority
                />
                <h1 className={mainTextStyle}>{city}</h1>

                <div className='w-[90vw] absolute top-2/3  left-1/2 transform -translate-x-1/2 -translate-y-2/3 '>
                    <div className="max-lg:grid max-lg:grid-cols-10 lg:mt-6">
                        {/*   siori */}
                        <div className='w-full max-[500px]:col-span-3 max-lg:col-span-2 lg:overflow-x-scroll'>

                            <div className={`max-lg:grid max-lg:grid-rows-11 max-lg:gap-2 max-lg:h-3/4 lg:flex lg:w-[150%]`}>

                                <div
                                    className='bg-slate-300 max-lg:rounded-s-md flex px-1 items-center text-sm font-bold cursor-pointer lg:w-[15rem] lg:py-2 lg:rounded-t-md'>
                                    <div
                                        onClick={() => setPosts(cityData.posts)}
                                        className={`w-full flex px-1 items-center justify-center h-[70%] hover:hover:bg-slate-500`}>
                                        <h1 className='text-center'>All</h1>
                                    </div>
                                </div>
                                {category.map(item => (
                                    <div
                                        onClick={(e) => onClickHandler(e)}
                                        key={item}
                                        className='bg-slate-300 max-lg:rounded-s-md flex px-1 items-center text-sm font-bold cursor-pointer lg:w-[15rem] lg:py-2 lg:rounded-t-md lg:ml-2'>
                                        <div
                                            className={`w-full flex px-1 items-center justify-center h-[70%] hover:hover:bg-slate-500`}>
                                            <h1 className='text-center'>{item.charAt(0).toUpperCase() + item.slice(1)}</h1>
                                        </div>
                                    </div>))}
                            </div>

                        </div>

                        {/*  main */}
                        <div className='w-full h-[75vh] py-8 px-4 bg-slate-300 h-1/4 max-[500px]:col-span-7 max-lg:col-span-8'>
                            <div className='w-full h-full grid lg:grid-cols-2 gap-5 overflow-scroll'>
                                {posts.length > 0 && posts.map(post => <PostCard key={post.id} post={post}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Main;