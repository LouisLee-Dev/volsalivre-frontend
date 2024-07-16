"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_common.png";

interface CommunicateProps {
    // menu: number;
}

const Header: React.FC<CommunicateProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div
                className="bg-[#13171a] md:flex-row sm:flex-col flex justify-between items-center px-4 py-3 md:px-28 sticky top-0 z-30"
            >
                <div className="flex justify-between w-full md:w-auto sm:h-auto">
                    <a href="/">
                        <Image
                            src={Logo}
                            alt="this is logo"
                            className="w-full h-auto"
                            width={147}
                            height={37}
                        />
                    </a>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white"
                            data-drawer-toggle="menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex md:flex-row justify-between items-center space-x-10">
                    <ul className="flex flex-row justify-between items-center space-x-10">
                        <li><a href="#advantages" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Vantagens</a></li>
                        <li><a href="#partners" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Escolas parceiras</a></li>
                        <li><a href="#choices" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Planos</a></li>
                        <li><a href="#evidence" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]">Cases</a></li>
                        <li><a href="#" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[18px]">Entrar</a></li>
                        <li><a className="text-white bg-orange-500 p-3 rounded-full font-semibold text-[16px]">Parceiro</a></li>
                    </ul>
                </div>
                {/* Drawer Menu */}
                <div className={`fixed top-0 left-0 h-full w-full justify-center bg-[#13171a] z-50 transform transition-transform duration-300 ${isOpen ? 'translate-y-[69px]' : '-translate-y-full'}`}>
                    <ul className="flex flex-col items-center space-y-5 p-4">
                        <li><a href="#advantages" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]" onClick={() => setIsOpen(false)}>Vantagens</a></li>
                        <li><a href="#partners" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]" onClick={() => setIsOpen(false)}>Escolas parceiras</a></li>
                        <li><a href="#choices" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]" onClick={() => setIsOpen(false)}>Planos</a></li>
                        <li><a href="#evidence" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[15px]" onClick={() => setIsOpen(false)}>Cases</a></li>
                        <li><a href="#" className="text-orange-500 font-semibold hover:rounded-full hover:bg-[#f3a16b54] p-4 text-[18px]" onClick={() => setIsOpen(false)}>Entrar</a></li>
                        <li><a className="text-white bg-orange-500 p-3 rounded-full font-semibold text-[16px]" onClick={() => setIsOpen(false)}>Parceiro</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;