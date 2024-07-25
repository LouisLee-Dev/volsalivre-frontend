import "@/app/globals.css";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("@/components/header/page"), { ssr: false});
import Footer from "@/components/footer/page";
const Dashboard = dynamic(() => import("@/components/escola/dashboard"), { ssr: false});

export default function Busca() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
