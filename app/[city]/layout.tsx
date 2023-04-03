'use client';

import React, {useEffect, useState, Suspense} from 'react';
import Tokyo from "../../public/image/tokyo.jpg";
import Kyoto from "../../public/image/kyoto.jpg";
import Osaka from "../../public/image/osaka.jpg";
import Image from "next/image";


type CityLayoutProps = {
    params: {
        city: string
    },
    children: {
        children: React.ReactNode
    }
}

const CityLayout = ({params: {city}, children: {children}}: CityLayoutProps) => {

    const [image, setImage] = useState(undefined)

    useEffect(() => {
        if (city === 'Tokyo') setImage(Tokyo)
        else if (city === 'Kyoto') setImage(Kyoto)
        else if (city === 'Osaka') setImage(Osaka)
        else throw Error('Invalid query request')
    }, [])

    if(image === undefined)
        return <h1>Loading...</h1>

    return (
        <div className='relative w-screen h-screen'>
            <Suspense fallback={<h2>...loading...</h2>}>
                {/*<Image*/}
                {/*    src={image}*/}
                {/*    alt={'tokyo foggy image'}*/}
                {/*    style={{*/}
                {/*        objectFit: "cover",*/}
                {/*        objectPosition: "top",*/}
                {/*        height: "100vh",*/}
                {/*        width: "100vw",*/}
                {/*        zIndex:-1*/}
                {/*    }}*/}
                {/*    priority*/}
                {/*/>*/}
                <h1>Hey</h1>
                {children}
            </Suspense>
        </div>
    );
};

export default CityLayout;