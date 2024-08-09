'use client';

import axios from 'axios';
import Rect, { useState, useEffect } from 'react';
import Modal from './modal';
import { SearchCity } from "@/components/basecomponents/searchComponents";

interface MeusalunosProps {
    showModal?: any;
    setShowModal?: any;
}

const Meusalunos: React.FC<MeusalunosProps> = ({ showModal, setShowModal }) => {
    const [filters, setFilters] = useState<any>();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/students`;
                const result = await axios.get(url, { params: filters });
                if (result) {
                    setData(result.data);
                }
            }
            catch (e) {
                throw new Error("Error");
            }
        }
        fetchStudents();
    }, [])

    return (
        <div className="flex flex-col space-y-2">
            {showModal && <Modal setShowModal={setShowModal} />}
            <p className="text-gray-500 hidden md:block">Buscar por:</p>
            <div className="flex flex-col lg:flex-row justify-between gap-5">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
                    <div className="flex justify-between gap-3">
                        <SearchCity disp={2} filters={filters} setFilters={setFilters} className="" />
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border py-2.5 px-3 sm:w-auto border-gray-500 text-gray-900 text-sm rounded-full w-full md:w-auto"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className='cursor-pointer'>
                            <svg
                                className="text-5xl"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    className="text-orange-500"
                                    fill="currentColor"
                                    d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62"
                                ></path>
                                <circle
                                    className="text-orange-500"
                                    cx={232}
                                    cy={232}
                                    r={56}
                                    fill="currentColor"
                                ></circle>
                            </svg>
                        </p>
                        {/* <button className="text-orange-500 border py-1.5 px-3 border-orange-500 rounded-full">
                            Limpar Filtros
                        </button> */}
                    </div>
                </div>
                {/* <div className="flex justify-between items-center gap-1">
                    <p className="text-gray-500">Filtrar por:</p>
                    <button className="text-orange-500 border py-1 px-2 bg-slate-100 border-gray-500 rounded-full">
                        Regular
                    </button>
                    <button className="text-orange-500 border py-1 px-2 bg-slate-100 border-gray-500 rounded-full">
                        Cancelado
                    </button>
                    <button className="text-orange-500 border py-1 px-2 bg-slate-100 border-gray-500 rounded-full">
                        Inadimplente
                    </button>
                </div> */}
            </div>
            <div className="relative overflow-auto">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nome do Aluno
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome do Responsavel
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CPF do Responsavel
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Serie ou periodo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ano
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.map((student: any, index: number) => (
                                <tr className="dark:bg-gray-800" key={index}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {
                                            student.name
                                        }
                                    </th>
                                    <td className="px-6 py-4">{student.parent.name}</td>
                                    <td className="px-6 py-4">{student.parent.cpf}</td>
                                    <td className="px-6 py-4">
                                        {student.school.level.level}-{student.school.series.series}
                                    </td>
                                    <td className="px-6 py-4">{student.year}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 uppercase">
                                            {student.tipo.tipo}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <circle
                                                className="text-orange-500"
                                                cx={256}
                                                cy={256}
                                                r={48}
                                                fill="currentColor"
                                            ></circle>
                                            <circle
                                                className="text-orange-500"
                                                cx={256}
                                                cy={416}
                                                r={48}
                                                fill="currentColor"
                                            ></circle>
                                            <circle
                                                className="text-orange-500"
                                                cx={256}
                                                cy={96}
                                                r={48}
                                                fill="currentColor"
                                            ></circle>
                                        </svg>
                                    </td>
                                </tr>
                            ))
                        }
                        {!data && (
                            <div>No Students</div>
                        )}
                    </tbody>
                </table>
            </div>            
        </div>
    )
}

export default Meusalunos;