"use client";

import { useState, useEffect } from "react";
import React from "react";
import Login from "@/components/artigos/login";
import { MenuTipCard } from "../basecomponents/cards";
import { getFromLocalStorage, removeFromLocalStorage } from "@/utils/localstorage";

interface CommunicateProps {
  menu: number;
  setMenu: any;
}

const Communicate: React.FC<CommunicateProps> = ({ menu, setMenu }) => {
  const [toenter, setToEnter] = useState<boolean>(false);
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  useEffect(() => {
    const token = getFromLocalStorage('token');
    setLoginStatus(token);
  }, [toenter]);
  const toggleEvent = () => {
    setMenuShow(!menuShow);
  };

  // const loginStatus = getFromLocalStorage('token');

  return (
    <>
      <div className="hidden lg:flex gap-2 items-start">
        <div
          className={`flex ${
            loginStatus ? "pt-3" : "justify-center"
          } gap-2 items-center`}
        >
          <button
            onClick={() => {
              console.log("2");
            }}
          >
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
          </button>
          <button
            onClick={() => {
              console.log("q");
            }}
          >
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
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={loginStatus ? toggleEvent:() => setToEnter(!toenter)}
            className={`${loginStatus ? "flex rounded-full border bg-white px-1.5 items-center text-sm text-gray-500 space-x-1" 
              : "px-4 py-2.5 rounded-full border border-white text-white hover:bg-violet-800"}`}
          >
            <span>{loginStatus ? "H" : "Login"}</span>
          </button>
          {menuShow && <MenuTipCard />}
        </div>
      </div>

      <div
        className={`${
          menu === 1 ? "flex" : "hidden"
        } p-10 flex-col justify-between gap-2`}
      >
        <div className="flex flex-col justify-start">
          <button className="flex gap-5 py-3 justify-start items-center border-purple-400">
            <span className="bg-orange-600 rounded-full p-0.5">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
            </span>
            <span className="text-orange-600">(21) 2143-9986</span>
          </button>
          <button className="flex gap-5 py-3 justify-start items-center border-purple-400">
            <span className="">
              <svg
                className="w-10 h-10 tex-xl text-green-500 dark:text-white"
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
              <span>Talk to us at</span>
              <a href="#" className="text-orange-500">
                WhatsApp
              </a>
            </div>
          </button>
        </div>
        {loginStatus ? (
          <button className="flex gap-5 pt-10 justify-start items-center"
            onClick={() => {
              removeFromLocalStorage('token');
              setMenu(0);
            }}
          >
            <span>
              <svg
                className="text-4xl"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  className="text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80l-80-80m-192 80h256"
                ></path>
              </svg>
            </span>
            <span className="text-purple-500">
              Sair
            </span>
          </button>
        ) : (
          <button
            className="sm:mx-16 py-2 sm:px-10 text-xl rounded-full bg-orange-50 hover:bg-orange-100 border border-purple-400"
            onClick={() => {
              setToEnter(!toenter);
              setMenu(0);
            }}
          >
            To Enter
          </button>
        )}
      </div>
      <Login setShow={setToEnter}  isShow={toenter} />
    </>
  );
};

export default Communicate;
