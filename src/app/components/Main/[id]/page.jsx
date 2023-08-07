"use client"

import React from 'react';
import Bttnn from '../../Bttnn';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';

const UpdatePost = ({ params }) => {
    console.log(params.id);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.patch(`http://localhost:4000/post/${params.id}`, data)
        .then(data=>{
           if(data.data.acknowledged){
            swal("Post Updated!", "", "success");
           }
        })
    }
    return (
        <div className='pt-20 pb-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='container bg-slate-200 p-10 text-center'>
                <h2 className='text-3xl font-semibold mb-4'>Update your post</h2>
                <textarea {...register("text")} className="textarea textarea-accent w-3/4 " placeholder="Start your post..." ></textarea>
                <br />
                {/* <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-error w-full  max-w-xs" /> */}
                <Bttnn >Update</Bttnn>
                <p></p>
            </form>
        </div>
    );
};

export default UpdatePost;