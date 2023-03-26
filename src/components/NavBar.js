import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
export default function NavBar(props)
{
    let isLoggedin=props.isLoggedin;
    let setIsLoggedin=props.setIsLoggedin;
    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/"><img src={logo} width={160} height={32} loading="lazy" alt="logo"/>
            </Link>
            <nav>
                <ul className='flex gap-x-6 text-white'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">contact</Link>
                    </li>
                    
                </ul>
            </nav>

           <div className="flex items-center gap-x-4 ">
            {
                !isLoggedin &&
                <Link to="/login">
                    <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                        Login
                    </button>
                </Link>
            }
            {
                !isLoggedin &&
                <Link to="/signup">
                    <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                    Sign up
                    </button>
                </Link>
            }
            {
                isLoggedin &&
                <Link to="/">
                    <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]"
                    onClick={ ()=>
                    {
                        setIsLoggedin(false);
                        toast.success("logged out");
                    }}> 
                        Log out
                    </button>
                </Link>
            }
            {
                isLoggedin &&
                <Link to="/dashboard">
                    <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                        Dashboard
                    </button>
                </Link>
            }
           </div>

        </div>
    )
}