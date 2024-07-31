'use client';

import React, { useState } from 'react';
import { AlunosBoard, EscolaBoard, OfertasBoard, PanelBoard, ServiceBoard } from '@/components/admin/dashboard';
import Header from "@/components/admin/header";
import Footer from "@/components/maisAlunos/footer/page";
import "@/app/globals.css";

const Page = (url: any) => {
    const decode_url = decodeURIComponent(url.params.url);
    let showDashboard;
    switch (decode_url) {
        case 'Panel do Gestor':
            showDashboard = <PanelBoard title={decode_url} key={1} />;
            break;
        case 'Minha Escola':
            showDashboard = <EscolaBoard title={decode_url} key={1} />;
            break;
        case 'Minhas Ofertas':
            showDashboard = <OfertasBoard title={decode_url} key={1} />;
            break;
        case 'Meus Alunos':
            showDashboard = <AlunosBoard title={decode_url} key={1} />;
            break;
        case 'Servios':
            showDashboard = <ServiceBoard title={decode_url} key={1} />;
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