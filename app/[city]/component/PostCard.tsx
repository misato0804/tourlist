import React from 'react';
import Image from "next/image";

type PostCardProps = {
    post: Post
}

const PostCard = ({post}: PostCardProps) => {

    console.log(post)

    return (
        <div className='grid xs:grid-rows-2 sm:grid-cols-2 gap-2 px-4 py-4 bg-zinc-50 cursor-pointer hover:opacity-60'>
            <div className=''>
                <Image
                    src={post.coverPhoto.url as string}
                    alt={post.title}
                    style={{width: '100%', height: '170px', objectFit: 'cover', objectPosition: "center",}}
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h2 className='text-md md:text-xl font-bold'>{post.title}</h2>
                <div className='grid gap-1 my-2'>
                    {post.category.map(cate =>
                        <h6 key={cate} className='text-center bg-cyan-950 rounded-md text-[#fff] text-xs py-0.5 px-2'>{cate}</h6>
                    )}
                </div>
                <h6 className='text-sm font-semibold'>Budget</h6>
                <p className='text-xs my-2'>CAD: {post.cad} 〜</p>
                <p className='text-xs'>JPY: {post.jpy} 〜</p>
            </div>
        </div>
    );
};

export default PostCard;