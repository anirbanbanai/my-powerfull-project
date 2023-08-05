"use client"

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Bttnn from '../components/Bttnn';
import { AuthContext } from '../components/AuthProvider';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Login = () => {
    const [success, setSuccess] = useState([])
    const {loginUser} = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(data => {
                console.log(data);
                swal("User login successfull!", "User Login", "success");
                setSuccess('User loginj sccessfull')
            })
    };
    return (
        <div className="pt-24">
             <h2 className="text-5xl font-bold text-center">Login Now</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">
              
               <div className=" w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                       
                    </label>
                    <input   {...register("email", { required: true })}  type="email" placeholder="Your Email" className="input  w-full " />
                </div>
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Confirm Password</span>
                       
                    </label>
                    <input   {...register("password", { required: true })}  type="password" placeholder=" Password" className="input input-bordered w-full " />
                </div>
                {/* {...register("password", { required: true })} */}

                <div className="flex items-center justify-center">
                <Bttnn className="mx-auto">Submir</Bttnn>
                </div>
               <h3 className="text-green-500 text-center">{success}</h3>
            <h3 className="text-center">New to user? <Link className="text-red-500" href='/register'>Register</Link></h3>
            </form>
        </div>
    );
};

export default Login;