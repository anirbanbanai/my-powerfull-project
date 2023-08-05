import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment,FaShareFromSquare } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { GiRapidshareArrow } from 'react-icons/gi';

const SubCreatePost = ({main}) => {
    const {displayName, text , imgURL,photoURL } = main;
    return (
        <div className='per2  m-5 p-5 md:w-3/4 mx-auto'>
            <div className='flex gap-4 mb-5'>
            <img className='w-10 rounded-full' src={photoURL} alt="" />
            <h2 className='text-2xl font-semibold'>{displayName}</h2>
            </div>
            <h2> {text}</h2>
            <img className='w-3/4 m-10 border' src={imgURL} alt="" />

            <div className='w-2/4 flex   justify-between'>
                {/* <FcLike className="text-4xl"/> */}
                <AiOutlineHeart className="text-4xl"/>
                <FaRegComment className="text-4xl"/>
                <GiRapidshareArrow className="text-4xl"/>
               
            </div>
        </div>
    );
};

export default SubCreatePost;