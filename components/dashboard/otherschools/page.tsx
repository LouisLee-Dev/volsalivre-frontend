"use client";

import Carousel from "@/components/dashboard/otherschools/carousel";

interface OtherSchoolsProps {}

const OtherSchools: React.FC<OtherSchoolsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-5 justify-around bg-purple-300 shadow-lg shadow-purple-700 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] w-full p-10 rounded-2xl">
      <p className="text-2xl font-bold text-gray-800 text-center md:text-left">Other schools near you</p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-700 text-center md:text-left">Showing {} near Greater London</p>
        <a href="/escola/busca" className="text-blue-500 underline hover:text-blue-700 mt-2 md:mt-0">See all schools</a>        
      </div>
        <Carousel />
    </div>
  );
};

export default OtherSchools;