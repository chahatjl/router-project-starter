import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SignupForm({setIsLoggedin}) {
    const nav=useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass:"",
        

    })
    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false);
    const[accountType,setAccountType]=useState("student");

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
        if(formData.password!==formData.confirmpass)
        {
            toast.error("please enter same password")
            return;
        }
        setIsLoggedin(true);
        toast.success("Account Created");
        const accountData={
            ...formData
        };
        const finalData=
        {
            ...accountData,
            accountType
        }

        
        console.log(finalData);
        
        
        nav("/dashboard");
    }

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button onClick={ ()=>
                {
                    setAccountType("student")
                }} className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-200" } py-2 px-5  rounded-full  transition-all duration-200`}>
                    Student
                </button>
                <button onClick={ ()=>
                {
                    setAccountType("instructor")
                }} className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-200" } py-2 px-5  rounded-full  transition-all duration-200`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4 mt-[20px]">

                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First name<sup className="text-pink-200">*</sup></p>
                    </label>
                    <input
                        required
                        type="text"
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstname}
                        className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "
                    />

                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last name <sup className="text-pink-200">*</sup></p>
                    </label>
                    <input
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastname}
                        className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "
                    />
                </div>


                 <div className="mt-[20px]">
                 <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "
                    />
                </label>
                 </div>
                

                <div className="w-full flex gap-x-4 mt-4">
                <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type={showPassword ? ("text"):("password")}
                value={formData.password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "
                />
                <span onClick={ ()=>setShowPassword((prev)=>!prev)}className="absolute right-3 cursor-pointer top-[38px]">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

               

            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type={showConfirmPassword ? ("text"):("password")}
                value={formData.confirmpass}
                name="confirmpass"
                onChange={changeHandler}
                placeholder="Confirm Password"
                className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5
                p-[12px] "/>
                <span onClick={ ()=>setShowConfirmPassword((prev)=>!prev)}
                className="absolute right-3 cursor-pointer top-[38px]">
                    {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

               

            </label>
                </div>
                <button className="bg-yellow-50 rounded-[8px] text-black font-medium w-full px-[12px] py-[8px] mt-8 ">
                    Create Account
                </button>
            </form>
        </div>
    )
}