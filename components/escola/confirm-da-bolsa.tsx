'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import ProgressBar from '../basecomponents/progressbar';

interface ConfirmDaBolsaProps {
    title: any;
}

const ConfirmDaBolsa: React.FC<ConfirmDaBolsaProps> = ({ title }) => {
    
    return (
        <div className="flex flex-col gap-5 bg-slate-100">
            <div className="flex flex-col max-w-4xl mx-auto p-6 gap-5">
                <ProgressBar state={1} page={3} />
                <h2 className="text-2xl font-semibold">Primeiro, confirme sua bolsa</h2>
                <div className="relative grid lg:grid-cols-2 gap-5 bg-white shadow-md rounded-lg p-6 border border-slate-400">
                    <div className="flex flex-col gap-3 p-3">
                        <h2 className='text-xl font-semibold'>Resumo da sua bolsa</h2>
                        <div className="flex flex-col">
                            <p className='font-semibold'>Escola</p>
                            <p>Rede Decisao - Unidade Jardim Prudencia</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-semibold'>Ano Letivo</p>
                            <p>2024</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold">Serie</p>
                            <p>Bercario (0 a 1 ano) -Educacao Infantil</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-semibold'>Turno</p>
                            <p>Manha</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold">Mensalidade com Bolsa Escola</p>
                            <p>R$ 1.205,00 <span className='font-semibold text-lg'>R$ 903,75</span><span className='bg-green-400 rounded-full'>-25%</span></p>
                        </div>
                        <div className="absolute -left-3 bottom-10 flex px-5 py-1 gap-5 bg-green-900 text-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 512 512"><path fill="currentColor" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"></path></svg>
                            <span className='font-semibold'>Economize R$ 3.615,00 no ano todo</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 p-3 border-l">
                        <h2 className='text-xl font-bold'>O que preciso pagar para garantir a bolsa?</h2>
                        <div className="flex flex-col gap-1 border-b py-3 border-slate-300">
                            <p>Pago para o Bolsa Escola</p>
                            <div className="flex justify-between">
                                <p>1 mensalidade com desconto</p>
                                <p>R$ 903,75</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Taxa de servico</p>
                                <p>R$ 135,56</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>Total</p>
                            <div className="flex flex-col gap-1">
                                <h2 className='text-2xl font-bold'>R$ 1.039,31</h2>
                                <p>Em ate 10* sem juros</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-slate-100 p-2 rounded-lg">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5'><path fill="#1c1c1c" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58" /></svg>
                                <span className="font-semibold">Renovacao anual</span>
                            </div>
                            <p>No final do ano letivo, voce podera renovar sua bolsa de 25% de descontona mensalidade por R$ 519,66.</p>
                        </div>
                        <p className="text-purple-500 font-semibold">Ver como funciona</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href={`/escola/${title}/identificacao/login`} className='rounded-full text-center text-white font-semibold w-60 bg-purple-500 px-5 py-3'>Confirmar Bolsa</Link>
                </div>
            </div>

        </div>
    )
}

export default ConfirmDaBolsa;
