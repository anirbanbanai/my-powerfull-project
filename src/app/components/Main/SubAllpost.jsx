import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment, FaShareFromSquare } from 'react-icons/fa';
import { GiRapidshareArrow } from 'react-icons/gi';

const SubCreatePost = ({ main }) => {
    const { displayName, text, imgURL, photoURL } = main;
 
    return (
        <div className='per2  m-5 p-5 md:w-3/4 mx-auto'>
            <div className='flex gap-4 mb-5'>
                <Link href={`/friend`}>
                    <img className='w-10 mx-auto rounded-full' src={photoURL} alt="" />
                </Link>
                <Link href={`/friend`}>
                    <h2 className='text-2xl font-semibold'>{displayName}</h2>
                </Link>
            </div>
            <h2 className='px-5'> {text}</h2>

            <img className='w-3/4 mx-auto m-10 border' src={imgURL} alt="" />

            <div className='w-2/4 flex mx-auto  justify-between'>
                {/* <FcLike className="text-4xl"/> */}
                <AiOutlineHeart className="text-4xl" />
                <FaRegComment className="text-4xl" />
                <GiRapidshareArrow className="text-4xl" />

            </div>
           
        </div>
    );
};

export default SubCreatePost;