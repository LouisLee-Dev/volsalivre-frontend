import "@/app/globals.css";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("@/components/header/page"), { ssr: false});
import Footer from "@/components/footer/page";
import Dashboard from "@/components/escola/dashboard";

export default function Busca(param: any) {  
  return (
    <>
      <Header />
      <Dashboard param={decodeURIComponent(param.params.params)} />
      <Footer />
    </>
  );
}
