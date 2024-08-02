'use client';

import React, { useState } from "react";

const MeusPerpil: React.FC = () => {

    return (
        <div className="flex flex-col px-4 md:px-24 pr-4 md:pr-72 pt-5">
            {/* <nav className="flex flex-col md:flex-row justify-between pt-3 pb-1" aria-label="Breadcrumb">
                <ol className="inline-flex items-center text-xs sm:text-sm mb-3 sm:mb-0 gap-2">
                    <li>
                        <a href="/" className="text-[#ff8d39] hover:underline">Melhor Escola</a>
                    </li>
                    <span className="mx-2 text-gray-400">/</span>
                    <li className="text-gray-500 justify-between" >
                        <a className=""><span> Meus-Perpil</span></a>
                    </li>
                </ol>
            </nav> */}

            
            <div className="flex flex-col pt-5 text-sm space-y-3 text-gray-600 pb-2">
                <p> Utilize esse link para indicar amigos e ganhe um extra. <a href="#" className="text-blue-400 hover:underline">Saiba mais!</a></p>
                <div className="flex justify-start md:flex-row flex-col md:items-center items-start gap-5">
                    <p className="border border-spacing-2 border-black ">https://www.melhorescola.com.br/79322643595</p>
                    <button className="bg-orange-500 py-2 px-2 text-white rounded-full">Copiar link</button>
                </div>
            </div>
        </div>
    )
}
const MeusDados: React.FC = () => {

    return (

        <>
            {/* <div className="flex flex-col md:flex-row pt-3 pb-2 justify-between">
                <div className=" border-b w-full pb-2 font-[500] text-xl md:text-2xl text-gray-500">
                    <span> Meus-Dados </span>
                </div>
            </div> */}
            <div className={`grid sm:grid-cols-1 md:grid-cols-3 md:pt-5 gap-3 pt-3 pb-5 md:pr-36 border-b`}>

                <div className="md:col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Nome</label>
                    <input type="text" id="name" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="Dennis Foos" required />
                </div>
                <div>
                    <label htmlFor="cpf" className="block mb-2 text-sm text-gray-600">CPF</label>
                    <input type="text" id="cpf" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="793.226.435-95" required />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" disabled className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="dennisfoos@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="telephone" className="block mb-2 text-sm text-gray-600">Telefone ou Celular</label>
                    <input type="text" id="telephone" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="17345679140" required />
                </div>

            </div>
            <div className={`grid sm:grid-cols-1 border-b text-sm text-gray-600 md:grid-cols-3 md:pt-5 gap-3 pt-3 pb-5 md:pr-36`}>

                <div>
                    <label htmlFor="cep" className="block mb-2">CEP</label>
                    <input type="text" id="cep" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="9999-99" required />
                </div><br />
                <div className="md:col-span-2">
                    <label htmlFor="Endereço" className="block mb-2">Endereço</label>
                    <input type="text" id="Endereço" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="Rua, avenida, alameda, etc" required />
                </div>
                <div>
                    <label htmlFor="Número" className="block mb-2">Número</label>
                    <input type="text" id="Número" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="123" required />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="Complemento" className="block mb-2">Complemento</label>
                    <input type="email" id="Complemento" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="Complemento" required />
                </div><br />
                <div className="">
                    <label htmlFor="Bairro" className="block mb-2">Bairro</label>
                    <input type="text" id="Bairro" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="Seu Bairro" required />
                </div>
                <div className="">
                    <label htmlFor="Cidade" className="block mb-2">Cidade</label>
                    <input type="text" id="Cidade" className="border border-gray-300 text-gray-600 text-sm rounded-full focus:outline-none focus:border-gray-300 focus:ring-2 block w-full p-2.5" placeholder="Sua Cidade" required />
                </div>
                <div className="">
                    <label htmlFor="Estado" className="block mb-2">Estado</label>
                    <select id="Estado" defaultValue={1} className="border focus:outline-none border-gray-300 text-gray-600 text-sm rounded-full focus:border-gray-300 focus:ring-2 block w-full p-2.5">
                        <option value="1">Seu Estado</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-between pt-10 pb-10">
                <button className="border start-5 border-b rounded-full py-2 px-3 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500">Alterar Senha</button>
                <button className="border start-5 border-b rounded-full py-2 px-3 border-orange-500 bg-orange-500 text-white">Alterar Senha</button>
            </div>


        </ >
    )
}
const MeusPagamentos:React.FC = () => {
    return (
        <div className="relative overflow-x-auto pt-3 shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Data
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Produto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Preço
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Forma de Pagamento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status Pagamento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export { MeusPerpil, MeusDados, MeusPagamentos };