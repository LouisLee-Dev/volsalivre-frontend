"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_blue.png";
import Login from "@/components/artigos/login";
import Menu from "@/components/artigos/header/menu";
import { MenuTipCard } from "@/components/basecomponents/cards";

// const loginStatus: any = [];
const Header = () => {
  const [toenter, setToEnter] = useState<boolean>(false);
  const [menuShow, setMenuShow] = useState<boolean>(false);

  const toggleEvent = () => {
    setMenuShow(!menuShow);
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="bg-slate-50 flex flex-col md:flex-row justify-between p-3 md:p-2 shadow-xl sticky top-0 z-10">
        <div className="flex justify-center md:justify-start items-center mb-2 md:mb-0">
          <a href="/">
            <Image
              src={Logo}
              alt="this is logo"
              className="w-[75%] sm:h-auto md:h-[100%]"
              width={147}
              height={37}
            />
          </a>
        </div>
        <div className="flex md:justify-between md:flex-row sm:justify-between lg:justify-between sm:flex-row sm:w-auto justify-between  md:pl-20 items-center  sm:space-y-0 md:space-y-0 sm:space-x-0 md:space-x-4">
          <div className="relative">
            <input
              type="search"
              size={10}
              id="school"
              className=" rounded-full focus:outline-none block sm:w-auto px-3 py-1 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto"
              placeholder="Escola"
              required
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 rotate-90 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  className="text-orange-400"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              size={15}
              id="city"
              className="rounded-full focus:outline-none block px-3 py-1 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto"
              placeholder="Cidade"
              required
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center mt-2 md:mt-0">
          <Menu enter = {setToEnter} />
        </div>
      </div>
      <Login setShow={setToEnter} isShow={toenter} />
    </div>
  );
};

export default Header;
