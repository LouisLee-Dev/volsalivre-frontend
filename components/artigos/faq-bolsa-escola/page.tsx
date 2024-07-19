'use client';

import React from "react";
import Image from "next/image";

interface TitleDetailProps {
    title: string
    mark: string
    detail: string
}
const TitleDetail: React.FC<TitleDetailProps> = ({ title, mark, detail }) => {
    const www = mark;
    console.log(www);

    return (
        <div className="">
            <nav className="flex flex-col md:flex-row justify-between pt-3 pb-9 px-4 md:px-24" aria-label="Breadcrumb">
                <ol className="inline-flex items-center text-xs sm:text-sm mb-3 sm:mb-0 gap-2">
                    <li>
                        <a href="/" className="text-[#ff8d39] hover:underline">Melhor Escola</a>
                    </li>
                    <span className="mx-2 text-gray-400">/</span>
                    <li className="text-gray-500" >
                        <a href="/artigos" className="hover:underline">Artigos</a>
                    </li>
                    <span className="mx-2 text-gray-400">/</span>
                    <li className="text-gray-500" >
                        <p>{title}</p>
                    </li>
                </ol>
            </nav>
            <div className="flex pt-3 justify-center py-5 text-white items-center text-center text-4xl md:text-5xl font-extrabold w-full bg-cover h-64 md:h-[330px]" style={{ backgroundImage: `url(${www})` }} >
                <span>{title}</span>
            </div>
            <div className="top-0 space-y-0 -left-12 fixed pt-[160px]">
                <div className="bg-[#4267b2] opacity-90 hover:opacity-100 p-[14px] pl-14 rounded-tr-2xl hover:rounded-r-2xl transition-all hover:translate-x-3">
                    <a href="https://www.facebook.com/sharer.php?t=Musicaliza%C3%A7%C3%A3o%20infantil%3A%20o%20que%20%C3%A9%2C%20como%20aplicar%20e%20quais%20benef%C3%ADcios%3F&u=https%3A%2F%2Fwww.melhorescola.com.br%2Fartigos%2Fmusicalizacao-infantil" className="icon_facebook" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
                <div className="bg-[#25d366] opacity-90 hover:opacity-100 p-3 pl-14 hover:rounded-r-xl transition-all  hover:translate-x-3"> 
                    <a href="https://br.linkedin.com/company/melhorescola.net" className="icon_whatapp text-2xl" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="text-white" fill="currentColor" fillRule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"/></svg>
                    </a>
                </div>
                <div className="bg-[#000000] opacity-90 hover:opacity-100 p-3 pl-14 hover:rounded-r-xl transition-all hover:pt-3 hover:translate-x-3">
                    <a href="https://twitter.com/intent/tweet?text=Musicaliza%C3%A7%C3%A3o%20infantil%3A%20o%20que%20%C3%A9%2C%20como%20aplicar%20e%20quais%20benef%C3%ADcios%3F&url=https%3A%2F%2Fwww.melhorescola.com.br%2Fartigos%2Fmusicalizacao-infantil" className="icon_facebook text-2xl" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path className="text-white" fill="currentColor" d="M9.333 6.929L14.546 1H13.31L8.783 6.147L5.169 1H1l5.466 7.783L1 15h1.235l4.779-5.436L10.83 15H15zM7.641 8.852l-.554-.776L2.68 1.911h1.898l3.557 4.977l.552.776l4.623 6.47h-1.897z"/></svg>
                    </a>
                </div>
                <div className="bg-[#95d03a] opacity-90 hover:opacity-100 p-3 pl-14 rounded-br-2xl hover:rounded-r-2xl transition-all hover:pt-3 hover:translate-x-3">
                    <a href="https://www.youtube.com/channel/UCBihaqteqgWdkI9W_PkbT6g?view_as=subscriber" className="icon_share text-2xl" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="text-white" fill="currentColor" d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.7 69.7 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TitleDetail;