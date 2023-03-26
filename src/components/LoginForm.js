import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({setIsLoggedin})
{
    const nav=useNavigate();
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    const[showPassword,setShowPassword]=useState(false);

    function changeHandler(e)
    {
        setFormData((prev)=>
        (
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }

    function submitHandler(e)
    {
           e.preventDefault();
           setIsLoggedin(true);
           toast.success("logged in");
           nav("/dashboard");
    }
    return (
        <form onSubmit={submitHandler}
        className=" flex flex-col w-full gap-y-4 mt-6 ">
            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type="email"
                value={formData.email}
                name="email"
                onChange={changeHandler}
                placeholder="Enter email id"
                className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "/>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type={showPassword ? ("text"):("password")}
                value={formData.password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "/>
                <span onClick={ ()=>setShowPassword((prev)=>!prev)}
                className="absolute right-3 cursor-pointer top-[38px]">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>


                <button className="bg-yellow-50 rounded-[8px] text-black font-medium w-full px-[12px] py-[8px] mt-8 ">Sign in</button>

            </label>
        </form>
    )
}