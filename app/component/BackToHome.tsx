'use client';
import React from 'react';
import {IoMdArrowBack} from 'react-icons/io'
import {useRouter} from "next/navigation";


const BackToHome = () => {

    const router = useRouter()

    return (
        <div
            onClick={() => {router.back()}}
            className='
            fixed
            bottom-8
            right-3
            bg-yellow-700
            w-[50px]
            h-[50px]
            justify-center
            flex
            items-center
            rounded-[50%]
            cursor-pointer
            '>
            <IoMdArrowBack className='text-slate-50' size={24}/>
        </div>
    );
};

export default BackToHome;