import React from "react";
import frame from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc";


 export  default function Template({title,desc1,desc2,image,formtype,setIsLoggedin})
{
   return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
        <div className="w-11/12 max-w-[450px]">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                <span className="text-richblack-100">{desc1}</span>
                <br/>
                <span className="text-blue-100 italic">{desc2}</span>
            </p>

            {formtype==="signup" ?
            (<SignupForm setIsLoggedin={setIsLoggedin}/>) : (<LoginForm setIsLoggedin={setIsLoggedin}/>)}

            <div className=" flex w-full items-center my-4 gap-x-2">
                <div className="w-full h-[1px] bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">or</p>
                <div className="w-full h-[1px] bg-richblack-700"></div>
            </div>

            <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
             border border-richblack-700 px-[12px] py-[8px] mt-6 gap-x-2">
                <FcGoogle/>
                <p className=""> Sign in with Google</p>
            </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
            <img  src={frame}
            width={558}
            height={504}
            loading="lazy"
            alt="frame"/>

<img  src={image}
            width={558}
            height={504}
            alt="student"
            loading="lazy"
            className="absolute -top-4 right-4 "/>
        </div>
    </div>
   )
}