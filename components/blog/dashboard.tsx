'use client';
import { BlogCard, CategoriesCard } from "@/components/basecomponents/cards";

const data = [
    {
        title: "15 atividades para o primeiro dia de aula",
        date: " 19 DE JUNHO DE 2024",
        category: "Ambiente Escolar",
        img: "https://www.melhorescola.com.br/blog/wp-content/uploads/2024/06/primeiro-dia-de-aula3-1-800x533.jpg",
        environment: " O primeiro dia de aula pode ser de muito entusiasmo para os alunos. Um novo ciclo, novos amigos, novos aprendizados. Essa é uma oportunidade única…"
    },
    {
        title: "15 atividades para o primeiro dia de aula",
        category: "Ambiente Escolar",
        date: " 19 DE JUNHO DE 2024",
        img: "https://www.melhorescola.com.br/blog/wp-content/uploads/2024/06/primeiro-dia-de-aula3-1-800x533.jpg",
        environment: " O primeiro dia de aula pode ser de muito entusiasmo para os alunos. Um novo ciclo, novos amigos, novos aprendizados. Essa é uma oportunidade única…"
    },
    {
        title: "15 atividades para o primeiro dia de aula",
        category: "Ambiente Escolar",
        date: " 19 DE JUNHO DE 2024",
        img: "https://www.melhorescola.com.br/blog/wp-content/uploads/2024/06/primeiro-dia-de-aula3-1-800x533.jpg",
        environment: " O primeiro dia de aula pode ser de muito entusiasmo para os alunos. Um novo ciclo, novos amigos, novos aprendizados. Essa é uma oportunidade única…"
    },
];

const categories = [
    "Ambiente Escolar",
    "Captação de alunos",
    "Curiosidades",
    "Direito Escolar",
    "Ensino a distância",
    "Família e escola",
    "Gestão e finanças",
    "Marketing Escolar",
    "Notícias",
    "Papo com o especialista",
    "Tecnologia",
    "Universo pedagógico",
]

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col xl:flex-row justify-between gap-10 p-3 md:px-36">
                <div className="flex flex-col justify-center w-full py-8 space-y-10 2xl:gap-10 md:pr-28 md:border-r">
                    <div className=" space-y-10">
                        {
                            data.map((result: any, index: number) =>
                                <BlogCard key={index} category={result.category} title={result.title} date={result.date} img={result.img} env={result.environment} />
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col pt-8 md:pt-0 md:pl-10 space-y-5 items-start">
                    <CategoriesCard name={categories} />
                </div>
            </div>
        </>
    )
}

export default Dashboard;