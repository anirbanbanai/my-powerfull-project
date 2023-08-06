"use client"

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import ProfileEdit from '@/app/components/Main/ProfileEdit'
import { CiEdit } from 'react-icons/ci';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import { FcSynchronize } from 'react-icons/fc';
const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [bio, setBio] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/post?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            });

        fetch(`http://localhost:4000/biod?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBio(data);
            })

    }, []);

    // console.log(data);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='mx-auto mt-5 text-center'>
            <img className='w-32 rounded-full mx-auto' src={user?.photoURL} alt="" />


            <h2 className='text-3xl font-semibold text-center'>{user?.displayName}</h2>


            <div className='flex justify-center items-center gap-4 mb-3'>
                {
                    bio?.map(m => <p key={m._id}>{m.bio}</p>)
                }

                <Link href="/updatebio">
                    <button className='btn text-2xl'><FcSynchronize /></button>
                </Link>

            </div>

            <div>
                <Link href="/editbio">
                    <button className='btn  '>Edit <CiEdit className="text-3xl" /></button>
                </Link>
            </div>


            <div>
                {
                    data?.map(m => <ProfileEdit key={m._id} main={m}></ProfileEdit>)
                }
            </div>
        </div>
    );
};

export default MyProfile;