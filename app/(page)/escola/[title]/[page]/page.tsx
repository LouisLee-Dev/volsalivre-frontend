import React from 'react';
import Image from 'next/image';
import Mark from '@/public/logo.svg'
import ConfirmDaBolsaChildren from '@/components/escola/confirm-da-bolsa';
import IdentificacaoChildren from '@/components/escola/identificacao';
import PagamentoChildren from '@/components/escola/pagamento';

interface ConfirmDaBolsaProps {
    params: { title: string, page: string };
    searchParams: { [key: string]: string };
}

const ConfirmDaBolsa: React.FC<ConfirmDaBolsaProps> = ({ params, searchParams }) => {    
    const { title, page } = params;    

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-around bg-purple-500 text-white items-center">
                <Image src={Mark} alt='' className='w-40 h-20' />
                <div className="flex items-center gap-3">
                    <p>Ambiente Seguro</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 512 512"><path fill="currentColor" d="M224 48c44.2 0 80 35.8 80 80v64H144V128c0-44.2 35.8-80 80-80zM96 128v64H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V128C352 57.3 294.7 0 224 0S96 57.3 96 128zM64 240H384c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16zm184 80c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V320z"></path></svg>
                </div>
            </div>
            {page === '1' && <ConfirmDaBolsaChildren title={title} />}
            {page === '2' && <IdentificacaoChildren title={title} />}
            {page === '3' && <PagamentoChildren title={title} />}
            <div className="flex justify-around bg-slate-100 py-10">
                <div className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Pague com Visa</title><g fill="none" fillRule="evenodd"><rect fill="#FFF" width="48" height="32" rx="4"></rect><path fill="#005C9C" d="M22.29 20.778h-2.734L21.265 11H24l-1.71 9.778M16.82 11l-2.422 6.725-.286-1.448-.855-4.396S13.154 11 12.05 11H8.047L8 11.165s1.225.256 2.658 1.118l2.207 8.495h2.648L19.556 11H16.82M34.956 17.319l1.313-3.66.739 3.66h-2.052zm2.75 3.459H40L38 11h-2.01c-.927 0-1.153.729-1.153.729l-3.726 9.049h2.604l.521-1.452h3.177l.293 1.452zM30.772 13.662l.34-2.213S30.063 11 28.971 11c-1.18 0-3.983.582-3.983 3.411 0 2.663 3.29 2.696 3.29 4.094 0 1.398-2.952 1.148-3.925.266L24 21.085s1.062.582 2.685.582 4.072-.949 4.072-3.528c0-2.68-3.32-2.93-3.32-4.094 0-1.165 2.317-1.015 3.335-.383"></path><path d="M14.222 16.333l-.87-4.443s-.105-.89-1.228-.89H8.048L8 11.167s1.96.404 3.84 1.917c1.796 1.447 2.382 3.25 2.382 3.25" fill="#EE9F3F"></path></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Pague com Mastercard</title><g fill="none" fillRule="evenodd"><rect fill="#FFF" width="48" height="32" rx="4"></rect><g fillRule="nonzero"><path fill="#FF5F00" d="M21.113 9.68h6.731v12.117h-6.731z"></path><path d="M21.54 15.74a7.697 7.697 0 0 1 2.939-6.06 7.683 7.683 0 0 0-10.405.831 7.715 7.715 0 0 0 0 10.455 7.683 7.683 0 0 0 10.405.831 7.697 7.697 0 0 1-2.938-6.057z" fill="#EB001B"></path><path d="M36.925 15.74a7.707 7.707 0 0 1-4.33 6.93c-2.65 1.29-5.801.95-8.116-.873a7.71 7.71 0 0 0 2.939-6.058 7.71 7.71 0 0 0-2.94-6.059 7.682 7.682 0 0 1 8.116-.873 7.707 7.707 0 0 1 4.331 6.93v.003zM36.19 20.536v-.267h.1v-.056h-.254v.056h.11v.267h.044zm.494 0v-.323h-.077l-.09.231-.09-.23h-.068v.322h.056v-.242l.083.21h.058l.083-.21v.245l.045-.003z" fill="#F79E1B"></path></g></g></svg>
                </div>
            </div>
        </div>
        
    )
}

export default ConfirmDaBolsa