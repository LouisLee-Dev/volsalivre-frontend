"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { PopularSchoolCard } from "../../basecomponents/cards";

let popularmarks = [{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20221027192739266.jpg",
}];

const CarouselComponent: React.FC = () => {
  return (
    <div className="flex justify-center p-[10px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{ clickable: true }}
      >
        {popularmarks.map((school: any, index: number) => (
          <SwiperSlide key={index}>
            <PopularSchoolCard
              key={index}
              mark={school.mark}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
