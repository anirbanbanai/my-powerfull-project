"use client"
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Bttnn from '../components/Bttnn';
import { AuthContext } from '../components/AuthProvider';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import axios from 'axios';

const img_hosting_token = process.env.NEXT_PUBLIC_ImageUploadToken;

const Register = () => {
    // console.log(img_hosting_token);
    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    const [success, setSuccess] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


    const onSubmit = (data) => {
        console.log(data);

        const formData = new FormData;
        formData.append("image", data.photo[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgres => {
                if (imgres.success) {
                    const imgURL = imgres.data.display_url;
                    const {name, email}=data;
                    const allItem = {name, email, imgURL}
                    updateUserProfile(data.name,imgURL)
                        .then(data => {
                            console.log("use update", data);
                        });

                        axios.post("http://localhost:4000/user",allItem)
                        .then(data=>{
                            console.log(data);
                        })
                }
            })

        createUser(data.email, data.password)
            .then(data => {
                console.log(data);
                swal("User created successfull!", "User created", "success");
                setSuccess('User created successfull');
               
            })


    };

    // swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });

    return (
        <div className="pt-24 ">
            <h2 className="text-5xl font-bold text-center">Register Now</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">
                <div className="md:flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>

                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>

                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>

                    </label>
                    <input type="password" placeholder="Your Password" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Confirm Password</span>

                    </label>
                    <input {...register("password", { required: true })} type="password" placeholder="Confirm Password" className="input input-bordered w-full " />


                </div>
                <div>
                    <input {...register("photo", { required: true })} type="file" className="mt-5 file-input file-input-bordered file-input-warning w-full " />
                </div>

                <div className="flex items-center justify-center">
                    <Bttnn className="mx-auto">Submir</Bttnn>
                </div>
                <h3 className="text-green-500 text-center">{success}</h3>
                <h3 className="text-center">Already have an accunt? <Link className="text-red-500" href='/login'>Login</Link></h3>
            </form>
        </div>
    );
};

export default Register;