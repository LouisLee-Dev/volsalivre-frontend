'use client';

import Dashboard from "@/components/artigos//faq-bolsa-escola/page";
const Header = dynamic(()=> import("@/components/header/page"), { ssr: false});
import Footer from "@/components/artigos/footer/page";
import "@/app/globals.css";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}
