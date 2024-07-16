import Dashboard from "@/components/blog/dashboard";
import Header from "@/components/blog/header";
import Footer from "@/components/blog/footer";
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
