"use client";
import Link from "next/link";
import React from "react";

const FriendCard = ({ Friend }) => {
//   console.log(Friend);

  const { id, name, picture, days_since_contact, status, tags } = Friend;

  

  return (
    <Link href={`/friend/${id}`}>
      <div className=" bg-white p-6 text-center rounded-xl shadow-xl  hover:-translate-y-2 duration-300 ease-out   hover:shadow-2xl ">
        <img
          src={picture}
          alt={name}
          className="rounded-full w-20 mb-3 mx-auto"
        />
        <h1 className="text-xl font-semibold text-[#1F2937] mb-2">{name}</h1>
        <p className="text-sm text-[#64748B] font-normal">
          {days_since_contact}d ago
        </p>
        <p className="text-[#244D3F] bg-[#CBFADB] w-fit mx-auto text-sm font-bold rounded-full  p-2 my-2 ">
          {tags[0]}
        </p>
        <p
          className={`text-white  mx-auto w-fit font-medium  py-1 px-2 rounded-full  
        

       ${
         status === "Almost Due"
           ? "bg-[#EFAD44]"
           : status === "Over Due"
             ? "bg-[#EF4444]"
             : "bg-[#244D3F]"
       }
        
        `}
        >
          {status}
        </p>

        
      </div>
    </Link>
  );
};

export default FriendCard;
