"use client";

import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-[#F8FAFC] px-6 py-12 text-center selection:bg-[#244D3F] selection:text-white">
      <div className="max-w-lg w-full space-y-8">
        <div className="relative flex justify-center items-center select-none">
          <div className="absolute w-64 h-64 bg-[#244D3F] blur-[100px] rounded-full "></div>

          <h1 className="text-[11rem] md:text-[14rem] font-black text-[#244D3F] leading-none">
            404
          </h1>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Oops! This Page Not Found
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link
            href="/"
            className="btn bg-[#244D3F] border-0 font-bold text-base px-8 py-3 w-full sm:w-auto shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
