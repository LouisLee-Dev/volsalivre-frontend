import Dashboard from "@/components/meus-dados/dashboard";
import Header from "@/components/artigos/header/page";
import Footer from "@/components/artigos/footer/page";
import "@/app/globals.css";

const Home = (title:any) => {
  
  const decode_title = decodeURIComponent(title.params.menu);
  
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Dashboard title_url = {decode_title} />
      </main>
      <Footer />
    </>
  );
}

export default Home;