import Link from "next/link";
import Filters from "@/components/basecomponents/filters";
import { SearchResultCard } from "@/components/basecomponents/cards";
import "@/app/globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Dashboard from "@/components/escola/dashboard";

let SearchResults = [
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    amount: "306.57",
    period: "Early Childhood Education - Nursery (0 to 1 year old)",
    schoolYear: [2024, 2025],
    shift: ["full", "morning"],
    originUnit: "R$",
    originPrice: 1000,
    presentUnit: "BRL",
    presentPrice: 500,
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    amount: "306.57",
    period: "Early Childhood Education - Nursery (0 to 1 year old)",
    schoolYear: [2024, 2025],
    shift: ["full", "morning"],
    originUnit: "R$",
    originPrice: 1000,
    presentUnit: "BRL",
    presentPrice: 500,
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    amount: "306.57",
    period: "Early Childhood Education - Nursery (0 to 1 year old)",
    schoolYear: [2024, 2025],
    shift: ["full", "morning"],
    originUnit: "R$",
    originPrice: 1000,
    presentUnit: "BRL",
    presentPrice: 500,
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    amount: "306.57",
    period: "Early Childhood Education - Nursery (0 to 1 year old)",
    schoolYear: [2024, 2025],
    shift: ["full", "morning"],
    originUnit: "R$",
    originPrice: 1000,
    presentUnit: "BRL",
    presentPrice: 500,
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    amount: "306.57",
    period: "Early Childhood Education - Nursery (0 to 1 year old)",
    schoolYear: [2024, 2025],
    shift: ["full", "morning"],
    originUnit: "R$",
    originPrice: 1000,
    presentUnit: "BRL",
    presentPrice: 500,
  },
];

export default function RootLayout() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
