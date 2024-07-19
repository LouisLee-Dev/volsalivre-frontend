import "@/app/globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Dashboard from "@/components/escola/dashboard";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
