import getCities from "@/lib/getCities";
import Image from "next/image";
import main from "../public/image/japan-main-image.png"
import Button from "@/app/component/Button";
import React from "react";

export default async function Home() {
    const citiesData: Promise<City[]> = getCities();
    const citiesInfo: City[] = await citiesData
    const cities = citiesInfo

    const border = <hr
        style={{
            border: "none",
            height: "1.5px",
            backgroundColor: "#fff",
            width: '80vw',
            display: 'block'
        }}/>

    const renderButtons = (
        cities.map((city) => (
            <Button name={city.name} key={city.id}/>
        ))
    )

    return (
        <main>
            <div className='relative w-screen h-screen'>
                <Image
                    src={main}
                    alt={'japan foggy image'}
                    style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        height: "100vh",
                        width: "100vw"
                    }}
                    priority
                />
                <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
                    <div className=''>
                        {border}
                        <h6 className='text-lg text-slate-50 text-center'>WELCOME TO</h6>
                        <h1 className='text-5xl text-slate-50 font-extrabold text-center my-3'>Japan</h1>
                        <h6 className='text-lg text-slate-50 text-center'>HAVE A AWESOME TRIP!!</h6>
                        {border}
                    </div>
                </div>
                <div className='mt-10 lg:mt-36 lg:w-2/3 grid grid-rows-3 sm:grid-cols-3 gap-3 absolute w-[80vw] top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4'>
                    {renderButtons}
                </div>
            </div>
        </main>
    )
}
