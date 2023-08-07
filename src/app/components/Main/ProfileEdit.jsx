import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment, FaRegShareSquare, FaShareFromSquare } from 'react-icons/fa';
import { GiRapidshareArrow } from 'react-icons/gi';
import { CiEdit } from 'react-icons/ci';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import axios from 'axios';
import swal from 'sweetalert';

const ProfileEdit = ({ main }) => {
    const { _id, displayName, text, imgURL, photoURL } = main;
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://my-final-server.vercel.app/post/${id}`)
            .then(data => {
                console.log(data);
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
            })
             
            } else {
              swal("Your imaginary file is safe!");
            }
          });
   
    }
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
            <h2> {text}</h2>
            <img className='w-3/4 mx-auto m-10 border' src={imgURL} alt="" />

            <div className='w-2/4 flex  mx-auto justify-between'>
                {/* <FcLike className="text-4xl"/> */}
                <AiOutlineHeart className="text-4xl" />
                <FaRegComment className="text-4xl" />
                <FaRegShareSquare className="text-4xl" />
                
                <Link href={`/components/Main/${_id}`}>
                <button className='btn'>
                <CiEdit className="text-4xl" />
                </button>
                </Link>
              

                <button onClick={() => handleDelete(_id)} className='btn'>
                    <RiDeleteBin5Line className="text-4xl" />
                </button>

            </div>
        </div>
    );
};

export default ProfileEdit;