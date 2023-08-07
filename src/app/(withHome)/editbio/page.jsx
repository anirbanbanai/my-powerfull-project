"use client"
import { AuthContext } from '@/app/components/AuthProvider';
import Bttnn from '@/app/components/Bttnn';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import {useContext} from 'react'

const Editbio = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const {email}=user;
        const allItem = {email, bio:data.bio}
        axios.post("https://my-final-server.vercel.app/bio", allItem)
        .then(data=>{
            console.log(data);
        })
    };
    return (
        <div className='pt-20'>
            <form onSubmit={handleSubmit(onSubmit)} className='per2 p-5 w-3/4 mx-auto text-center'>

                <div className="form-control mx-auto w-full max-w-xs">
                  <h2 className='text-2xl font-semibold mb-5'>Edit Bio</h2>
                    <input {...register("bio", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    
                </div>
                <Bttnn>Save</Bttnn>
            </form>
        </div>
    );
};

export default Editbio;