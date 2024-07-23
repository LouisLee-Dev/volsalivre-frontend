'use client';

import Carousel from "@/components/dashboard/privateschools/carousel";
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
interface PrivateSchoolsProps {
  privateSchoolsData: Object
}

const PrivateSchools: React.FC<PrivateSchoolsProps> = ({ privateSchoolsData }) => {
  return (
    <div className="w-full bg-slate-100 flex justify-around">
      <div className="flex flex-col gap-5 bg-slate-100 p-4 lg:p-10 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] w-full">
        <p className="text-xl lg:text-2xl font-bold text-gray-900">Private schools with scholarships</p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <p className="text-slate-700 text-center lg:text-left">Showing { } close to <a href="#" className="text-blue-500 hover:text-blue-700 ml-1">Sao Paulo-SP</a></p>
          <a href="/escola/busca" className="text-blue-500 underline hover:text-blue-700 mt-2 lg:mt-0">See all scholarships</a>
        </div>
        {/* <div className="w-full"> */}
          <Carousel privateSchoolsData={privateSchoolsData} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default PrivateSchools;