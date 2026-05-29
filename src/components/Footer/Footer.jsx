import { Shield } from "lucide-react";
import React from "react";
import Image from "next/image";
import Instagram from '../../../public/instagram.png'
import FaceBook from '../../../public/facebook.png'
import X from '../../../public/twitter.png'
import Logo from '../../../public/logo-xl.png'


const Footer = () => {
  return (
    <div className="container mx-auto pt-20 pb-7">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="Facebook" />
        </div>
        <p className="text-base font-normal text-[#ffffff80] leading-7 md:mx-0 mx-5">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-xl font-medium text-white leading-7 mt-6 mb-4">
          Social Links
        </p>

        <ul className="cursor-pointer flex justify-center gap-3 mb-10">
          <li className="p-1 bg-[#FFFFFF] rounded-full text-[#101727]">
            <a href="">
              <Image src={Instagram} alt="Instagram " />
            </a>
          </li>
          <li className="p-1 bg-[#FFFFFF] rounded-full text-[#101727]">
            <a href="">
              <Image src={FaceBook} alt="Facebook" />
            </a>
          </li>
          <li className="p-1 bg-[#FFFFFF] rounded-full text-[#101727]">
            <a href="">
              <Image src={X} alt="X" />
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
