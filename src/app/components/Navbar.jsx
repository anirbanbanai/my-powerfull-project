"use client"

import Link from "next/link";
import { GrHomeRounded } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserFriends } from 'react-icons/fa';
import { GiThreeFriends, GiArchiveRegister } from 'react-icons/gi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FcSearch, FcDoNotInhale, FcReadingEbook, FcList, FcEditImage, FcShop } from 'react-icons/fc';
import { AuthContext } from "./AuthProvider";
import { useContext } from "react"


const Navbar = () => {
    const { user } = useContext(AuthContext);

    const navItem1 = <>

        <li className="text-4xl font-semibold ">Menu</li>

        <li className="m mt-2"><Link className="text-4xl" href="/profile"><AiOutlineUser /> <h2 className="text-2xl font-semibold">Profile</h2></Link></li>
        <li className="m mt-2"><Link className="text-4xl" href="/"><GoSearch /> <h2 className="text-2xl font-semibold">Search</h2></Link></li>
        <li className="m mt-2"><Link className="text-4xl" href="/"><FcDoNotInhale /> <h2 className="text-2xl font-semibold">Not</h2></Link></li>
        <li className="m mt-2"><Link className="text-4xl" href="/"><FcReadingEbook /> <h2 className="text-2xl font-semibold">Reading Books</h2></Link></li>
        <li className="m mt-2"><Link className="text-4xl" href="/"><FcShop /> <h2 className="text-2xl font-semibold">Shop</h2></Link></li>

        {!user ? <li className="m mt-2 text-start">
            <Link href="/login">
                <button className="text-4xl btn btn-warning"><RiLoginCircleLine
                /> <h2 className="text-2xl font-semibold">Login</h2></button>
            </Link>
        </li>
            :
            <li className="m mt-2"> <button className="text-4xl btn btn-warning"><RiLogoutCircleRLine
            /> <h2 className="text-2xl font-semibold">LogOut</h2></button></li>}





    </>
    const navItem2 = <>

        <li ><Link className="text-3xl" href="/"><GrHomeRounded /></Link></li>

        <li><Link className="text-3xl" href="/friend"><FaUserFriends /></Link></li>

        <li ><Link className="text-3xl" href="/post"><FiEdit /></Link></li>
        <li><Link className="text-3xl" href="/"><FcSearch /></Link></li>
        <li className="hidden md:flex"><Link className="text-3xl" href="/notification"><IoMdNotificationsOutline /></Link></li>
        <li><Link className="text-3xl" href="/message"><BiMessageRoundedDots /></Link></li>

    </>
    return (
        <div className="w-full bg-slate-300 fixed z-30">
            <div className=" flex justify-between items-center">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <RxHamburgerMenu className="text-3xl" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem1}
                        </ul>
                    </div>

                </div>
                <div className="mx-auto">
                    <h3 className="hidden sm:flex btn btn-ghost normal-case text-5xl font-bold text-red-500 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Beust</h3>
                </div>
                <div className="mx-auto flex justify-between">
                    <ul className="menu menu-horizontal px-1 flex justify-between">
                        {navItem2}
                    </ul>
                </div>

                <div className="hidden lg:flex">
                    <div className="">
                        <Link href="/login">
                            <button className="btn btn-warning ml-2 ">Login</button>
                        </Link>
                    </div>
                    <Link href="/register">
                        <button className="btn btn-warning ml-2">Register</button>
                    </Link>

                    {user ? <p>Yes</p> : <p>No</p>}
                </div>

            </div>
        </div>
    );
};

export default Navbar;