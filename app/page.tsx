'use client';
import { Suspense } from "react";
import Dashboard from "@/components/dashboard/page";
const Header = dynamic(()=> import("@/components/header/page"), { ssr: false});
import Footer from "@/components/footer/page";
import "@/app/globals.css";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <Suspense>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Dashboard />
      </main>
      <Footer />
    </Suspense>
  );
}
