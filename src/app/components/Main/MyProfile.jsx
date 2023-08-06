"use client"

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import SubAllpost from '@/app/components/Main/SubAllpost'
import axios from 'axios';
const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/post?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])
    console.log(data);
    return (
        <div className='mx-auto mt-5 text-center'>
            <img className='w-32 rounded-full mx-auto' src={user?.photoURL} alt="" />
            <h2 className='text-3xl font-semibold text-center'>{user?.displayName}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicingum atque?</p>

            <div>
                <button className='btn btn-outline'>Edit profile</button>
                <button className='btn btn-outline ml-3'>Share profile</button>
            </div>
            <div>
                {
                    data?.map(m => <SubAllpost key={m._id} main={m}></SubAllpost>)
                }
            </div>
        </div>
    );
};

export default MyProfile;