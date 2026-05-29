import React from "react";
import FriendsDetails from "../../../../public/friendsData.json";
import Link from "next/link";

'use clint'

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
        <h1 className="p-32 font-black text-red-600 text-7xl container text-center mx-auto">Friend Not Found !</h1>
    );
  }

  return (
    <div>
      <div>
        
      </div>
    </div>
  );
};

export default DetailsPage;
