import Dashboard from "@/components/maisAlunos/dashboard/page";
import Header from "@/components/maisAlunos/header/page";
import Footer from "@/components/maisAlunos/footer/page";
import "@/app/globals.css";

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
