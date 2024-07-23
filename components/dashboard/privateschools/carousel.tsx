"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { PrivateSchoolCard } from "../../basecomponents/cards";

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
  // eslint-disable-next-line @typescript-eslint/ban-types
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
