/* eslint-disable no-empty-pattern */
interface OtherSchoolsProps { }

const SearchResults: React.FC<OtherSchoolsProps> = ({ }) => {
  return (
    <div className="flex flex-col gap-5 bg-slate-100 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] p-10">
      <p className="text-2xl font-bold text-gray-900">Private schools with scholarships</p>
      <div className="flex justify-between">
        <p className="text-slate-700">Showing { } close to <a href="#" className="text-blue-500 hover:text-blue-700">Sao Paulo-SP</a></p>
        <a href="/escola/busca" className="text-blue-500 underline hover:text-blue-700">See all schools</a>
      </div>
      {/* <Carousel  /> */}
    </div>
  );
};

export default SearchResults;