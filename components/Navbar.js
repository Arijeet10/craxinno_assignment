"use client"

import { useRouter } from "next/navigation";


const Navbar = () => {

  const router=useRouter()

  return (
    <>
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-4">
        <div onClick={()=>router.push("/")} className="cursor-pointer ">
          <img src="/logo.svg" alt="logo" className="" />
        </div>
        <div className=" font-medium flex items-center justify-between sm:justify-center gap-4">
          <button
            className="px-4 py-2  rounded-lg text-nowrap hover:bg-gradient-to-r hover:from-[#753dfb] hover:to-[#9e56eb]"
          >
            Sign in
          </button>
          <button
            className="px-4 py-2 border rounded-lg text-nowrap hover:bg-gradient-to-r hover:from-[#753dfb] hover:to-[#9e56eb]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
