import React from "react";
import FriendsDetails from "../../../../public/friendsData.json";
import Link from "next/link";
import { Archive, BellRing, Delete, MessageSquareText, PhoneCall, Trash2, Video } from "lucide-react";

("use clint");

export const metadata = {
  title: "Friend",
  description: "Friend page",
};

const DetailsPage = async (props) => {
  const params = await props.params;
  const { id } = params;

  const singleFriend = FriendsDetails.find(
    (friend) => friend.id === parseInt(id),
  );

  if (!singleFriend) {
    return (
      <h1 className="p-32 font-black text-red-600 text-7xl container text-center mx-auto">
        Friend Not Found !
      </h1>
    );
  }

  return (
    <div className="bg-[#F8FAFC]">
      <div className=" lg:container  mx-6 lg:mx-auto  py-20">
        <div className="md:flex flex-row  gap-6">
          {/* Left Side */}
          <div>
            {/* 1st Part */}
            <div className="bg-white p-6 shadow-lg rounded-lg mb-4 ">
              <img
                src={singleFriend.picture}
                alt={singleFriend.name}
                className="w-20 rounded-full mx-auto"
              />
              <h1 className="text-center">{singleFriend.name}</h1>
              <p
                className={`text-white  mx-auto w-fit font-medium   px-2 rounded-full  
        

       ${
         singleFriend.status === "Almost Due"
           ? "bg-[#EFAD44]"
           : singleFriend.status === "Over Due"
             ? "bg-[#EF4444]"
             : "bg-[#244D3F]"
       }
        
        `}
              >
                {singleFriend.status}
              </p>
              {/* Tags */}
              <div className="flex gap-2  ">
                <p className="text-[#244D3F] bg-[#CBFADB] w-fit mx-auto text-sm font-bold rounded-full  p-2 my-2 ">
                  {singleFriend.tags[0]}
                </p>
                <p className="text-[#244D3F] bg-[#CBFADB] w-fit mx-auto text-sm font-bold rounded-full  p-2 my-2 ">
                  {singleFriend.tags[1]}
                </p>
              </div>
              <p className="w-[254px] text-center">``{singleFriend.bio}`` </p>
              <p className="text-center">{singleFriend.email}</p>
            </div>
            {/* 2nd Part  */}
            <div>
              <div className="bg-white rounded-lg my-2 ">
                <p className="flex font-bold text-base  p-4 gap-2  justify-center border border-[#E9E9E9] rounded-sm ">
                  <BellRing /> Snooze 2 weeks
                </p>
              </div>
              <div className="bg-white rounded-lg my-2 ">
                <p className="flex font-bold text-base text-[#1F2937] p-4 gap-2  justify-center border border-[#E9E9E9] rounded-sm ">
                  <Archive /> Archive
                </p>
              </div>
              <div className="bg-white rounded-lg my-2 ">
                <p className="flex p-4 gap-2  text-red-600 font-bold text-base justify-center border border-[#E9E9E9] rounded-sm ">
                  <Trash2 />
                  Delete
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full ">
            {/* First part */}
            <div className="grid  md:grid-cols-3 gap-6">
              <div className="bg-white  py-9 px-4 shadow-lg rounded-lg text-center ">
                <p>{singleFriend.days_since_contact}</p>
                <p>Days Since Contact</p>
              </div>
              <div className="bg-white  py-9 px-4 shadow-lg rounded-lg text-center ">
                <p>{singleFriend.goal}</p>
                <p>Goal (Days)</p>
              </div>
              <div className="bg-white  py-9 px-4 shadow-lg rounded-lg text-center ">
                <p>{singleFriend.next_due_date}</p>
                <p>Next Due</p>
              </div>
            </div>
            {/* second part */}
            <div className="bg-white  py-11 px-4 shadow-lg rounded-lg text-center  my-7 ">
              <div className="flex justify-between">
                <h1>Relationship Goal</h1>
                <p className="btn">Edit</p>
              </div>
              <p className="text-start">
                Connect every <span>{singleFriend.goal}Days</span>
              </p>
            </div>
            {/* last functional part */}
            <div className="bg-white p-11  shadow-lg rounded-lg">
              <h1>Quick Check-In</h1>
              {/* Call Text btn */}
              <div className="grid grid-cols-3 gap-4  ">
                <div className="p-4 flex flex-col justify-center items-center gap-2 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg ">
                  {" "}
                  <PhoneCall /> Call
                </div>
                <div className="p-4 flex flex-col justify-center items-center gap-2 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg  ">
                  {" "}
                  <MessageSquareText /> test
                </div>
                <div className="  p-4 flex flex-col justify-center items-center gap-2 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg  ">
                  <p className="">
                    {" "}
                    <Video /> Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
