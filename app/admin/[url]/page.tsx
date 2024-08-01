'use client';

import React, { useState } from 'react';
import { AlunosBoard, EscolaBoard, OfertasBoard, PanelBoard, ServiceBoard } from '@/components/admin/dashboard';
import Header from "@/components/admin/header";
import Footer from "@/components/maisAlunos/footer/page";
import "@/app/globals.css";

const Page = (url: any) => {
    const decode_url = decodeURIComponent(url.params.url);
    let activeTab = 0;
    let showDashboard;
    switch (decode_url) {
        case 'Panel do Gestor':
            activeTab = 1;
            showDashboard = <PanelBoard title={decode_url} key={1} />;
            break;
        case 'Minha Escola':
            activeTab = 2;
            showDashboard = <EscolaBoard title={decode_url} key={1} />;
            break;
        case 'Minhas Ofertas':
            activeTab = 3;
            showDashboard = <OfertasBoard title={decode_url} key={1} />;
            break;
        case 'Meus Alunos':
            activeTab = 4;
            showDashboard = <AlunosBoard title={decode_url} key={1} />;
            break;
        case 'Servios':
            activeTab = 5;
            showDashboard = <ServiceBoard title={decode_url} key={1} />;
            break;
    }
    return (
        <>
            <Header activeTab={activeTab} />
            <div className="flex flex-col bg-gray-200">
                {showDashboard}
            </div>
            <Footer />
        </>
    )
}

export default Page;