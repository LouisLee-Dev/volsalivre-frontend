import React from 'react';

const ConfirmDaBolsa: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-around bg-purple-700">

            </div>

            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-xl font-semibold">Primeiro, confirme sua bolsa</h2>
                        <div className="mt-2">
                            <div className="flex items-center">
                                <div className="flex-1 h-1 bg-purple-500 rounded"></div>
                                <div className="flex-1 h-1 bg-gray-200 rounded ml-1"></div>
                                <div className="flex-1 h-1 bg-gray-200 rounded ml-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <h3 className="text-lg font-medium">Resumo da sua bolsa</h3>
                            <ul className="mt-2">
                                <li className="text-gray-700"><strong>Escola:</strong> Colégio Paulino E Paulino</li>
                                <li className="text-gray-700"><strong>Ano letivo:</strong> 2024</li>
                                <li className="text-gray-700"><strong>Série:</strong> Berçário (0 a 1 ano) - Educação Infantil</li>
                                <li className="text-gray-700"><strong>Turno:</strong> Integral</li>
                            </ul>
                            <div className="mt-4">
                                <div className="text-gray-500 line-through">R$ 1.926,00</div>
                                <div className="text-green-600 text-2xl font-semibold">R$ 1.155,60 <span className="text-sm">-40%</span></div>
                                <div className="text-green-600 mt-1">Economize R$ 9.244,80 no ano todo</div>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                            <h3 className="text-lg font-medium">O que preciso pagar para garantir a bolsa?</h3>
                            <ul className="mt-2">
                                <li className="flex justify-between text-gray-700"><span>Matrícula com desconto</span><span>R$ 1.155,60</span></li>
                                <li className="flex justify-between text-gray-700"><span>Taxa de serviço</span><span>R$ 346,68</span></li>
                            </ul>
                            <div className="flex justify-between mt-4 font-semibold text-gray-900">
                                <span>Total</span>
                                <span>R$ 1.502,28</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-2">Em até 10x sem juros</div>
                            <div className="mt-4 flex items-start">
                                <input type="checkbox" className="mt-1.5" />
                                <div className="ml-2 text-gray-700">
                                    <span>Renovação anual</span>
                                    <p className="text-sm text-gray-500">No final do ano letivo, você poderá renovar sua bolsa de 40% de desconto na mensalidade por R$ 1.502,28.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConfirmDaBolsa