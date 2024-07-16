import React, {useState} from "react";
import Image from "next/image";
import Colegio from '@/public/colegio.png';
import Capacao from '@/public/Captacao.svg';
import Acesse from '@/public/Acesse.svg';
import Invista from '@/public/Invista.svg';

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-[#13171a] flex flex-col w-full h-auto md:h-[1024px]">
                <div className="absolute sm:w-auto sm:h-auto w-[300px] lg:w-auto lg:h-auto md:w-[700px] h-[300px] md:h-[700px] top-[150px] md:top-[250px] left-4 md:left-16 bg-[#242a2e] rotate-45 z-0"></div>
                <div className="flex flex-col md:flex-row justify-between px-6 md:px-28 pt-20 pb-10 text-white">
                    <div className="flex z-10 flex-col space-y-8">
                        <strong className="text-xs md:text-sm">FAÇA COMO MAIS DE 6.500 GESTORES ESCOLARES</strong>
                        <h1 className="text-3xl md:text-[55px] font-bold font-sans">
                            Capte alunos sem<br /> <span className="underline ">nenhum</span> custo direto
                        </h1>
                        <p className="text-sm md:text-[17px]">
                            Personalize, divulgue a sua página e capte alunos nos maiores marketplaces
                            <br />de  educação da América Latina: Quero Bolsa e Melhor Escola.
                        </p>
                        <div className="">
                            <a href="#" className="text-white hover:ring-4 ring-slate-400 hover:ring-orange-400 bg-[#ff7e29] p-3 rounded-full font-semibold text-[14px] md:text-[16px]">Quero me tornar um parceiro</a>
                        </div>
                    </div>
                    <div className="flex z-10 mt-8 md:mt-0">
                        <Image
                            src={Colegio}
                            alt="colegio"
                            className="md:w-full md:h-auto sm:w-full sm:h-auto"
                        />
                    </div>
                </div>
                <div id="advantages" className="flex px-6 md:px-16 flex-col items-center z-10">
                    <div className="relative pt-10 w-full gap-[2px] flex-col items-center border bg-white rounded-lg"><br /><br />
                        <p className="items-center flex justify-center text-2xl md:text-[42px] text-gray-800 font-extrabold">Vantagens de anunciar sua</p>
                        <p className="items-center flex justify-center text-2xl md:text-[42px] text-gray-800 font-extrabold">vaga no Melhor Escola</p>
                        <div className="flex flex-col md:flex-row w-full justify-between p-6 md:p-16 gap-5">
                            <div className="flex flex-col space-y-5 border w-full md:w-1/3 rounded-md p-5 bg-white h-auto md:h-[420px]">
                                <Image src={Capacao} alt="capacao" />
                                <h3 className="font-bold text-xl md:text-2xl text-gray-800">
                                    Captação de alunos nos maiores marketplaces de educação
                                </h3>
                                <p className="text-sm md:text-lg text-gray-600">
                                    Cadastre suas ofertas e divulgue as melhores condições para cada perfil estudantil.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-5 border w-full md:w-1/3 rounded-md p-5 bg-white h-auto md:h-[420px]">
                                <Image src={Acesse} alt="acesse" />
                                <h3 className="font-bold text-xl md:text-2xl text-gray-800">
                                    Acesse dados estratégicos sobre sua escola
                                </h3>
                                <p className="text-sm md:text-lg text-gray-600">
                                    Desenhe e execute planos de captação online, acompanhe dados do mercado e melhore o desempenho no site por meio da Área do Gestor.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-5 border w-full md:w-1/3 rounded-md p-5 bg-white h-auto md:h-[420px]">
                                <Image src={Invista} alt="invista" />
                                <h3 className="font-bold text-xl md:text-2xl text-gray-800">
                                    Invista em sua formação com aulas sobre gestão escolar
                                </h3>
                                <p className="text-sm md:text-lg text-gray-600">
                                    Tenha acesso a mais de 30 horas de aulas sobre gestão escolar, desafios e benefícios exclusivos que auxiliam no seu dia a dia como gestor e receba certificações por meio do Clube dos Diretores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 flex flex-col w-full h-auto md:h-[850px]">
                <div className="flex px-6 md:px-16 flex-col items-center z-10">
                    <section id="partners" className="relative pt-10 w-full gap-[2px] top-[100px] md:top-[300px] flex-col items-center"><br /><br />
                        <p className="items-center flex justify-center text-2xl md:text-[42px] text-gray-800 font-extrabold">Parceiros que conhecem e</p>
                        <p className="items-center flex justify-center text-2xl md:text-[42px] text-gray-800 font-extrabold">recomendam os nossos produtos</p>
                        <p className="items-center flex justify-center text-sm md:text-lg text-gray-800">Confira as instituições que já utilizam o Melhor Escola para captar alunos</p>
                        <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 md:space-x-20 items-center justify-between p-6 md:p-16 gap-5">
                            <Image className="w-2/3 md:w-1/5 h-auto" src="https://www.melhorescola.com.br/themes/site/assets/special-pages/mais-alunos/images/logo-mackenzie.png" alt="mackenzie" />
                            <Image className="w-2/3 md:w-1/6 h-auto" src="https://www.melhorescola.com.br/themes/site/assets/special-pages/mais-alunos/images/logo-cogna.png" alt="cogna" />
                            <Image className="w-2/3 md:w-1/6 h-auto" src="https://www.melhorescola.com.br/themes/site/assets/special-pages/mais-alunos/images/logo-anglo.png" alt="angle" />
                            <Image className="w-2/3 md:w-1/5 h-auto" src="https://www.melhorescola.com.br/themes/site/assets/special-pages/mais-alunos/images/logo-cruzeirodosul.png" alt="cruzeirodo" />
                        </div>
                    </section>
                </div>
            </div> 
            <div className="bg-white flex flex-col w-full h-auto md:h-[850px]">
                <div className="flex px-6 md:px-16 flex-col items-center z-10">
                    <section id="choices" className="pt-10 w-full gap-[2px] top-[100px] md:top-[300px] flex-col items-center"><br /><br />
                        <p className="items-center flex justify-center text-2xl md:text-[42px] text-gray-800 font-extrabold">Transforme você também a captação</p>
                        <p className="items-center flex justify-center text-2xl md:text-[42px] text-gray-800 font-extrabold pb-10 md:pb-20">de alunos do seu colégio!</p>
                        <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 md:space-x-2 justify-between px-6 md:px-36 gap-5">
                            <div className="flex flex-col justify-between space-y-5 border w-full md:w-1/2 rounded-md p-10 bg-white h-auto">
                                <h3 className="font-bold text-xl md:text-2xl text-gray-800">
                                    Teste grátis
                                </h3>
                                <div className="flex flex-col space-y-5">
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Acesso completo à Área do Gestor;
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Vídeoaulas essenciais sobre gestão escolar;
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Dashboard de análise e chat com um especialista em marketing para escolas.
                                    </p>
                                </div>
                                <div className="">
                                    <a href="#" className="text-orange-300 hover:ring-4 ring-slate-400 border hover:ring-orange-400 hover:bg-[#e9b39257] p-3 rounded-full font-semibold text-[14px] md:text-[16px]">Quero me tornar um parceiro</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between space-y-5 border w-full md:w-1/2 rounded-md p-10 bg-white h-auto">
                                <h3 className="font-bold text-xl md:text-2xl text-gray-800">
                                    Captação de alunos
                                </h3>
                                <div className="flex flex-col space-y-5">
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Acesso completo à Área do Gestor;
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Vídeoaulas essenciais sobre gestão escolar;
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Dashboard de análise e chat com um especialista em marketing para escolas.
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Página personalizada com identidade visual do colégio;
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Divulgação nos maiores marketplaces educacionais do Brasil;
                                    </p>
                                    <p className="pl-4 md:pl-16 text-sm md:text-lg text-gray-600">
                                        Captação de alunos ativa com time de vendas especializado.
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-slate-300 hover:ring-4 ring-slate-400 border bg-[#ff7e29] hover:ring-orange-400 hover:bg-[#ff7e29] p-3 rounded-full font-semibold text-[14px] md:text-[16px]"><span>Quero me tornar um parceiro</span></a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-[#13171a] flex w-full h-[100px]"></div>
        </div>
    )
}

export default Dashboard;