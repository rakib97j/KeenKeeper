import React from "react";
import FriendsDetails from "../../../../public/friendsData.json";
import Link from "next/link";

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
        <div className="flex gap-6">
          {/* Left Side */}
          <div >
            {/* 1st Part */}
            <div className="bg-white p-6 shadow-lg rounded-lg ">
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
            <div></div>
          </div>

          {/* Right Side */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
