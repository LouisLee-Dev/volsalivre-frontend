'use client';

import { useState, useEffect } from "react";

const Minhaescola: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-3xl font-bold">
                Dados da escola
            </p>
            <p>Esta sera a identidade da sua escola em noso portal, todas as informacoes abaixo estarao na sua pagina. E importante que todos os campos estejsm preenchidos e conferidos antes do envio.</p>
            <p className="p-5 bg-orange-200 font-semibold text-orange-700 rounded-lg">
                As alteracoes podem levar algumas horas ate aparecerem no site.
            </p>
            <div className="flex justify-between items-center border bg-slate-50 p-12 rounded-lg">
                <div className="flex gap-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                        <path fill="#a00ec8" d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64m61 112H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3M224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z" />
                    </svg></span>
                    <span className="font-semibold text-lg"> Sobre a Escola</span>
                </div>
                <div className="flex gap-3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="#36c80e" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.1" d="M416 128L192 384l-96-96" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="#a20fe6" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center border bg-slate-50 p-12 rounded-lg">
                <div className="flex gap-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                        <circle cx="256" cy="352" r="32" fill="#a20fe6" />
                        <path fill="#a20fe6" d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32Z" />
                        <path fill="#a20fe6" d="m486.17 120.56l-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160L298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44m-226 295.31a64 64 0 1 1 59.69-59.69a64.08 64.08 0 0 1-59.68 59.69Z" />
                    </svg></span>
                    <span className="font-semibold text-lg"> Endereco</span>
                </div>
                <div className="flex gap-3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="#36c80e" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.1" d="M416 128L192 384l-96-96" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="#a20fe6" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center border bg-slate-50 p-12 rounded-lg">
                <div className="flex gap-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                        <path fill="#a20fe6" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480" />
                    </svg></span>
                    <span className="font-semibold text-lg"> Contato</span>
                </div>
                <div className="flex gap-3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="#36c80e" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.1" d="M416 128L192 384l-96-96" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                            <path fill="none" stroke="#a20fe6" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Minhaescola;