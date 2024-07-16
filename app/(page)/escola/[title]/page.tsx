'use client';

import Detail from "@/components/dashboard/detail";
import "@/app/globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const escolaDetail = (title: any) => {
    
    const decode_title = decodeURIComponent(title.params.title);
    
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col bg-[#f6f7f8]">
                <Detail title = {decode_title} />
            </main>
            <Footer />
        </>
    )
}

export default escolaDetail;