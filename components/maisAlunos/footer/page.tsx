import React, {useState} from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_common.png";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between bg-[#242a2e] px-6 md:px-24 py-6 text-white">
            <div className="flex flex-row space-x-6 md:space-x-24 justify-start mb-6 md:mb-0">
                <div className="flex flex-col space-y-5">
                    <Image
                        src={Logo}
                        alt="this is logo"
                        className="w-auto h-auto"
                        width={147}
                        height={37}
                    />
                </div>
            </div>
            <div className="flex flex-row space-x-6 md:space-x-24 justify-start mb-6 md:mb-0">
                <div className="flex flex-col space-y-2 pt-4">
                    <p className="font-bold text-lg text-slate-300">E-mail</p>
                    <p className=" text-sm text-slate-300">escolaparceira@melhorescola.com</p>
                </div>
            </div>
            <div className="flex flex-row space-x-6 md:space-x-24 justify-start mb-6 md:mb-0">
                <div className="flex flex-col space-y-2 pt-4 items-center md:items-start">
                    <p className="absolute font-bold text-lg text-slate-300">PARCEIRO OFICIAL</p>
                    <Image
                        src="https://kong.quero.com/logotype-undergraduate-dark.svg"
                        alt="this is logo"
                        className="w-36 h-24"
                        width={147}
                        height={37}
                    />
                </div>
            </div>
            <div className="flex flex-row space-x-6 md:space-x-24 justify-start items-center">
                <p className="text-center md:text-left">Feito com 
                    <span className="inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"/>
                        </svg>
                    </span> pela 
                    <span className="hover:underline"> Quero Educação </span>
                </p>
            </div>
        </div>
    )
}

export default Footer;