// "use client";

import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
// import { useRouter } from "next/navigation";

const Signup = () => {

  // const router=useRouter();

  return (
    <>
      <div className="w-full h-full  px-4 pt-4 sm:pl-36 sm:pr-2  md:pl-36 md:pr-6 lg:pl-36 lg:pr-20   text-white bg-[url('/background.png')] bg-no-repeat">
        {/* Navbar */}
        <>
        <Navbar />
        </>

        <div className="pt-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 ">
          <div className=" flex items-center justify-end px-[0.5vw] mt-[5.5vh] sm:p-[2px]  w-full sm:w-auto rounded-[16px] bg-gradient-to-r from-[#a8c0eb] to-[#4b66c4]">
            <Register />
          </div>
          <div className="  sm:pt-10 flex flex-col items-start gap-2 sm:gap-6">
            <div className=" text-[4.5vw] sm:text-[3.3vw] md:text-[4.5vw] font-bold text-nowrap ">
              Advanced analytics
              <br />
              to grow your
              <br />
              business
            </div>
            <div className="text-[#e6e8ec] text-[2.5vw] sm:text-[2.5vw] md:text-[1.5vw] text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Diam ut id nisl tellus rhoncus, imperdiet
            </div>
          </div>
        </div>

        <div className="h-60 bg-gradient-to-r from-[#0097FE] from-[0%] to-[0097FE] to-[86%]" />

      </div>
    </>
  );
};

export default Signup;
