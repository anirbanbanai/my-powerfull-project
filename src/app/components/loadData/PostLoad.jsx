import React, { useEffect, useState } from 'react';

const PostLoad = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
       fetch("https://my-final-server.vercel.app/postt")
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        setData(data)
       })
    },[])
    return data;
};

export default PostLoad;