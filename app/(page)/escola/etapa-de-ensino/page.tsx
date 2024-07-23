// import Link from "next/link";
// import Filters from "@/components/basecomponents/filters";
import { PrivateSchoolCard } from "@/components/basecomponents/cards";
import "@/app/globals.css";
const Header = dynamic(()=> import("@/components/header/page"), { ssr: false});
import Footer from "@/components/footer/page";
import dynamic from "next/dynamic";

const PopularSchools = [
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230323142359118.png",
    star: 5,
    title: "Intergenius College",
    at: "Joinville - SC",
    position: "Juliao Ramos",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20231109205606993.png",
    star: 5,
    title: "Djanira Tavares College",
    at: "Joinville - SC",
    position: "cruise",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20220111181534748.jpg",
    star: 5,
    title: "Colegio Rumo Initial",
    at: "Joinville - SC",
    position: "Sao, Joao Climaco",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230612201001704.png",
    star: 5,
    title: "Filomena De Marco College",
    at: "Joinville - SC",
    position: "Guarani Park",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20191126021330631.png",
    star: 4,
    title: "Caragua Goal",
    at: "Joinville - SC",
    position: "Sumare",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20221027192739266.jpg",
    star: 4,
    title: "Colegio Objective Hortolandia",
    at: "Joinville - SC",
    position: "Remanso Campineiro",
    scholarUnit: "BRL",
    amount: "306.57",
  },
];

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="flex bg-slate-100 flex-col">
        <div className="flex flex-col space-y-5 h-auto items-center bg-[url('https://img.imageboss.me/me/width/768/dpr:2/banners/banner-xplp-mobile-melhor-escola.webp')] bg-cover bg-center">
          <div className="flex gap-3 items-center xl:w-[80vw] lg:w-[90vw] max-w-screen-xl px-3 pt-3">
            <a href="/" className="text-white">
              Home page
            </a>
            <span className="pt-2 text-white text-md">{`/`} School</span>
          </div>
          <div className="flex pt-5 gap-3 items-center max-w-screen-xl px-3 xl:w-[80vw] lg:w-[90vw]">
            <h1 className="text-4xl font-semibold text-white">High Schools</h1>
          </div>
          <div className="flex gap-3 items-center max-w-screen-xl px-3 xl:w-[80vw] lg:w-[90vw]">
            <p className="text-lg  text-white">
              Find the best private high schools! Secure your scholarship with a
              monthly <br />
              fee starting at R$85.00!
            </p>
          </div>
          <div className="flex gap-3 justify-start items-start xl:w-[80vw] lg:w-[90vw] px-3 py-5">
            <div className="flex relative items-center space-x-5 pt-1 ">
              <input
                type="text"
                placeholder="Enter your neighborhood"
                className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="button"
                value="View schools"
                className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-double focus:ring-4 focus:ring-purple-500 font-medium rounded-full text-sm px-10 py-3 me-2 mb-2 dark:focus:ring-yellow-900"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-slate-100 py-5 space-y-6 items-center">
          <div className="pt-0 flex gap-5 xl:w-[80vw] lg:w-[90vw] px-3 pb-5">
            {/* <div className="max-[1200px]:hidden">
              <Filters type="education" setSearchParam={()=>{}} />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              {PopularSchools.map((school: any, index: number) => (
                <div
                  key={index}
                  className="bg-white max-w-sm p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <PrivateSchoolCard
                    key={index}
                    star={school.star}
                    mark={school.mark}
                    title={school.title}
                    at={school.at}
                    position={school.position}
                    scholarUnit={school.scholarUnit}
                    amount={school.amount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
