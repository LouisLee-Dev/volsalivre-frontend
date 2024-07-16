"use client";

import { useState } from "react";

interface ToEnterProps {
    isShow: boolean;
    setShow: any;
}

const ToEnter:React.FC<ToEnterProps> = ({isShow, setShow}) => {
  const [name, setName] = useState<string>("");
  const [nameVal, setNameVal] = useState<boolean>(false);
  const [cpf, setCPF] = useState<string>("");
  const [cpfVal, setCPFVal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailVal, setEmailVal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordVal, setPasswordVal] = useState<boolean>(false);

  return (
    <div className={`${isShow ? "flex" : "hidden"} fixed w-screen top-0 left-0 h-lvh justify-center items-center z-20`}>
      <div className="absolute w-screen h-lvh bg-slate-700 opacity-50"></div>
      <div className="flex flex-col gap-6 mb-6 md:grid-cols-3 bg-white rounded-lg p-10 z-50">
        <span className="self-end cursor-pointer" onClick={()=>setShow(false)}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </span>
        <p className="text-3xl font-semibold">Welcome to Best School!</p>
        <div>
          <div>
            <label
              htmlFor="filled_success"
              className={`font-bold px-2 ${
                nameVal === true &&
                (name !== "" ? "text-green-500" : "text-red-500")
              }`}
            >
              Full name
            </label>
            <input
              type="text"
              aria-describedby="filled_success_help"
              className="block rounded-full px-5 py-1 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameVal(true)}
            />
          </div>
          <p
            id="filled_success_help"
            className={`${nameVal ? "block" : "hidden"} ${
              name !== "" ? "text-green-500" : "text-red-500"
            } mt-2 text-xs text-green-600 dark:text-green-400 px-2`}
          >
            <span className="font-medium">
              {name !== ""
                ? "Well done!"
                : "The Full name field is mandatory!!!"}
            </span>
          </p>
        </div>
        <div>
          <div>
            <label
              htmlFor="filled_success"
              className={`font-bold px-2 ${
                cpfVal === true &&
                (cpf !== "" ? "text-green-500" : "text-red-500")
              }`}
            >
              CPF
            </label>
            <input
              type="text"
              aria-describedby="filled_success_help"
              className="block rounded-full px-5 py-1 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
              placeholder="Enter your CPF"
              value={cpf}
              onChange={(e) => setCPF(e.target.value)}
              onBlur={() => setCPFVal(true)}
            />
          </div>
          <p
            id="filled_success_help"
            className={`${cpfVal ? "block" : "hidden"} ${
              cpf !== "" ? "text-green-500" : "text-red-500"
            } mt-2 text-xs text-green-600 dark:text-green-400 px-2`}
          >
            <span className="font-medium">
              {cpf !== "" ? "Well done!" : "The CPF field is mandatory!!!"}
            </span>
          </p>
        </div>
        <div>
          <div>
            <label
              htmlFor="filled_success"
              className={`font-bold px-2 ${
                emailVal === true &&
                (email.includes("@") ? "text-green-500" : "text-red-500")
              }`}
            >
              Email
            </label>
            <input
              type="text"
              aria-describedby="filled_success_help"
              className="block rounded-full px-5 py-1 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailVal(true)}
            />
          </div>
          <p
            id="filled_success_help"
            className={`${emailVal ? "block" : "hidden"} ${
              email !== "" ? "text-green-500" : "text-red-500"
            } mt-2 text-xs text-green-600 dark:text-green-400 px-2`}
          >
            <span className="font-medium">
              {email.includes("@")
                ? "Well done!"
                : "The CPF field is mandatory!!!"}
            </span>
          </p>
        </div>
        <div>
          <div>
            <label
              htmlFor="filled_success"
              className={`font-bold px-2 ${
                passwordVal === true &&
                (password !== "" ? "text-green-500" : "text-red-500")
              }`}
            >
              Create a password
            </label>
            <input
              type="text"
              aria-describedby="filled_success_help"
              className="block rounded-full px-5 py-1 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordVal(true)}
            />
          </div>
          <p
            id="filled_success_help"
            className={`${passwordVal ? "block" : "hidden"} ${
              password !== "" ? "text-green-500" : "text-red-500"
            } mt-2 text-xs text-green-600 dark:text-green-400 px-2`}
          >
            <span className="font-medium">
              {password !== "" ? "Well done!" : "The CPF field is mandatory!!!"}
            </span>
          </p>
        </div>
        <button className="bg-orange-600 text-white py-2 rounded-full hover:bg-orange-700">
          <span>Create an account</span>
        </button>
      </div>
    </div>
  );
};

export default ToEnter;
