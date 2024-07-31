"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_blue.png";
import { toast } from 'react-toastify';
import { removeFromLocalStorage } from "@/utils/localstorage";


interface CommunicateProps {
  // menu: number;
}

const Header: React.FC<CommunicateProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuShow, setMenuShow] = useState<boolean>(false);
  
  const toggleEvent = () => {
    console.log('sss');
    
    setMenuShow(!menuShow);
  };
  return (
    <>
      <div className="bg-white md:flex-row sm:flex-col flex justify-between items-center border-b px-4 py-1 md:px-24 sticky top-0 z-30">
        <div className="flex justify-between w-full md:w-auto sm:h-auto">
          <Link href="/">
            <Image
              src={Logo}
              alt="this is logo"
              className="w-[75%] h-[100%]"
              width={147}
              height={37}
            />
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
              data-drawer-toggle="menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:flex-row justify-between items-center">
          <ul className="flex justify-between items-center space-x-1">
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Panel do Gestor")}`}
                className="flex text-orange-500 justify-between items-center hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text[12px]"
              >
                <span>Painel do Gestor</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Minha Escola")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Minha Escola</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Minhas Ofertas")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Minhas Ofertas</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Meus Alunos")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Meus Alunos</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Servios")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Servios</span>
              </Link>
            </li>
            <li className="">
              <div className="flex justify-between items-center text-sm border rounded-lg p-1 border-gray-500 text-gray-500 space-x-1">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    className="text-orange-400"
                    fill="currentColor"
                    d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"
                  />
                  <path
                    className="text-orange-400"
                    fill="currentColor"
                    d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"
                  />
                </svg>
                <button  className="flex flex-col text-xs" onClick={() => {toggleEvent()}}>
                  <span> Teste 01 </span>
                  <span className="text-orange-500"> Dados de conta </span>
                </button>
                {menuShow && 
                    <div className="origin-top-right absolute right-24 mt-[85px] text-center w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <a
                        onClick={() => {
                          removeFromLocalStorage('token');
                          window.location.href='/';
                          toast.success("Successfully logged out....")
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sair
                      </a>
                    </div>
                }
              </div>
            </li>
          </ul>
        </div>
        {/* Drawer Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-full justify-center bg-slate-200 z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-y-[40px]" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-5 p-4">
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Painel do Gestor")}`}
                className="flex text-orange-500 justify-between items-center hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text[12px]"
              >
                <span>Painel do Gestor</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Minha Escola")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Minha Escola</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Minhas Ofertas")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Minhas Ofertas</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Meus Alunos")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Meus Alunos</span>
              </Link>
            </li>
            <li className="">
              <Link
                href={`/admin/${encodeURIComponent("Servios")}`}
                className="text-orange-500 justify-between items-center  hover:rounded-full hover:bg-gray-300 p-3 md:text-[15px] sm:text-[12px]"
              >
                <span>Servios</span>
              </Link>
            </li>
            <li className="">
              <div className="flex justify-between items-center text-sm border rounded-lg p-1 border-gray-500 text-gray-500 space-x-1">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path
                    className="text-orange-400"
                    fill="currentColor"
                    d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"
                  />
                  <path
                    className="text-orange-400"
                    fill="currentColor"
                    d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"
                  />
                </svg>
                <button 
                  className="flex flex-col text-xs"
                  onClick={() => {toggleEvent()}}
                >
                  <span> Teste 01 </span>
                  <span className="text-orange-500"> Dados de conta </span>
                </button>
                {menuShow && 
                    <div className="origin-top-right absolute right-0 mt-20 text-center w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <a
                        onClick={() => {
                          removeFromLocalStorage('token');
                          window.location.href='/';
                          toast.success("Successfully logged out....")
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sair
                      </a>
                    </div>
                }
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
