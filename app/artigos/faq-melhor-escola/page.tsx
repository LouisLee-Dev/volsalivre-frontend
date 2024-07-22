import Dashboard from "@/components/artigos//faq-bolsa-escola/page";
import Header from "@/components/artigos/header/page";
import Footer from "@/components/artigos/footer/page";
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
