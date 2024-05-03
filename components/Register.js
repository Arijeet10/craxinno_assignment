"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


const Register = () => {

    //for navigation
    const router=useRouter();



    //show or hide password 
    const [inputType,setInputType]=useState("password");

    //store sign up data
    const [signupData,setSignupData]=useState({
        name:"",
        email:"",
        password:"",
    })

    //function to sign up
    const handleSignUp=()=>{
        if(signupData.name&&signupData.email&&signupData.password){
            console.log(signupData);
            setSignupData({
                name:"",
                email:"",
                password:"",
            })
            router.push("/");
        }else{
            alert("Enter Data to Sign up")
        }
    }

    return ( 
        <>
            <div className="w-auto sm:w-[300px] lg:w-[400px] text-xs  ">
                <div className="px-6 py-4 sm:py-6 sm:pt-14 text-white text-2xl sm:text-xl md:text-2xl text-center text-nowrap font-bold border-x border-t border-[#a8c8f0] border-r-[#4c6ac5] border-t-[#7199dd] rounded-t-[16px] bg-gradient-to-r from-[#7aa3e4] to-[#374fb9]">
                    Create Your Account
                </div>

                {/* Form Input Section */}
                <div className=" px-6 py-2 sm:py-4 border-x border-[#a8c8f0] border-r-[#4c6ac5]  text-[#cdd0d8] flex flex-col gap-4 bg-gradient-to-r from-[#7aa3e4] to-[#374fb9]">
                    <div className=" rounded-lg ">
                        <input 
                            type="text"
                            placeholder="Enter your name"
                            className="px-4 py-3 text-white  border border-[#cdd0d8] focus:border-white bg-gradient-to-r from-[#547acf] to-[#354bb1] rounded-lg w-full focus:outline-none"
                            value={signupData.name}
                            onChange={(e)=>setSignupData({...signupData,name:e.target.value})}
                        />
                    </div>
                    <div className=" rounded-lg ">
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 text-white border border-[#cdd0d8] focus:border-white bg-gradient-to-r from-[#547acf] to-[#354bb1] rounded-lg w-full focus:outline-none"
                            value={signupData.email}
                            onChange={(e)=>setSignupData({...signupData,email:e.target.value})}
                        />
                    </div>
                    <div className="relative rounded-lg flex items-center justify-between ">
                        <input 
                            type={inputType}
                            placeholder="Password"
                            className="px-4 py-3 text-white border border-[#cdd0d8] focus:border-white bg-gradient-to-r from-[#547acf] to-[#354bb1] rounded-lg w-full focus:outline-none"
                            value={signupData.password}
                            onChange={(e)=>setSignupData({...signupData,password:e.target.value})}
                        />
                        <div>
                        {inputType=="password"?(
                            <FaRegEye onClick={()=>setInputType("text")} className=" absolute top-2/4 right-4 translate-y-[-50%] text-[#cdd0d8] cursor-pointer w-5 h-5" />
                        ):(
                            <FaRegEyeSlash onClick={()=>setInputType("password")} className=" absolute top-2/4 right-4 translate-y-[-50%] text-[#cdd0d8] cursor-pointer w-5 h-5" />
                        )}
                        </div>
                    </div>
                </div>

                <div className="sm:pb-20 px-6 py-2 sm:py-4 text-white  border-x border-b border-[#a8c8f0] border-r-[#4c6ac5] border-b-[#7199dd] rounded-b-[16px] font-medium flex flex-col gap-2 bg-gradient-to-r from-[#7aa3e4] to-[#374fb9]">
                    <div className="w-full text-nowrap">
                        By Clicking "Register" you agree <span className="text-[#66c1ff] hover:border-b hover:border-[#66c1ff] cursor-pointer">Privacy Policy</span>
                    </div>
                    <div className="">
                        {/* Sign up form data */}
                        <button onClick={()=>handleSignUp()} className="w-full px-4 py-3 font-bold rounded-lg bg-gradient-to-r from-[#753dfb] to-[#9e56eb] hover:bg-gradient-to-r hover:from-[#6a36ff] hover:to-[#a52dff]">
                            Register
                        </button>
                    </div>
                    <div>
                        Already have an account? <span className="text-[#66c1ff] hover:border-b hover:border-[#66c1ff] cursor-pointer">Sign In</span>
                    </div>
                </div>

            </div>


        </>
     );
}
 
export default Register;