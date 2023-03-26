import React from "react";
import signimg from "../assets/signup.png";
import Template from "../components/Tempalate";

export default function Signup({setIsLoggedin})
{
    return (
        <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof your career"
        image={signimg}
        formtype="signup"
        setIsLoggedin={setIsLoggedin}
        />
    )
}