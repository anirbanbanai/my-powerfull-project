"use client"
import React from 'react';
import Bttnn from '../Bttnn';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
      console.log(data);
    }
  return (
    <div className='container bg-slate-200 p-10'>
      <h2 className='text-3xl font-semibold mb-4'>Create your post</h2>
      <textarea className="textarea textarea-accent" placeholder="Start your post..."></textarea>
      <br />
      <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
      <Bttnn >Post</Bttnn>
    </div>
  );
};

export default CreatePost;