"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareText, PhoneCall, Video } from "lucide-react";



export default function TimeLinePage() {
  const [mounted, setMounted] = useState(false);
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("keenkeeper_timeline");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTimelineData(parsed);
        } else {
         
          localStorage.setItem("keenkeeper_timeline", JSON.stringify(DEFAULT_EVENTS));
          setTimelineData(DEFAULT_EVENTS);
        }
      } else {
        localStorage.setItem("keenkeeper_timeline", JSON.stringify(DEFAULT_EVENTS));
        setTimelineData(DEFAULT_EVENTS);
      }
    } catch (e) {
      console.error("Failed to load timeline from localStorage:", e);
      setTimelineData(DEFAULT_EVENTS);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#1E293B] mb-6">Timeline</h1>
          <div className="w-56 h-10 bg-gray-200 animate-pulse rounded-lg mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white p-6 border border-[#E9E9E9] rounded-lg shadow-sm h-24 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

 
  const filteredEvents = timelineData.filter((event) => {
    if (filter === "All") return true;
    return event.type.toLowerCase() === filter.toLowerCase();
  });

  
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (!isNaN(dateA) && !isNaN(dateB) && dateA !== dateB) {
      return dateB - dateA;
    }
    
    return timelineData.indexOf(b) - timelineData.indexOf(a);
  });

  const getIcon = (type) => {
    switch (type) {
      case "Text":
        return (
          <div className="p-3 bg-[#F8FAFC] border border-[#E9E9E9] text-[#64748B] rounded-full flex items-center justify-center shadow-sm">
            <MessageSquareText className="w-6 h-6" />
          </div>
        );
      case "Video":
        return (
          <div className="p-3 bg-[#F8FAFC] border border-[#E9E9E9] text-[#475569] rounded-full flex items-center justify-center shadow-sm">
            <Video className="w-6 h-6" />
          </div>
        );
      case "Call":
      default:
        return (
          <div className="p-3 bg-[#F8FAFC] border border-[#E9E9E9] text-[#1F2937] rounded-full flex items-center justify-center shadow-sm">
            <PhoneCall className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-6">Timeline</h1>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-56 p-3 bg-white border border-[#E2E8F0] rounded-lg text-base text-[#475569] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F] focus:border-[#244D3F] transition-all cursor-pointer"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

       
        {sortedEvents.length === 0 ? (
          <div className="bg-white p-12 text-center border border-[#E9E9E9] rounded-lg shadow-md">
            <p className="text-[#64748B] text-lg font-medium">No check-in events </p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-4 md:p-6 border border-[#E9E9E9] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4"
              >
                {getIcon(event.type)}
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937]">
                    {event.type}{" "}
                    <span className="text-[#64748B] font-medium  text-base">
                      with {event.contactName}
                    </span>
                  </h3>
                  <p className="text-[#64748B] text-sm mt-0.5">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}