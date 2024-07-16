'use client';

import React, {useState} from 'react';
import {AlunosBoard, EscolaBoard, OfertasBoard, PainelBoard, ServiceBoard} from '@/components/admin/dashboard';
import Header from "@/components/admin/header";
import Footer from "@/components/maisAlunos/footer/page";
import "@/app/globals.css";

const Page = (url:any) => {
    const decode_url = decodeURIComponent(url.params.url);
    const showDashboard: any = [];
    switch (decode_url) {
        case 'Painel do Gestor':
            showDashboard.push( < PainelBoard title={decode_url} key={1}/>);
            break;
        case 'Minha Escola':
            showDashboard.push( <EscolaBoard  title={decode_url} key={1}/>);
            break;
        case 'Minhas Ofertas':
            showDashboard.push( <OfertasBoard  title={decode_url} key={1}/>);
            break;
        case 'Meus Alunos':
            showDashboard.push( <AlunosBoard  title={decode_url} key={1}/>);
            break;
        case 'Servios':
            showDashboard.push( <ServiceBoard  title={decode_url} key={1}/>);
            break;
    }
    return (
        <>
            <Header />
            <div className="flex flex-col bg-gray-200">
                {showDashboard}
            </div>
            <Footer />
        </>
    )
}

export default Page;