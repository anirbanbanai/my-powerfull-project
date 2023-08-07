
import React from 'react';

const IDData = async({params}) => {
    console.log(params?.id);
const res = await fetch(`https://my-final-server.vercel.app/userr/${params?.id}`);
const data = await res.json();
console.log(data);
    return (
        <div className='pt-20 w-3/4 mx-auto text-center'>
          <h2 className='text-3xl font-semibold'>{data?.name}</h2>
           <img className='w-36 rounded-full mx-auto' src={data?.imgURL} alt="" />
        </div>
    );
};

export default IDData;