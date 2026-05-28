import { Shield } from "lucide-react";
import React from "react";


const Footer = () => {
  return (
    <div className="container mx-auto pt-20 pb-7">
      <div className="text-center">
        <h1 className="text-5xl font-black text-white mb-3.5">Keenkeeper</h1>
        <p className="text-base font-normal text-[#ffffff80] leading-7 md:mx-0 mx-5">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-xl font-medium text-white leading-7 mt-6 mb-4">
          Social Links
        </p>

        <ul className="cursor-pointer flex justify-center gap-3 mb-10">
          <li className="p-2.5 bg-[#FFFFFF] rounded-full text-[#101727]">
            <a href="">
              {" "}
              <Shield />{" "}
            </a>
          </li>
          <li className="p-2.5 bg-[#FFFFFF] rounded-full text-[#101727]">
            <a href="">
              {" "}
              <Shield />
            </a>
          </li>
          <li className="p-2.5 bg-[#FFFFFF] rounded-full text-[#101727]">
            <a href="">
              {" "}
              <Shield />
            </a>
          </li>
        </ul>

        <p className="border mb-7 text-[#1a886159]"></p>

        <div className="md:flex  justify-between">
          <p className="text-base text-[#fafafa50] font-medium  ">
            © 2026 KeenKeeper. All rights reserved .
          </p>

          <ul className="  md:flex  gap-6 text-base text-[#fafafa50] font-normal   ">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
