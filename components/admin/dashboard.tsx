"use client";

import React, { useState } from "react";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/pagination";
import Modal from '@/components/basecomponents/modal';
import Minhasofertas from "./minhasofertas/page";
import Minhaescola from "./minhaescola/page";
import { SearchCity } from "../basecomponents/searchComponents";
interface Title {
  title: string;
}

const PanelBoard: React.FC<Title> = ({ title }) => {
    const [tab, setTab] = useState<number>(1);

  return (
    <div className="flex flex-col md:flex-row md:px-24 py-10 md:space-x-10 sm:space-y-10">
      <div className="flex flex-col md:w-[360px] w-full space-y-3">
        <p className="text-gray-800 font-semibold text-lg">{title}</p>
        <p onClick={() => setTab(1)} className="text-gray-800 bg-slate-300 rounded-full flex justify-center items-center py-2 cursor-pointer">
          <span className="items-center">Dados do Mercado</span>
        </p>
      </div>
      <div className="w-full md:w-full space-y-10">
        <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
          <p className="text-2xl md:text-3xl text-gray-700 font-bold">
            Bem-vindo, Escola Teste
          </p>
          <p className="text-gray-400">
            Aqui você pode gerenciar o desempenho da página de sua escola,
            conhecer as estratégias de seus concorrentes e aumentar a captação
            de alunos.
          </p>
        </div>
        <div className="flex flex-col bg-orange-400 border p-5 rounded-xl gap-3">
          <p className="text-2xl md:text-3xl text-gray-700 font-bold">
            PARTICIPE JA
          </p>
          <p className="text-gray-400 pb-5 border-b">
            Participe da major campanha de captacao de alunos para 2023.
          </p>
          <p>
            clique no botao abaixo e inscreva-se! <br />
            Cidade: <strong> Capixaba </strong>
          </p>
          <span className="bg-white text-orange-600 px-5 py-2 rounded-full">
            Clique aqui
          </span>
        </div>
      </div>
    </div>
  );
};

const EscolaBoard: React.FC<Title> = ({ title }) => {

  return (
    <div className="flex sm:flex-col md:flex-row md:px-24 py-10 space-y-10 md:space-y-0">
      <div className="flex flex-col md:w-[360px] w-full space-y-3">
        <p className="text-gray-800 font-semibold text-lg">{title}</p>
        <button className="hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500">
          Editar dados da escola
        </button>
        <button className="hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500">
          Ver no Melhor Escola
        </button>
      </div>
      <div className="flex flex-col w-full space-y-10">
        <Minhaescola />
      </div>

    </div>
  );
};
const OfertasBoard: React.FC<Title> = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDel, setDel] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col md:px-24 rounded-xl py-10 gap-3">
      <div className="flex flex-col justify-between p-10 rounded-xl bg-white">
        <div className="flex border-b justify-between items-center space-y-1">
          <div className="flex flex-col justify-start ">
            <strong className="text-gray-800 font-semibold text-2xl">
              {title}
            </strong>
          </div>
          <div className="flex justify-between text-gray-700 gap-3 ">
            <button className="border rounded-full bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5" onClick={() => openModal()}>Adicionar</button>
            <button onClick={()=>setDel(true)} className="border rounded-full bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5">Excluir</button>
            <button className="border rounded-full bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5">Publicar Ofertas</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-10 w-full gap-5">
          <Minhasofertas isDel={isDel} setDel={setDel} />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
const AlunosBoard: React.FC<Title> = ({ title }) => {
  const [filters, setFilters] = useState<any>([]);
  return (
    <div className="flex flex-col md:px-24 rounded-xl py-10 gap-3">
      <div className="flex flex-col justify-between space-y-10 py-10 px-5 rounded-xl">
        <div className="flex flex-col border-b justify-start p-5 rounded-lg space-y-1 bg-white">
          <strong className="text-gray-800 font-semibold text-2xl">
            {title}
          </strong>
          <label className="flex py-2 pb-2 text-gray-500">
            Aqui voce tem acesso a toda base de alunos e suas informacoes, como
            dados, comprovantes, status e entre outros. Utilize o filtro para
            facilitar a sua busca
          </label>
        </div>
        <div className="flex flex-col pt-10">
          <div className="border-b pb-5 border-gray-700">
            <p className="text-2xl">
              <strong>Alunos Cadastrados</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-gray-500 hidden md:block">Buscar por:</p>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
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
                <p>
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
                <button className="text-orange-500 border py-1.5 px-3 border-orange-500 rounded-full">
                  Limpar Filtros
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-1">
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
            </div>
          </div>
          <div className="relative overflow-x-auto">
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
                <tr className="dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Teste Techhh
                  </th>
                  <td className="px-6 py-4">Michael Vinicius</td>
                  <td className="px-6 py-4">474.116.338-52</td>
                  <td className="px-6 py-4">
                    Educacao Infantil - Bercario(0 a 1 ano - Manha)
                  </td>
                  <td className="px-6 py-4">2o23</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 uppercase">
                      regular
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const ServiceBoard: React.FC<Title> = ({ title }) => {
  return (
    <div className="flex sm:flex-col md:flex-row md:px-24 sm:px-5 py-10 space-y-10 md:space-y-0 md:space-x-10">
      <div className="flex flex-col md:w-[360px] w-full space-y-3">
        <p className="text-gray-800 font-semibold text-lg">{title}</p>
        <button className="hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500">
          Empresas Parceiras
        </button>
        <button className="hover:text-gray-800 hover:bg-slate-300 hover:rounded-full flex justify-center items-center py-2 text-orange-500">
          Soluções Complementares
        </button>
      </div>
      <div className="flex flex-col w-full space-y-10">
        <div className="flex flex-col bg-white border p-5 rounded-xl gap-3">
          <p className="text-3xl text-gray-700 font-bold">Empresas Parceiras</p>
          <p className="text-gray-400">
            Parceiras educacionais que podem ajudar a sua instituição de ensino.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between border rounded-xl p-5 bg-white gap-10">
          <Image src="" alt="no image" className="w-full md:w-auto md:h-auto" />
          <div className="flex flex-col justify-between gap-5 w-full md:w-auto">
            <strong>Acelera Cash</strong>
            <p>
              Mensalidades em dia e você no controle. Com o Acelera Cash, sua
              escola pode customizar seu produto financeiro e assim focar 100%
              no que realmente importa: Educar e Transformar Vidas!
            </p>
            <p>Condições diferenciadas para parceiros Melhor Escola!</p>
            <button className="py-2 px-3 text-orange-500 border border-orange-500 rounded-full">
              Conhecer a Acelera Cash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PanelBoard, EscolaBoard, OfertasBoard, AlunosBoard, ServiceBoard };
