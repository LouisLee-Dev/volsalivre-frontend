import Dashboard from "@/components/dashboard/page";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
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
