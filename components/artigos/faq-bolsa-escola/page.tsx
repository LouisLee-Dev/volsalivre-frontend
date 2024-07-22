'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TitleDetail: React.FC = () => {

    return (
        <div className="flex flex-col items-center gap-5 py-5">
            <div className="flex gap-5 xl:w-[80%] w-[90%] items-center">
                <Link href="/"><span className="text-orange-600">Bolsalivre</span></Link>
                <span>/</span>
                <Link href="/artigos"><span className="text-slate-600">Artigos</span></Link>
                <span>/</span>
                <span className="text-slate-600">Faq Bolsa Livre</span>
            </div>
            <div className="flex w-full lg:h-64 md:h-36 h-40 justify-center items-center" style={{ backgroundImage: "url('https://img.imageboss.me/me/cdn/quality:50/20200106220932632.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
                <span className="font-bold text-5xl shadow-2xl text-white">FAQ BOLSA LIVRE</span>
            </div>
            <div className="flex flex-col xl:w-[80%] gap-5">
                <span className="font-bold text-2xl text-slate-500 px-5">
                    Listamos e respondemos as duvidas mais comuns sobre as bolsas do Melhor Escola
                </span>
                <div>
                    <div className="flex flex-col gap-5 lg:w-[30%] float-right w-[100%] px-5">
                        <div className="flex flex-col bg-slate-200 gap-5 p-5 rounded-lg">
                            <span className="text-lg font-semibold text-center">
                                Receba dicas e conteudos exclusivos para a educacao do seu filho.
                            </span>
                            <input type="text" className="rounded-full border text-xl px-5 py-2 border-slate-200 focus:ring-blue-300 focus:outline-none" placeholder="Seu nome" />
                            <input type="text" className="rounded-full border text-xl px-5 py-2 border-slate-200 focus:ring-blue-300 focus:outline-none" placeholder="Seu e-mail" />
                            <input type="text" className="rounded-full border text-xl px-5 py-2 border-slate-200 focus:ring-blue-300 focus:outline-none" placeholder="Seu telefone" />
                            <button className="rounded-full bg-orange-500 text-white text-xl px-5 py-2">Inscreva-se</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[70%] w-[100%] px-5">
                        <p className="text-xl my-2">
                            <span className="font-semibold">1. Como faço para conseguir uma bolsa?</span><p>
                                <p>
                                    O programa de bolsa do Melhor Escola disponibiliza vagas com até 80% de desconto nas mensalidades (há alguns poucos casos que o desconto é maior). Para garantir a bolsa de estudo, os pais devem escolher a escola mais adequada e pagar a pré-matrícula no site (no valor da primeira mensalidade ou da matrícula mais a taxa de serviço). Ao fazer isso, a bolsa está garantida.
                                </p>
                            </p>
                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">2. Posso conseguir uma bolsa com 100% de desconto?</span><p>
                                <p>No programa de bolsas do Melhor Escola, os colégios disponibilizam descontos para preencher as vagas ociosas e, com isso, aumentar a receita e ajudar os alunos que não teriam disponibilidade financeira de pagar a mensalidade inteira. Porém, é possível que algumas escolas disponibilizem bolsas de 100% pelo site, mas são raras exceções. Na maior parte dos casos as bolsas são parciais e disponibilizadas no portal em troca de divulgação.</p>
                            </p>
                            <p className="text-xl my-2">
                                <span className="font-semibold">3. Por que as bolsas não valem para os alunos que já estudam na escola?

                                </span><p>O Melhor Escola é um site criado para ajudar os pais e os alunos na busca e na escolha de uma escola de qualidade. Por isso, as bolsas de estudo são destinadas a famílias que estão buscando uma escola no momento e que não podem pagar pelas mensalidades cheias. Então os descontos são válidos apenas para os novos alunos e não para quem já está ou estava matriculado na escola, pois esses já se comprometeram a pagar o valor integral das mensalidades.
                                </p>

                            </p>
                            <p className="text-xl my-2">
                                <span className="font-semibold">4. É necessário fazer alguma prova para obter a bolsa?

                                </span>Não. Algumas escolas parceiras, porém, possuem processo seletivo para a matrícula do aluno. Nesses casos, se houver a reprovação do aluno no processo seletivo, o valor pago na pré-matrícula é devolvido pelo <span className="font-semibold">Melhor Escola</span>, descontado taxas bancárias e de impressão, se houver.

                            </p>
                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">5. A bolsa se mantém durante todo o ano letivo?

                            </span><p>A bolsa fica ativa durante toda a etapa de ensino do aluno ou por 2 anos em casos de início no último ano da etapa.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">6. A bolsa é válida por quanto tempo?

                            </span><p>Temos um acordo realizado com as escolas segundo o qual elas se comprometem a manter o desconto até o final da etapa de ensino da vaga. As etapas de ensino são: Ensino Infantil, Ensino Fundamental 1, Ensino Fundamental 2 e Ensino Médio.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">7. O que eu devo fazer após pagar o boleto?

                            </span><p>O comprovante de reserva será enviado no seu e-mail. Caso ele não esteja na caixa de entrada, verifique também a caixa de spam.

                                Porém, se ele não estiver em nenhuma das duas alternativas, no seu login em ‘’minhas bolsas’’ terá um comprovante de reserva, contendo os dados da bolsa.
                                Com o comprovante em mãos, você deve levá-lo impresso, no prazo de até 7 dias corridos, na escola para realizar a matrícula.
                                No caso de pagamento via cartão de crédito, o comprovante fica disponível em alguns minutos; no caso de pagamento via boleto, o prazo é de um dia útil.
                                A própria escola informará quais são os documentos que deverão ser entregues para realizar a matrícula.

                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">8.  O que está sendo pago para o Melhor Escola?

                            </span><p>Os pais pagam a pré-matrícula para o Melhor Escola (no valor da primeira mensalidade ou da matrícula com desconto) e uma taxa de serviço. Dessa maneira, os responsáveis remuneram o site pelo serviço prestado, garantindo a reserva da bolsa de estudo. Além disso, anualmente, no início de cada ano letivo será necessário efetuar o pagamento de uma taxa para o Melhor Escola no mesmo valor pago para reservar a bolsa. Dessa forma, o desconto é renovado para o ano seguinte.

                                Como o valor pago como pré-matrícula isenta o beneficiado (na maior parte dos casos) de fazer o pagamento da matrícula (ou da primeira mensalidade) para a escola, a instituição também remunera o site pela captação do aluno e o custo para os responsáveis acaba sendo apenas a taxa de serviço.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">9. Gerei um boleto, mas o valor veio maior, por quê?

                            </span><p>Trata-se de uma taxa para remunerar o site pelo serviço prestado. Com esse pagamento você garante que a bolsa de estudos seja aplicada em todas as demais mensalidades (durante o término do ciclo de ensino ou durante 2 anos) e também ajuda a remunerar o site pelo serviço prestado.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">10. Tenho que pagar mais alguma taxa?

                            </span><p>Anualmente, no início de cada ano letivo será necessário efetuar o pagamento de uma taxa para o Melhor Escola no mesmo valor pago para reservar a bolsa. Dessa forma, o desconto é renovado para o ano seguinte.

                                Além disso, o valor pago como pré-matrícula isenta o beneficiado de fazer o pagamento da matrícula ou da primeira mensalidade para a escola. Exceto escolas que o pagamento é somente a taxa de reserva da bolsa.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">11. O que será pago para a escola?

                            </span><p>A matrícula (se houver) e as mensalidades com o desconto são pagas para a escola.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">12. É possível conseguir um desconto maior do que o oferecido pelo site?

                            </span><p>Os descontos disponíveis são os apresentados na página de bolsas do colégio dentro do Melhor Escola. Caso o responsável não encontre a bolsa desejada no portal, é possível buscar pelo desconto em outra escola no próprio site. Além disso, se você quiser descontos em alguma escola que ainda não é parceira do Melhor Escola, você pode registrar interesse para ter prioridade quando a escola disponibilizar descontos no site. Dessa forma, você receberá novidades e ofertas em primeira mão caso a escola desejada venha a se tornar parceria.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">13. Ao pagar a taxa, a bolsa está garantida?

                            </span><p>Sim. Após pagar a taxa de pré-matrícula, a bolsa está garantida. Algumas escolas, porém, fazem um processo de admissão para os seus novos alunos. Nesses casos, é necessário ser aprovado para ter a matrícula efetuada
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">14. Se eu desistir, vocês devolvem o valor pago?

                            </span><p>Sim. Caso os responsáveis desistam da matrícula ou não consigam realizá-la por falta de aprovação no processo de admissão da escola, o Melhor Escola devolve integralmente o valor pago para reservar a vaga (descontados os custos do boleto e da transferência bancária, se houver) mediante a solicitação.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">15. Como solicito meu reembolso?

                            </span><p>Para solicitar o reembolso basta entrar em contato com o número 08009419002 em até 7 (sete) dias corridos do pagamento e falar com o nosso time de atendimento. Lá, eles irão orientar o passo a passo de como será realizada a devolução.
                            </p>


                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">16. A alimentação está inclusa na mensalidade?

                            </span><p>Os descontos valem para a matrícula e para as mensalidades. Caso a escola cobre alimentação à parte, essa despesa deve ser paga separadamente. Algumas escolas cobram alimentação à parte e outras não. Essa informação deve ser verificada com o colégio.
                            </p>
                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">17. O material escolar e o uniforme devem ser vistos direto com a escola?

                            </span><p>Sim. Esses itens não são contemplados na bolsa do Melhor Escola.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">18. Liguei na escola e eles não sabem explicar sobre as bolsas. O que eu devo fazer?

                            </span><p>As bolsas oferecidas pelo Melhor Escola são o resultado de uma parceria entre o portal e a escola. Em alguns casos, o atendente pode não ter sido informado pela comunicação interna do colégio sobre essa parceria. Se isso ocorrer, entre em contato conosco para que possamos garantir a sua bolsa de estudo.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">19. Quais as formas de pagamento?
                            </span><p>A taxa de reserva de bolsa pode ser paga via boleto bancário ou no cartão, podendo ser divida em até 10 vezes sem juros no cartão.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            <span className="font-semibold">20. Como funciona a parceria com as escolas?
                            </span><p>Todas as bolsas publicadas no site são acordadas e fornecidas pela própria instituição de ensino, que se compromete a manter o desconto durante toda a etapa de ensino ou pelo menos dois (02) anos.  O percentual de desconto varia de acordo com a vaga e escola. Caso o percentual seja inferior ao desejado, o pai poderá buscar o valor ideal em outra escola.
                            </p>

                        </p>
                        <p className="text-xl my-2">
                            Para ver o passo a passo de como conseguir uma bolsa de estudos pelo site Melhor Escola


                        </p>
                        <p className="text-xl my-2">
                            Precisa de ajuda para escolher a melhor escola para o seu filho e conseguir uma bolsa de até 80%? Clique aqui para falar com um especialista.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleDetail;