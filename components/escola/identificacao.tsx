'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { CPFInput } from '../basecomponents/input';
import ProgressBar from '../basecomponents/progressbar';

interface IdentificacaoProps {
    title: any;
}

const Identificacao: React.FC<IdentificacaoProps> = ({ title }) => {
    const [value, setValue] = useState<any>();
    return (
        <div className="flex flex-col gap-5 bg-slate-100">
            <div className="flex flex-col mx-auto p-6 gap-5">
                <ProgressBar state={2} page={3} />
                <h2 className="text-2xl font-semibold">Agora, precisamos identificar você</h2>
                <div className="relative flex flex-col justify-center lg:px-60 lg:py-20 gap-5 bg-white shadow-md rounded-lg p-6 border border-slate-400">
                    <h2 className="text-xl font-bold">
                        Insira o seu CPF
                    </h2>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className='text-xl font-semibold'>CPF do responsável</label>
                        <CPFInput value={value} onChange={setValue} />
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <Link href={`/escola/${title}/confirmacao-da-bolsa`} className='rounded-full text-center text-purple-500 underline font-bold w-60 px-5 py-3'>Voltar</Link>
                    <Link href={`/`} className='rounded-full text-center text-white font-semibold w-60 bg-purple-500 px-5 py-3'>Avancar</Link>
                </div>
            </div>

        </div>
    )
}

export default Identificacao;
