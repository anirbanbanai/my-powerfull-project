import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className="pt-24 ">
            <h2 className="text-5xl font-bold text-center">Register Now</h2>
            <form  className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">
                <div className="md:flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>

                        </label>
                        <input
                            type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>

                        </label>
                        <input
                           
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
                    <input   type="password" placeholder="Confirm Password" className="input input-bordered w-full " />

                    {/* {...register("password", { required: true })} */}
                </div>
                <div>
                    <input type="file" className="mt-5 file-input file-input-bordered file-input-warning w-full " />
                </div>

                <div className="flex items-center justify-center">
                    {/* <Bttnn className="mx-auto">Submir</Bttnn> */}
                </div>
                {/* <h3 className="text-green-500 text-center">{success}</h3> */}
                <h3 className="text-center">Already have an accunt? <Link className="text-red-500" href='/login'>Login</Link></h3>
            </form>
        </div>
    );
};

export default Register;