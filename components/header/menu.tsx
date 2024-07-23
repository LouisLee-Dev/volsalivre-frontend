'use client';

import { useState } from "react";
import Link from "next/link";

interface MenuProps {
  menu: number;
}

const Menu: React.FC<MenuProps> = ({ menu }) => {
  const [educ, setEduc] = useState<boolean>(false);
  return (
    <>
      {/* <div className="hidden lg:flex gap-20 text-white justify-center z-10">
      <div className="relative flex flex-col gap-1 group/como">
        <div className="flex justify-center gap-5 cursor-pointer">
          <span>Como funciona</span>
          <span className="group-hover/como:rotate-180 transition">
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
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div className="absolute group-hover/como:flex flex-col hidden top-full">
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.881 16H7.119a1 1 0 0 1-.772-1.636l4.881-5.927a1 1 0 0 1 1.544 0l4.88 5.927a1 1 0 0 1-.77 1.636Z"
            />
          </svg>
          <div className="w-[300px] border border-slate-300 p-5 text-slate-500 bg-white flex flex-col gap-2">
            <p className="text-xl font-semibold text-slate-600">Como funciona</p>
            <div className="flex gap-2">
              <span>
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-white"
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
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Search for you school</p>
                <p>Choose the ideal bag.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-white"
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Secure your bag</p>
                <p>Sign up and follow the steps for registration.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Evaluate the school</p>
                <p>
                  Evaluate the school and contribute to Brazilian education.
                </p>
              </div>
            </div>
            <br className="border-b border-slate-200" />
            <div className="flex gap-2">
              <span>
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-white"
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <p>Duvidas? Acesse nossas</p>
                <p className="font-semibold text-purple-600">
                  Perguntas Frequentes
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <p>Fale com a gente no</p>
                <p className="font-bold text-purple-600">WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-1 group/como">
        <div className="flex justify-center gap-5 cursor-pointer">
          <span>Níveis de ensino</span>
          <span className="group-hover/como:rotate-180 transition">
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
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div className="absolute group-hover/como:flex flex-col hidden top-full">
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.881 16H7.119a1 1 0 0 1-.772-1.636l4.881-5.927a1 1 0 0 1 1.544 0l4.88 5.927a1 1 0 0 1-.77 1.636Z"
            />
          </svg>
          <div className="w-60 border border-slate-300 p-5 text-slate-500 bg-white flex flex-col transition-all">
            <ul className="flex flex-col gap-2 text-purple-600">
              <li className="hover:bg-slate-100 cursor-pointer p-3 border-b border-slate-200">
                <Link href={"/escola/etapa-de-ensino"}>
                  Child education
                </Link>
              </li>
              <li className="hover:bg-slate-100 cursor-pointer p-3 border-b border-slate-200">
                <Link href={'/escola/etapa-de-ensino'} >
                  Elementary School 1
                </Link>
              </li>
              <li className="hover:bg-slate-100 cursor-pointer p-3 border-b border-slate-200">
                <Link href={'/escola/etapa-de-ensino'} >
                  Elementary School 2
                </Link>
              </li>
              <li className="hover:bg-slate-100 cursor-pointer p-3 border-b border-slate-200">
                <Link href={'/escola/etapa-de-ensino'} >
                  High school
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <Link href={'/artigos'}>
          <span>Revista</span>
        </Link>
      </div>
      <div className="cursor-pointer">
        <Link href={'/maisAlunos'}>
          <span>Cadastre sua escola</span>
        </Link>
      </div>
    </div> */}
      <div className={`${menu === 1 ? "flex" : "hidden"} lg:hidden flex-col sm:px-5 justify-between text-xl h-[80%]`}>
        <ul className="flex flex-col gap-4 text-gray-700 text-[16px] font-semibold">
          <li className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
            School
          </li>
          <li className="border-b border-slate-300 cursor-pointer">
            <div className="flex flex-col gap-4">
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setEduc(!educ)}
              >
                <p>Níveis de ensino</p>
                <span className={`${educ && "rotate-180"} transition`}>
                  <svg
                    className="w-6 h-6 text-slate-500"
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
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={`${educ ? "flex" : "hidden"} flex-col ml-5 gap-4`}
              >
                <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                  <Link href={"/escola/etapa-de-ensino"}>
                    Child education
                  </Link>
                </p>
                <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                  <Link href={"/escola/etapa-de-ensino"}>
                    Elementary School 1
                  </Link>
                </p>
                <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                  <Link href={"/escola/etapa-de-ensino"}>
                    Elementary School 2
                  </Link>
                </p>
                <p className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
                  <Link href={"/escola/etapa-de-ensino"}>
                    High school
                  </Link>
                </p>
              </div>
            </div>
          </li>
          <li className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
            <Link href={'/artigos'}>Revista</Link>
          </li>
          <li className="border-b border-slate-300 cursor-pointer hover:bg-slate-50">
            <Link href={`/mais-alunos`}>Cadastre sua escola</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
