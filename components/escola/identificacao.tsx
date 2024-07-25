'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { CPFInput, PhoneInput } from '../basecomponents/input';
import ProgressBar from '../basecomponents/progressbar';
import { getAuthToken } from '@/utils/setAuthToken';

interface IdentificacaoProps {
    title: any;
    data: any;
    setData: any;
    setPage: any;
}

const Identificacao: React.FC<IdentificacaoProps> = ({ title, data, setData, setPage }) => {
    const [person, setPerson] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [student, setStudent] = useState<string>("");
    const [cpf, setCpf] = useState<any>();

    const handleData = () => {
        setData({
            ...data,
            person: person,
            email: email,
            phone: phone,
            student: student,
            cpf: cpf
        })
    }

    return (
        <div className="flex flex-col gap-5 bg-slate-100">
            <div className="flex flex-col mx-auto p-6 gap-5">
                <ProgressBar state={2} page={3} />
                <h2 className="text-2xl font-semibold">Agora, precisamos identificar você</h2>
                {
                    getAuthToken() ?
                        <div className="relative flex flex-col justify-center lg:px-60 lg:py-20 gap-5 bg-white shadow-md rounded-lg p-6 border border-slate-400">
                            <h2 className="text-xl font-bold">
                                Insira o seu CPF
                            </h2>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className='text-xl font-semibold'>CPF do responsável</label>
                                <CPFInput value={cpf} onChange={setCpf} />
                            </div>
                        </div> :
                        <div className='flex flex-col gap-5 p-5 bg-white shadow-md rounded-lg p-6 border border-slate-400'>
                            <h2 className="text-2xl font-bold">Dados de cadastro</h2>
                            <p>Preencha os campos abaixo com as informações do responsável.</p>
                            <div className="grid lg:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="" className='text-xl font-semibold'>CPF do responsável</label>
                                    <CPFInput value={cpf} onChange={setCpf} />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nome do responsavel
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                        placeholder="Escola Mamãe Com Açúcar"
                                        value={person}
                                        onChange={(e) => { setPerson(e.target.value); }}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        E-mail do responsavel
                                    </label>
                                    <input
                                        type="email"
                                        className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                        placeholder="****@****.com"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); }}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Celular do responsavel
                                    </label>
                                    <PhoneInput value={phone} onChange={setPhone} />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nome do aluno
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                        placeholder=""
                                        value={student}
                                        onChange={(e) => { setStudent(e.target.value); }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                }
                { getAuthToken() !== null && (
                    <div className='grid lg:grid-cols-2 gap-5 p-5 bg-white shadow-md rounded-lg p-6 border border-slate-400'>
                    <div className="bg-white p-6">
                        <h2 className="text-xl font-bold mb-2">Resumo da sua bolsa</h2>
                        <p className="text-gray-700">Escola: <span className="font-semibold">Portal Do Saber</span></p>
                        <p className="text-gray-700">Série: <span className="font-semibold">G1 (1 a 2 anos) - Educação Infantil</span></p>
                        <p className="text-gray-700">Turno: <span className="font-semibold">2025 - Manhã</span></p>
                        <div className="mt-4">
                            <p className="line-through text-red-500">R$ 613,14</p>
                            <p className="text-2xl font-bold text-green-600">R$ 306,57 <span className="text-sm text-gray-500">(-50%)</span></p>
                        </div>
                    </div>
                    </div>
                )}
                <div className="flex justify-center gap-5">
                    <button onClick={()=>{setPage('1')}} className='rounded-full text-center text-purple-500 underline font-bold w-60 px-5 py-3'>Voltar</button>
                    <button onClick={()=>{setPage('3')}} className='rounded-full text-center text-white font-semibold w-60 bg-purple-500 px-5 py-3'>Avancar</button>
                </div>
            </div>

        </div>
    )
}

export default Identificacao;
