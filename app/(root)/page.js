"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";

const Homepage = () => {

  const router=useRouter()

  return (
    <>
      <div>
        <div className="pt-10 flex flex-col items-center gap-8">
        <div className="">
          <img src="/herologo.svg" alt="logo" className="" />
        </div>
        <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#0097FE]">
          Helping hands always come
          <br />
          handy when it comes to
          <br />
          building Dreams!
        </div>
        </div>
        <div className=" bg-[url('/herobg.png')] bg-no-repeat">
        <div className=" px-2 pt-[196px] pb-72 sm:px-2 sm:py-72 md:px-10 lg:px-44 flex flex-col sm:flex-row sm:items-center items-end gap-2 sm:gap-8 ">
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="text-4xl text-white font-bold text-nowrap">
              Integrated with<br/> Social Media
            </div>
            <div className="text-[#CDD0D8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              id nisl tellus rhoncus, imperdiet consequat ornare.
            </div>
            <div>
              <button onClick={()=>router.push("/register")} className=" px-4 py-2 rounded-[10px] text-white font-medium  bg-gradient-to-r from-[#6A36FF] to-[#AC5FE6] hover:bg-gradient-to-r hover:from-[#6a36ff] hover:to-[#a52dff]">
                Learn More
              </button>
            </div>
          </div>

          <div className="">
            <Card />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
