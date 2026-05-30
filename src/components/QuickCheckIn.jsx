"use client";

import React from "react";
import { PhoneCall, MessageSquareText, Video } from "lucide-react";
import { toast } from "react-toastify";

export default function QuickCheckIn({ contactName }) {
  const handleCheckIn = (type) => {
    
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    const newEvent = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      type: type, 
      contactName: contactName,
      date: formattedDate
    };

   
    try {
      if (typeof window !== "undefined") {
        const storedTimeline = localStorage.getItem("keenkeeper_timeline");
        let timeline = [];
        if (storedTimeline) {
          try {
            timeline = JSON.parse(storedTimeline);
          } catch (e) {
            console.error("Error parsing existing timeline:", e);
          }
        }
        if (!Array.isArray(timeline)) {
          timeline = [];
        }
        
       
        timeline.push(newEvent);
        
        
        localStorage.setItem("keenkeeper_timeline", JSON.stringify(timeline));

       
        toast.success(` ${type} with ${contactName} !`);
      }
    } catch (error) {
      console.error("Failed to save check-in event:", error);
      toast.error("Failed to save check-in event.");
    }
  };

  return (
    <div className="bg-white p-9 shadow-lg rounded-lg">
      <h1 className="text-[#244D3F] text-xl font-semibold mb-4">
        Quick Check-In
      </h1>
     
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleCheckIn("Call")}
          className="w-full transform transition-all duration-300 ease-in-out hover:text-[#244D3F] hover:bg-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 p-4 flex flex-col justify-center items-center gap-2 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg text-[#1F2937] text-lg font-semibold cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#244D3F]"
        >
          <PhoneCall className="w-6 h-6" />
          <span>Call</span>
        </button>

        <button
          onClick={() => handleCheckIn("Text")}
          className="w-full transform transition-all duration-300 ease-in-out hover:text-[#244D3F] hover:bg-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 p-4 flex flex-col justify-center items-center gap-2 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg text-[#1F2937] text-lg font-semibold cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#244D3F]"
        >
          <MessageSquareText className="w-6 h-6" />
          <span>Text</span>
        </button>

        <button
          onClick={() => handleCheckIn("Video")}
          className="w-full transform transition-all duration-300 ease-in-out hover:text-[#244D3F] hover:bg-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 p-4 flex flex-col justify-center items-center gap-2 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg text-[#1F2937] text-lg font-semibold cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#244D3F]"
        >
          <Video className="w-6 h-6" />
          <span>Video</span>
        </button>
      </div>
    </div>
  );
}
