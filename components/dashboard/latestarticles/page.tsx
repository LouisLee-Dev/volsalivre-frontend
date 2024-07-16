import { LatestArticleCard } from "@/components/basecomponents/cards";

const LatestArticles: React.FC = () => {
  return (
    <div className="lg:flex flex-col lg:gap-5 lg:justify-between bg-white 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] w-full px-2">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">Check out our latest articles</p>
        <a href="#" className="text-purple-600 underline">
          Go to message
        </a>
      </div>
      <div className="flex lg:justify-between">
        <LatestArticleCard
        key={1}
          img="https://img.imageboss.me/me/width/236/format:webp/20200616224333811.png"
          title="How to get a scolarship in the Melhor Escola program?"
          text="Finding the idal school for your children is every family's desire.
                However, this dream often comes up against an important issue for thousands of guardians: the value of school fees. With the aim of..."
        />
        <LatestArticleCard
        key={2}
        img="https://img.imageboss.me/me/width/236/format:webp/20240614135133843.jpg"
        title="What is the best school in the world: discover the 4...."
        text="An award created by the global organization T4 Education, with suport from the Lemann Foundation, Accenture and Amercian Express, selected for Brazilian public schools to be...."
        />
        <LatestArticleCard
        key={3}
        img="https://img.imageboss.me/me/width/236/format:webp/20240613145947781.jpg"
        title="How to have quality time with your children"
        text="We are in an era where time always seems to be shorter and scarce, right? Therefore, the idea of quality time with children becomes increasingly relevant. Findout more: + Find scholarships for basi....."
        />
        <LatestArticleCard
        key={3}
        img="https://img.imageboss.me/me/width/236/format:webp/20240613140258542.jpg"
        title="The 15 best films for 5 year olds"
        text="There is no doubt that films- expecially animation - are part of our lives. However, there are those that mark generations, that we remember for a long time, even in about life. Find out more: + Find...."
        />
      </div>
    </div>
  );
};

export default LatestArticles;
