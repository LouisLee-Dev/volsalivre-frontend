'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { CPFInput, PhoneInput } from '../basecomponents/input';
import ProgressBar from '../basecomponents/progressbar';
import { getAuthToken } from '@/utils/setAuthToken';

interface PagamentoProps {
    title: any;
}

const Pagamento: React.FC<PagamentoProps> = ({ title }) => {
    const [cardType, setCardType] = useState<any>();
    const [cardNumber, setCardNumber] = useState<any>();
    const [cardOwn, setCardOwn] = useState<string>();
    const [validity, setValidity] = useState<string>();
    const [securityCode, setSecurityCode] = useState<string>();
    const [parcela, setParcela] = useState<string>();
    const [cep, setCep] = useState<string>();
    const [state, setState] = useState<string>();
    const [cidade, setCidade] = useState<string>();
    const [bairro, setBairro] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [número, setNúmero] = useState<string>();
    const [complemento, setComplemento] = useState<string>();

    return (
        <div className="flex flex-col gap-5 bg-slate-100">
            <div className="flex flex-col mx-auto p-6 gap-5">
                <ProgressBar state={3} page={3} />
                <h2 className="text-2xl font-semibold">Para finalizar, realize o pagamento</h2>
                <div className='flex flex-col gap-5 p-5 bg-white shadow-md rounded-lg p-6 border border-slate-400'>
                    <h2 className="text-2xl font-bold">Forma de pagamento</h2>
                    <p>Escolha a melhor forma de pagamento para você</p>
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="flex gap-5 border border-slate-200 hover:border-purple-500 hover:text-purple-300 focus:bg-purple-100 rounded-lg  p-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-purple-500' viewBox="0 0 512 512"><path fill="currentColor" d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                            Cartao de credito
                        </div>
                        <div className="flex gap-5 border border-slate-200 hover:border-purple-500 hover:text-purple-300 focus:bg-purple-100 rounded-lg p-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-purple-500' viewBox="0 0 512 512"><path fill="currentColor" d="M144 80v96H48V80h96zM48 32C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm96 304v96H48V336h96zM48 288c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48zM304 80h96v96H304V80zm-48 0v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM72 120v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H88c-8.8 0-16 7.2-16 16zM88 360c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V376c0-8.8-7.2-16-16-16H88zM328 120v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344c-8.8 0-16 7.2-16 16zM256 304V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8 7.2-16 16-16s16 7.2 16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16s-16 7.2-16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM368 448a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32z"></path></svg>
                            Cartao de credito
                        </div>
                        <div className="flex gap-5 border border-slate-200 hover:border-purple-500 hover:text-purple-300 focus:bg-purple-100 rounded-lg p-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-purple-500' viewBox="0 0 512 512"><path fill="currentColor" d="M56 48c-4.4 0-8 3.6-8 8v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V56C0 25.1 25.1 0 56 0h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H56zm64 80c13.3 0 24 10.7 24 24V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm56 16c0-8.8 7.2-16 16-16s16 7.2 16 16V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V144zm272 0c0-8.8 7.2-16 16-16s16 7.2 16 16V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V144zm-208 8c0-13.3 10.7-24 24-24s24 10.7 24 24V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152zm152-24c13.3 0 24 10.7 24 24V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM528 56c0-4.4-3.6-8-8-8H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c30.9 0 56 25.1 56 56v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V56zM56 464h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-30.9 0-56-25.1-56-56V376c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 4.4 3.6 8 8 8zm472-8V376c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 30.9-25.1 56-56 56H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c4.4 0 8-3.6 8-8z"></path></svg>
                            Cartao de credito
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Número do cartão
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                placeholder="Escola Mamãe Com Açúcar"
                                value={cardNumber}
                                onChange={(e) => { setCardNumber(e.target.value); }}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nome impresso no cartão
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                placeholder="Escola Mamãe Com Açúcar"
                                value={cardOwn}
                                onChange={(e) => { setCardOwn(e.target.value); }}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Validade
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                placeholder="Escola Mamãe Com Açúcar"
                                value={validity}
                                onChange={(e) => { setValidity(e.target.value); }}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Código de segurança
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                placeholder="Escola Mamãe Com Açúcar"
                                value={securityCode}
                                onChange={(e) => { setSecurityCode(e.target.value); }}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Parcela
                            </label>
                            <select className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"

                                value={parcela}
                                onChange={(e) => { setParcela(e.target.value); }}
                                required><option value="1x de R$&nbsp;150,00 sem juros">1x de R$&nbsp;150,00 sem juros</option><option value="2x de R$&nbsp;75,00 sem juros">2x de R$&nbsp;75,00 sem juros</option><option value="3x de R$&nbsp;50,00 sem juros">3x de R$&nbsp;50,00 sem juros</option><option value="4x de R$&nbsp;37,50 sem juros">4x de R$&nbsp;37,50 sem juros</option><option value="5x de R$&nbsp;30,00 sem juros">5x de R$&nbsp;30,00 sem juros</option><option value="6x de R$&nbsp;25,00 sem juros">6x de R$&nbsp;25,00 sem juros</option><option value="7x de R$&nbsp;21,43 sem juros">7x de R$&nbsp;21,43 sem juros</option><option value="8x de R$&nbsp;18,75 sem juros">8x de R$&nbsp;18,75 sem juros</option><option value="9x de R$&nbsp;16,67 sem juros">9x de R$&nbsp;16,67 sem juros</option><option value="10x de R$&nbsp;15,00 sem juros">10x de R$&nbsp;15,00 sem juros</option></select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-xl font-bold">
                            Endereço de cobrança
                        </h2>
                        <p>Agora só falta preencher o endereço para finalizar a compra</p>
                        <div className="grid lg:grid-cols-3 gap-5">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    CEP
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    placeholder="Escola Mamãe Com Açúcar"
                                    value={cep}
                                    onChange={(e) => { setCep(e.target.value); }}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Estado
                                </label>

                                <select className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    value={state}
                                    onChange={(e) => { setState(e.target.value); }}
                                    required><option value="AC">AC</option><option value="AL">AL</option><option value="AP">AP</option><option value="AM">AM</option><option value="BA">BA</option><option value="CE">CE</option><option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option><option value="MA">MA</option><option value="MT">MT</option><option value="MS">MS</option><option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option><option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option><option value="RJ">RJ</option><option value="RN">RN</option><option value="RS">RS</option><option value="RO">RO</option><option value="RR">RR</option><option value="SC">SC</option><option value="SP">SP</option><option value="SE">SE</option><option value="TO">TO</option></select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Cidade
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    placeholder="Escola Mamãe Com Açúcar"
                                    value={cidade}
                                    onChange={(e) => { setCidade(e.target.value); }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-5">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Bairro
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    placeholder="Ex: Baixo"
                                    value={bairro}
                                    onChange={(e) => { setBairro(e.target.value); }}
                                    required
                                />
                            </div>
                            <div className='lg:col-span-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Endereço
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    placeholder="Ex: Rua João Passalaqua, 181"
                                    value={address}
                                    onChange={(e) => { setAddress(e.target.value); }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Número
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    placeholder="Ex: 1900"
                                    value={número}
                                    onChange={(e) => { setNúmero(e.target.value); }}
                                    required
                                />
                            </div>
                            <div className='lg:col-span-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Compoemento
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                                    placeholder="Escola Mamãe Com Açúcar"
                                    value={complemento}
                                    onChange={(e) => { setComplemento(e.target.value); }}
                                    required
                                />
                            </div>
                        </div>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 border-purple-500 rounded" />
                            <span className="ml-2 text-gray-700">
                                Declaro que li e concordo com as <span className="text-purple-500">Regras da bolsa</span>
                            </span>
                        </label>
                    </div>
                </div>

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
                    <div className="max-w-md mx-auto p-6">
                        <h2 className="text-2xl font-bold mb-4">O que preciso pagar para garantir a bolsa?</h2>
                        <div className="mb-4">
                            <p className="flex justify-between">
                                <span>Pago para o Melhor Escola</span>
                                <span>R$ 150,00</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="flex justify-between">
                                <span>Matrícula com desconto</span>
                                <span>R$ 50,00</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="flex justify-between">
                                <span>Taxa de serviço</span>
                                <span>R$ 100,00</span>
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>R$ 150,00</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Em até 10x sem juros</p>
                    </div>
                </div>

                <div className="flex justify-center gap-5">
                    <Link href={`/escola/${title}/2`} className='rounded-full text-center text-purple-500 underline font-bold w-60 px-5 py-3'>Voltar</Link>
                    <Link href={`/escola/${title}/3`} className='rounded-full text-center text-white font-semibold w-60 bg-purple-500 px-5 py-3'>Avancar</Link>
                </div>
            </div>

        </div>
    )
}

export default Pagamento;
