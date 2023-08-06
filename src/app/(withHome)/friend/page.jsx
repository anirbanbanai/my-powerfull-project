"use client"
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
  return (
    <div className='pt-20'>
      hhhh
      {
        data?.map(m => <div className='flex items-center gap-5 per2 md:w-3/4 lg:w-2/4 mx-auto p-6' key={m._id}>
          <img className='w-24 rounded-full' src={m.imgURL} alt="" />
          <div>
            <h2 className='text-2xl font-semibold'>{m.name}</h2>
            <div className=''>
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