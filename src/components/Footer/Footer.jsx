import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto pt-20 pb-7">
      <div className="text-center">
        <h1>Keenkeeper</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p>Social Links</p>

        <ul className="cursor-pointer flex justify-center gap-4 mb-10">
          <li>
            <a href="">A</a>
          </li>
          <li>
            <a href="">V</a>
          </li>
          <li>
            <a href="">x</a>
          </li>
        </ul>

        <p className="border mb-7"></p>

        <div className="flex justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <ul className=" flex  gap-4 ">
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
