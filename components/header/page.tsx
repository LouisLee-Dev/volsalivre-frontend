"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_common.png";
import SearchList from "./searchList";
import Communicate from "./communicate";
import Menu from "./menu";

const Header = () => {
  const [menu, setMenu] = useState<number>(0);  
  
  return (
    <div className="flex flex-col items-center lg:p-4 p-2 gap-4 bg-[#7D00E6]">
      <div className={`flex ${menu === 1 ? "flex-col fixed top-0 left-0 w-full h-full bg-white lg:w-[85%] z-20" : "space-y-1"} lg:gap-5`}>
        <div className="lg:flex grid grid-cols-1 lg:justify-center 2xl:gap-10 gap-2">
          <div className={`${menu === 1 ? "hidden" : "flex"} flex-col gap-2`}>
            <div className='flex justify-between'>
              <a href="/">
                <Image
                  src={Logo}
                  alt="this is logo"
                  className="w-auto h-auto"
                  width={147}
                  height={50}
                />
              </a>
              {/*  list search menu button start */}
              <button className="block lg:hidden" onClick={() => setMenu(1)}>
                <span>
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M5 7h14M5 12h14M5 17h14"
                    />
                  </svg>
                </span>
              </button>
              {/* list search menu button end */}    
            </div>
            <div className="flex items-center relative lg:hidden">
              <input
                type="text"
                className="px-5 text-xl py-2 rounded-full w-full"
                placeholder="Search for scholarships"
                onClick={() => setMenu(2)}
              />
              <span className="absolute right-3 bg-purple-600 p-[7px] rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className={`flex flex-col justify-start 2xl:gap-10 lg:gap-2 ${menu === 1 ? "flex" : "lg:static"}`}>
            <SearchList menu={menu} setMenu={setMenu} />
            <Menu menu={menu} />
          </div>
        </div>
        <div className="relative">
          <Communicate menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
