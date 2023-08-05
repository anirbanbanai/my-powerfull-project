"use client"

import React, { useContext, useEffect, useState } from 'react';
import SubAllpost from './SubAllpost'
import axios from'axios'

const CreatePost = () => {
  const [data, setData] = useState([])
    useEffect(()=>{
       fetch("http://localhost:4000/postt")
       .then(res=>res.json())
       .then(data=>{
        // console.log(data);
        setData(data)
       })

    // axios.get("http://localhost:4000/postt")
    // .then(d=>{
    //     console.log(d);
    //     setData(d)
    // })
    },[])
console.log(data);
    return (
        <div>
   {
    data?.map(m=><SubAllpost key={m._id} main={m}></SubAllpost>)
   }
        </div>
    );
};

export default CreatePost;