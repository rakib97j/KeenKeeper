"use client";
import { Plus } from "lucide-react";
import React from "react";

import FriendPage from "@/app/friend/page";
import { ToastContainer ,toast } from "react-toastify";

const Hero = () => {
  const notify = () => toast.error("This Function Added Soon .....");
  return (
    <div className="md:py-20 py-10 md:px-0 px-3 container mx-auto ">
      {/* First portion  */}
      <div className=" text-center">
        <h1 className="text-[#1F2937] md:font-bold font-black text-2xl md:text-5xl mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-base font-normal mb-8 ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button onClick={notify} className="btn bg-[#244D3F] border-0 mb-10">
          {" "}
          <Plus /> Add a Friend
        </button>
        <ToastContainer  />

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-8 rounded-xl shadow-lg border-0">
            <h1 className="text-[#244D3F] font-semibold text-4xl">10</h1>
            <h1 className="text-[#64748B] text-xl font-medium mt-2 ">
              Total Friends
            </h1>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-0">
            <h1 className="text-[#244D3F] font-semibold text-4xl">3</h1>
            <h1 className="text-[#64748B] text-xl font-medium mt-2 ">
              On Track
            </h1>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-0">
            <h1 className="text-[#244D3F] font-semibold text-4xl">6</h1>
            <h1 className="text-[#64748B] text-xl font-medium mt-2 ">
              Need Attention
            </h1>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-0">
            <h1 className="text-[#244D3F] font-semibold text-4xl">12</h1>
            <h1 className="text-[#64748B] text-xl font-medium mt-2 ">
              Interactions This Month
            </h1>
          </div>
        </div>

        <p className="border mb-7 text-[#E9E9E9]"></p>
      </div>

      <h1 className="font-semibold text-2xl text-[#1F2937] mb-4">
        Your Friends
      </h1>

      {/* Friends Cards  */}

      <div>
        <FriendPage></FriendPage>
      </div>
    </div>
  );
};

export default Hero;
