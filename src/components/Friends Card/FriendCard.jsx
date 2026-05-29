"use client";
import React from "react";

const FriendCard = ({ Friend }) => {
//   console.log(Friend);

  const { name, picture, days_since_contact, status, tags } = Friend;

  return (
    <div className=" bg-white p-6 text-center rounded-xl shadow">
      <img src={picture} alt={name} className="rounded-full w-20 mx-auto " />
      <h1> {name}</h1>
      <p>{days_since_contact}d ago</p>
      <p>{tags[0]}</p>
      <p>{status}</p>
    </div>
  );
};

export default FriendCard;
