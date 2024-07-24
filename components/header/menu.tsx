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
