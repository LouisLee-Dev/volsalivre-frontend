"use client";

import React, { useState } from "react";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/pagination";

import Minhasofertas from "./minhasofertas/page";
import Minhaescola from "./minhaescola/page";
import Meusalunos from "./meusalunos/page";
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
  console.log(isModalOpen)

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
            <button onClick={() => setDel(true)} className="border rounded-full bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5">Excluir</button>
            <button className="border rounded-full bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5">Publicar Ofertas</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-10 w-full gap-5">
          <Minhasofertas isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} isDel={isDel} setDel={setDel} />
        </div>
      </div>
    </div>
  );
};

const AlunosBoard: React.FC<Title> = ({ title }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  
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
          <button className="rounded-full bg-purple-400 text-white px-5 py-2" onClick={()=>setShowModal(true)}>
            Register
          </button>
        </div>
        <Meusalunos showModal={showModal} setShowModal={setShowModal} />
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
