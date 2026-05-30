"use client";

import React, { useState, useEffect } from "react";




const StatsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [timelineData, setTimelineData] = useState([]);
  const [hoveredSlice, setHoveredSlice] = useState(null);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("keenkeeper_timeline");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTimelineData(parsed);
        } else {
          setTimelineData([]);
        }
      } else {
        setTimelineData([]);
      }
    } catch (e) {
      console.error("Failed to load timeline for stats:", e);
      setTimelineData([]);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#FFFFFF] min-h-screen py-16 flex flex-col items-center">
        <div className="w-full max-w-4xl px-6">
          <div className="h-12 w-80 bg-gray-200 animate-pulse rounded-lg mb-8"></div>
          <div className="bg-white border border-[#E9E9E9] rounded-lg p-8 md:p-12 shadow-sm min-h-[480px] animate-pulse"></div>
        </div>
      </div>
    );
  }

  
  let textCount = 0;
  let callCount = 0;
  let videoCount = 0;

  timelineData.forEach((event) => {
    if (!event || typeof event !== "object") return;
    const type = typeof event.type === "string" ? event.type.toLowerCase() : "";
    if (type === "text") textCount++;
    else if (type === "call") callCount++;
    else if (type === "video") videoCount++;
  });

  const total = textCount + callCount + videoCount;


  const categories = [
    {
      name: "Text",
      count: textCount,
      color: "#8B5CF6",
      bulletColor: "#A855F7"
    },
    {
      name: "Call",
      count: callCount,
      color: "#244D3F",
      bulletColor: "#244D3F"
    },
    {
      name: "Video",
      count: videoCount,
      color: "#22C55E",
      bulletColor: "#22C55E"
    }
  ];

  
  const radius = 40;
  const strokeWidth = 9.5;
  const circumference = 2 * Math.PI * radius; 

 
  const gapSizeUnits = total > 1 ? 5 : 0;
  const gapSizeDegrees = total > 1 ? (gapSizeUnits / circumference) * 360 : 0;

  let accumulatedPercent = 0;
  const chartSlices = categories.map((cat) => {
    const count = cat.count;
    const percent = total > 0 ? count / total : 0;
    
    const strokeLength = percent > 0 ? Math.max(0, (percent * circumference) - gapSizeUnits) : 0;
    const strokeOffset = circumference - strokeLength;
    const rotateAngle = (accumulatedPercent * 360) - 90 + (gapSizeDegrees / 2);
    accumulatedPercent += percent;

    return {
      ...cat,
      percent,
      strokeLength,
      strokeOffset,
      rotateAngle
    };
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 flex flex-col items-center">
      <div className="w-full max-w-4xl px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-[40px] font-bold text-[#1F2937] mb-8 tracking-tight text-left">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-[#E9E9E9] rounded-lg p-8 md:p-12 shadow-sm min-h-[480px] flex flex-col justify-between">
          <div className="text-left">
            <h2 className="text-[#244D3F] font-semibold text-xl">
              By Interaction Type
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center my-8">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {total === 0 ? (
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke="#F1F5F9"
                    strokeWidth={strokeWidth}
                  />
                ) : (
                  chartSlices.map((slice) => {
                    if (slice.count === 0) return null;

                    const isHovered =
                      hoveredSlice && hoveredSlice.name === slice.name;

                    return (
                      <circle
                        key={slice.name}
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="transparent"
                        stroke={slice.color}
                        strokeWidth={isHovered ? strokeWidth + 2 : strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={slice.strokeOffset}
                        transform={`rotate(${slice.rotateAngle} 60 60)`}
                        className="transition-all duration-300 ease-out cursor-pointer"
                        style={{
                          opacity: hoveredSlice && !isHovered ? 0.6 : 1,
                        }}
                        onMouseEnter={() => setHoveredSlice(slice)}
                        onMouseLeave={() => setHoveredSlice(null)}
                      />
                    );
                  })
                )}
              </svg>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                  hoveredSlice && hoveredSlice.name !== cat.name
                    ? "opacity-40"
                    : "opacity-100"
                }`}
                onMouseEnter={() => setHoveredSlice(cat)}
                onMouseLeave={() => setHoveredSlice(null)}
              >
                <span
                  className="text-5xl leading-none"
                  style={{ color: cat.bulletColor }}
                >
                  •
                </span>
                <span className="text-sm font-medium text-[#64748B]">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
