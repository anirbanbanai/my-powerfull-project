"use client"
import React from 'react';
import Bttnn from '../Bttnn';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider';

import { useContext } from "react"

const img_hosting_token = process.env.NEXT_PUBLIC_ImageUploadToken;

const CreatePost = () => {
  // const {user} = useContext(AuthContext)
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // console.log(user);
  const onSubmit = (data) => {
    // console.log(data);
    // fetch("http://localhost:4000/post", {
    //   method: "POST",
    //   header: {
    //     "content-type":"application/json"
    //   },
    //   body: JSON.stringify(data.text)
    // })
    //   .then(res =>res.json())
    //   .then(data=>{
    //     console.log(data);
    //   })


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const formData = new FormData;
    formData.append("image", data.photo[0])
    fetch(img_hosting_url, {
      method: "POST",
      body: formData
    }).then(res => res.json())
      .then(imgres => {
        if (imgres.success) {
          const imgURL = imgres.data.display_url;
          const { text, photo } = data;
          const {photoURL,displayName,email} = user;
          const menuItems = { text, imgURL,photoURL,displayName,email , date: new Date};
          console.log(menuItems);
          axios.post('http://localhost:4000/post', menuItems)
            .then(data => {
              console.log(data.data);
              swal("Post created!", "", "success");
            })
        }
      })


  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='container bg-slate-200 p-10 text-center'>
      <h2 className='text-3xl font-semibold mb-4'>Create your post</h2>
      <textarea {...register("text", { required: true })} className="textarea textarea-accent w-3/4 " placeholder="Start your post..." ></textarea>
      <br />
      <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-error w-full  max-w-xs" />
      {user?<Bttnn >Post</Bttnn> : <h2 className='text-red-500 mt-5'>Login first !!</h2>}
<p></p>
    </form>
  );
};

export default CreatePost;