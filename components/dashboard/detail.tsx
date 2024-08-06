'use client';

import {EscolaDetailCard} from '@/components/basecomponents/cards';

interface DetailProps {
    title: any;
}

// eslint-disable-next-line prefer-const
let cardData = [
    {
        location:"Rua João Passalaqua, 181 - Bela Vista, São Paulo - SP - São Paulo",
        review: "27",
        period:"Early Childhood Education - Nursery (0 to 1 year old)",
        schoolYear:["2024", "2025"],
        shift:"Manhã",
        originUnit: "R$",
        originPrice: 1000,
        presentUnit: "BRL",
        presentPrice: 500,
    }
]

const Detail:React.FC<DetailProps> = ({title}) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 py-10 px-4 lg:px-28 gap-10">
                <div className="col-span-1 lg:col-span-2 flex md:flex-row lg:flex-row justify-between items-center">
                    <div className="flex flex-col items-center md:items-start lg:items-start p space-y-5 lg:space-y-3">
                        <div className="flex flex-col space-y-3">
                            <p className="text-[16px] text-gray-700 font-bold">Rede privada</p>
                            <p className="text-3xl text-gray-800 font-extrabold">{title}</p>
                            <p className="flex text-[12px] text-gray-600 justify-between items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/>
                                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                </svg>
                                <span>Rua João Passalaqua, 181 - Bela Vista, São Paulo - SP - São Paulo</span>
                            </p>
                        </div>
                        <p className='border bg-orange-500 text-xs rounded-md text-white px-2 py-1'>VAGAS 2025</p>
                    </div>
                    <div className="flex justify-center lg:flex-row lg:justify-end items-start pl-0 lg:pl-6 lg:space-x-3 md:space-x-5 mt-5 lg:mt-0">
                        <div className="flex flex-col items-center space-y-2">
                            <p className="text-[16px] text-gray-600 space-x-2">
                                <span className="font-bold text-sm p-[2px] rounded-sm bg-[#ffb005]">4.9</span>
                                <span>Fantástico</span>
                            </p>
                            <p className="text-[16px] text-gray-600">{"27"} Avaliações</p>
                        </div>
                        <img src="https://img.imageboss.me/me/cover:center/48x48/format:auto/20200129173502210.jpg" height="64" width="64" loading="lazy" className="sub-header-pdp__logo" title="Logo Colégio Paulino E Paulino" alt="Logo Colégio Paulino E Paulino" />
                    </div>
                </div>
                <div className="row-span-1 lg:row-span-2 w-full md:w-full flex justify-center items-center">
                    <EscolaDetailCard 
                        school={cardData}
                        // period={cardData[0].period}
                        // schoolYear={cardData[0].schoolYear}
                        // shift={cardData[0].shift}
                        // originUnit={cardData[0].originUnit}
                        // originPrice={cardData[0].originPrice}
                        // presentUnit={cardData[0].presentUnit}
                        // presentPrice={cardData[0].presentPrice}
                    />
                </div>
            </div>
        </>
    )
}

export default Detail;