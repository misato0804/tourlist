'use client';

import React, {Suspense, useEffect, useState} from 'react';
import Image from "next/image";
import back from '../../../../public/image/japanese-paper_00184.jpg'
import Link from "next/link";
import {BiLinkExternal} from 'react-icons/bi';
import GoogleMap from "@/app/[city]/[slug]/component/GoogleMap";

type MainProp = {
    city: string,
    postData: Post
}

const Main = ({city, postData}: MainProp) => {

    console.log(postData.location)

    return (
        <div className='relative w-screen h-screen'>
            <Suspense fallback={<h2>...loading...</h2>}>
                <Image
                    src={back}
                    alt={`${city} image`}
                    style={{
                        position: 'fixed',
                        objectFit: "cover",
                        objectPosition: "top",
                        height: "100vh",
                        width: "100vw",
                        zIndex: -1
                    }}
                    priority
                />
                <div className='w-[90vw] absolute top-10  left-1/2 transform -translate-x-1/2 '>
                    <div className={`w-full h-[40vh]`}>
                        <h1 className='text-3xl md:text-5xl font-extrabold mb-3'>{postData.title}</h1>
                        <Image
                            src={postData.coverPhoto.url}
                            alt={`${city} image`}
                            style={{objectFit: "cover", width: '100%', height: '100%'}}
                            width={100}
                            height={100}
                            priority
                        />
                        <h2 className='font-bold bg-yellow-950 text-slate-50 my-3 rounded-lg py-2 flex items-center justify-center'>
                            <BiLinkExternal/>
                            <Link href={postData.link} target="_blank">GO TO OFFICIAL SITE</Link>
                        </h2>
                        <div className='md:grid md:grid-cols-7 gap-3 px-4 py-2'>
                            <div className='col-span-4'>
                                <p className=''>a museum showcasing the work of the Japanese animation studio Studio
                                    Ghibli. It is
                                    located in Inokashira Park in Mitaka, a western city of Tokyo, Japan. The museum
                                    combines features of a museum, technology museum, and a fine arts museum, and is
                                    dedicated to the art and technique of animation. Features include a replica of the
                                    Catbus from My Neighbor Totoro (1988), a café, bookstore, rooftop garden, and a
                                    theater
                                    for exclusive short films by Studio Ghibli.</p>
                            </div>
                            <GoogleMap center={postData.location}/>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Main;