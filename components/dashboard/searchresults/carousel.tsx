"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { PrivateSchoolCard } from "../../basecomponents/cards";

const PrivateSchools = [{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
  star: 1,
  title: "Santo Antonio College",
  at: "Joinville - SC",
  position: "Iririu",
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

}];

const CarouselComponent: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center p-[10px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {PrivateSchools.map((school: any, index: number) => (
            <SwiperSlide key={index}>
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
    </div>
  );
};

export default CarouselComponent;
