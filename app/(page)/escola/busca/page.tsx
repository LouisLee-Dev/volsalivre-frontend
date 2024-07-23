import "@/app/globals.css";
const Header = dynamic(()=> import("@/components/header/page"), { ssr: false});
import Footer from "@/components/footer/page";
import Dashboard from "@/components/escola/dashboard";
import dynamic from "next/dynamic";

export default function Busca() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
