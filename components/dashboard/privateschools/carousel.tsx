"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { PrivateSchoolCard } from "../../basecomponents/cards";

let PrivateSchools = [
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230323142359118.png",
    star: 5,
    title: "Intergenius College",
    at: "Joinville - SC",
    position: "Juliao Ramos",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20231109205606993.png",
    star: 5,
    title: "Djanira Tavares College",
    at: "Joinville - SC",
    position: "cruise",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20220111181534748.jpg",
    star: 5,
    title: "Colegio Rumo Initial",
    at: "Joinville - SC",
    position: "Sao, Joao Climaco",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230612201001704.png",
    star: 5,
    title: "Filomena De Marco College",
    at: "Joinville - SC",
    position: "Guarani Park",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20191126021330631.png",
    star: 4,
    title: "Caragua Goal",
    at: "Joinville - SC",
    position: "Sumare",
    scholarUnit: "BRL",
    amount: "306.57",
  },
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20221027192739266.jpg",
    star: 4,
    title: "Colegio Objective Hortolandia",
    at: "Joinville - SC",
    position: "Remanso Campineiro",
    scholarUnit: "BRL",
    amount: "306.57",
  },
];
interface Level {
  _id: string;
  level: string;
  grade: string;
}

interface School {
  years: string[];
  shift: string[];
  date: string;
  _id: string;
  title: string;
  mark: string;
  star: string;
  level: Level[];
  position: string;
  at: string;
  type: string;
  __v: number;
}
interface privateSchoolsDataProps {
  privateSchoolsData: Object;
}

const CarouselComponent: React.FC<privateSchoolsDataProps> = ({
  privateSchoolsData,
}) => {
  const schoolsData =
    privateSchoolsData && typeof privateSchoolsData === "object"
      ? Object.values(privateSchoolsData)
      : [];
  const slide = schoolsData.map((school: any, index: number) => (
    <SwiperSlide
      key={index}
    >
      <PrivateSchoolCard
        key={index}
        star={school.star}
        mark={school.mark}
        title={school.title}
        at={school.at}
        position={school.position}
        scholarUnit={school.scholarUnit}
        amount={school.amount}
      />
    </SwiperSlide>
  ));
  return (
    <div className="flex justify-center lg:p-[10px]">
      <Swiper
        slidesPerView={1} // Initially show 1 slide on small screens
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for screens >= 640px
          },
          768: {
            slidesPerView: 3, // 3 slides for screens >= 768px
          },
          1024: {
            slidesPerView: 4, // 4 slides for screens >= 1024px
          },
        }}>
        {schoolsData.map((school: any, index: number) => (
          <SwiperSlide
            key={index}
          >
            <PrivateSchoolCard
              key={index}
              star={school.star}
              mark={school.mark}
              title={school.title}
              at={school.at}
              position={school.position}
              scholarUnit={school.scholarUnit}
              amount={school.amount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
