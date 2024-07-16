import Carousel from "@/components/dashboard/popularschools/carousel";

interface PopularSchoolsProps {}

const Popularmarks: React.FC<PopularSchoolsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-5 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] py-10">
      <p className="text-2xl font-bold text-gray-900">Most popular schools in Brazil</p>
      <Carousel />
    </div>
  );
};

export default Popularmarks;