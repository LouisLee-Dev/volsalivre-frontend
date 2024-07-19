'use client';

import React, {useState} from "react";
import Image from "next/image";
import Link from 'next/link'

let article = [
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
{
    mark:"https://img.imageboss.me/me/cdn/quality:50/20240619170345659.jpg ",
    title:"Musicalização infantil: o que é, como aplicar e quais benefícios?",
    detail:"Se tem música, a criançada já anima! E a musicalização infantil é um tipo de abordagem na educação que pode atrair ainda mais...",
},
]

const Dashboard = () => {

    const showDetail = (e:any) => {
        console.log(e);
    }

    return (
        <>            
            <div className="flex flex-col bg-[#3e3b60] ">
                <div className="flex flex-col justify-between items-center text-center font-semibold text-orange-400 text-[42px] lg:p-9 p-7 gap-4 ">
                    Revista Melhor Escola
                </div>
            </div>
            <div className="flex flex-col md:px-24 px-4 py-10 space-y-14">
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none scale-150">
                            <svg className="w-4 h-4 text-gray-500 rotate-90 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path className="text-orange-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input 
                            type="search" 
                            size={18} id="article" 
                            className="rounded-full focus:outline-none block w-full px-16 py-[11px] pl-5 text-[16px] text-gray-900 border border-gray-300 focus:ring-3 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procurar Artigos" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 h-auto">
                    { article.map((result: any, index: number) =>(
                        <div onClick={(e: any) => {showDetail(result)}} key={index} className="flex rounded-sm h-[160px] hover:ring-2 hover:ring-slate-400">
                            <Link
                                href="/artigos/[title]" 
                                as={`/artigos/${encodeURIComponent(result.title)}`}
                                className="flex flex-row p-4 justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <Image className=" rounded-md card-img card-article-img w-2/5 " src={result.mark} alt=" Musicalização infantil: o que é, como aplicar e quais benefícios? " width={100} height={100}/>
                                <div className="flex flex-col justify-between pt-0 pl-4 items-start leading-normal">
                                    <span className=" text-[14px] tracking-tight text-gray-700 dark:text-white"> {result.title} </span>
                                    <p className="text-xs text-ellipsis text-gray-500 pb-1 overflow-hidden ... ">{result.detail}</p>
                                    <p className="text-xs text-orange-500 underline">Saiba mais</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="top-0 space-y-0 -left-10 fixed pt-36">
                <div className="text-slate-400 pl-11 text-sm">Siga!</div>
                <div className="bg-[#627aad] opacity-90 hover:opacity-100 p-2 pl-12 rounded-tr-xl hover:rounded-r-xl transition-all hover:translate-x-3">
                    <a href="https://www.facebook.com/melhorescola.com.br" className="icon_facebook" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
                <div className="bg-[#3392c4] opacity-90 hover:opacity-100 p-3 pl-14 hover:rounded-r-xl transition-all  hover:translate-x-3"> 
                    <a href="https://br.linkedin.com/company/melhorescola.net" className="icon_facebook" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="text-white" fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"/></svg>
                    </a>
                </div>
                <div className="bg-[#e0599b] opacity-90 hover:opacity-100 p-3 pl-14 hover:rounded-r-xl transition-all hover:pt-3 hover:translate-x-3">
                    <a href="https://www.instagram.com/melhor.escola/" className="icon_facebook" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="text-white" fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"/><path className="text-white" fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"/></svg>
                    </a>
                </div>
                <div className="bg-[#ea4f4d] opacity-90 hover:opacity-100 p-3 pl-14 rounded-br-xl hover:rounded-r-xl transition-all hover:pt-3 hover:translate-x-3">
                    <a href="https://www.youtube.com/channel/UCBihaqteqgWdkI9W_PkbT6g?view_as=subscriber" className="icon_facebook" target="_blank" rel="noopener noreferrer" aria-label="Visite nossa página no Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="text-white" fill="currentColor" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"/></svg>
                    </a>
                </div>
            </div>
        </>
    )
}


export default Dashboard;