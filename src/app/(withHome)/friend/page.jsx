"use client"
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react'

const Friendss = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/userr")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [])
  console.log(data);
  return (
    <div className='pt-20'>
      
      {
        data?.map(m => <div className='flex items-center gap-5 per2 md:w-3/4 lg:w-2/4 mx-auto p-6 m-3' key={m._id}>
          <Link href={`/friend/${m?._id}`}>
          <img className='w-24 rounded-full' src={m.imgURL} alt="" />
          </Link>
         
          <div>
            <Link href={`/friend/${m?._id}`}>
            <h2 className='text-2xl font-semibold'>{m.name}</h2>
            </Link>
            <div className='mt-3'>
              <button className='btn btn-outline bg-blue-400 '>Add Connection</button>
              <button className='btn  ml-2'>Remove</button>

            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Friendss;