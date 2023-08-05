import React from 'react';

const SubCreatePost = ({main}) => {
    const {is, name , location} = main;
    return (
        <div className='border border-red-500 m-5 p-5'>
            <h2>Name : {name}</h2>
            <h1>Location : {location}</h1>
        </div>
    );
};

export default SubCreatePost;