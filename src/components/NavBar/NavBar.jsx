"use client"; 

import { ChartLine, Clock3, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React from "react";

const NavBar = () => {
  const pathname = usePathname(); 
  const getLinkClass = (href) => {
    const baseClass = "px-3 py-2 rounded-lg transition-colors duration-200";

   
    if (pathname === href) {
      return `${baseClass} bg-[#244D3F] text-white font-semibold   `; 
    }

   
    return `${baseClass} text-gray-700 hover:bg-gray-100`;
  };

  
  const links = (
    <>
      <li>
        <Link href="/" className={getLinkClass("/")}>
          <House /> Home
        </Link>
      </li>
      <li>
        <Link href="/timeline" className={getLinkClass("/timeline")}>
          <Clock3 /> Timeline
        </Link>
      </li>
      <li>
        <Link href="/stats" className={getLinkClass("/stats")}>
          <ChartLine /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="mx-7 md:mx-20 ">
      <div className="navbar flex justify-between items-center shadow-b-sm px-0">
        <div>
          <Link href="/" className="font-bold text-[#1F2937] text-3xl ">
            Keen<span className="text-[#244D3F] ">Keeper</span>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-base font-semibold text-[#64748B] menu-sm bg-[#ffffff3d] dropdown-content rounded-box  mt-5 w-28 p-1 shadow gap-1"
            >
              {links}
            </ul>
          </div>

          <div className="hidden lg:flex">
            <ul className="menu  text-base font-semibold text-[#64748B] menu-horizontal px-1 gap-2">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
