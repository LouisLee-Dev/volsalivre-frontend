'use client';

import React, {useState} from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo_blue.png";

const Header = () => {
    const [searchShow, setSearchShow] = useState<boolean>(false);
    const [blogMenu, setblogMenu] = useState<boolean>(false);
    return (
        <nav className="bg-slate-0">
            <div className=" flex justify-between p-3 md:px-36 border-b">
                <div className="flex justify-start">
                    <a href="/">
                        <Image
                            src={Logo}
                            alt="this is logo"
                            className="w-[90%] h-[90%]"
                            width={147}
                            height={37}
                        />
                    </a>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex text-gray-500 text-sm flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <li><span className="text-gray-700">HOME</span></li>
                            <li><span>MATERIAIS EDUCATIVOS</span></li>
                            <li><span>PESQUISAS</span></li>
                        </ul>
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex text-gray-500 items-center text-sm flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li className="flex justify-center">
                            <button data-popover-target="popover-click" data-popover-trigger="click"  onClick={() => setSearchShow(!searchShow)} className="text-3xl hover:text-orange-500">
                                {
                                    searchShow ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"/></svg>
                                }
                            </button>
                        </li>
                        <li className="flex justify-between gap-2">
                            <a href="https://www.instagram.com/gestaomelhorescola/" className="bg-[#262626] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path className="text-white" fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCBm-vAh8QJrbYPO2omGGdnw" className="bg-[#cd201f] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path className="text-white" fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/gestaomelhorescola/" className="bg-[#3b5998] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path  className="text-white" fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/gestaomelhorescola/" className="bg-[#0077b5] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path className="text-white" fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                    <path className="text-white" d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="flex justify-between items-center"><a href="#" className="text-white border bg-[#ff6300] rounded-full p-3">SEJA UM PARCEIRO</a></li>
                    </ul>
                </div>
                <button 
                    data-collapse-toggle="mega-menu-full-cta" 
                    type="button"
                    onClick={() => setblogMenu(!blogMenu)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-cta" aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {/* Drawer Menu */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${blogMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setblogMenu(false)}></div>
                <div className={`fixed top-0 left-0 h-full w-[85%] opacity-90 justify-center bg-white z-50 transform transition-transform duration-300 ${blogMenu ? 'translate-x-[0px]' : '-translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={() => setblogMenu(false)} className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-5 p-4">
                        <li className="">
                            <form className="max-w-md mx-auto">
                                <div className="flex">
                                    <div className="relative w-full">
                                        <input type="search" className="block px-4 py-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar…" required />
                                        <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#235787] border border-blue-700">
                                            <svg className="w-8 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </li>
                        <li><a href="#partners" className="text-gray-400  p-4 text-[15px]">Home</a></li>
                        <li><a href="#choices" className="text-gray-400  p-4 text-[15px]">Materials Educativos</a></li>
                        <li><a href="#evidence" className="text-gray-400  p-4 text-[15px]">Resquisas</a></li>
                        <li><a href="#" className="text-gray-400  p-4 text-[18px]">Entrar</a></li>
                        <li className="flex justify-start gap-2">
                            <a href="https://www.instagram.com/gestaomelhorescola/" className="bg-[#262626] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path className="text-white" fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCBm-vAh8QJrbYPO2omGGdnw" className="bg-[#cd201f] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path className="text-white" fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/gestaomelhorescola/" className="bg-[#3b5998] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path  className="text-white" fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/gestaomelhorescola/" className="bg-[#0077b5] rounded-full">
                                <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path className="text-white" fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                    <path className="text-white" d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="flex justify-between items-center"><a href="#" className="text-white border bg-[#ff6300] rounded-full p-2.5">SEJA UM PARCEIRO</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;