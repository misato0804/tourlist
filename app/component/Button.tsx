import React from 'react';
import Link from "next/link";

type ButtonProps = {
    name: string
}

const Button = ({name}: ButtonProps) => {
    return (
        <div className='py-2 px-14 bg-[#B0593A] text-slate-50 rounded-[10px] opacity-70'>
            <Link href={`/${name}`}><h2 className='text-center'>{name}</h2></Link>
        </div>
    );
};

export default Button;