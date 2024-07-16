import { TransformingCard } from "@/components/basecomponents/cards";

const Transforming:React.FC = () => {
    return (
        <div className="flex flex-col gap-5 bg-white 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] w-full px-2 py-5">
            <p className="text-2xl font-bold text-gray-800 text-center md:text-left">
                Transforming lives and stories!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <TransformingCard key={1} star={5} text={`"I wanted to take my daughter out of the public school system because the education is terrible, but I could not pay the entire cost of a private school, I got 30% at a school close to my house"`} name="Camila" />
                <TransformingCard key={2} star={5} text={`"My experience has been excellent because my son is receiving quality education at a price I can afford thanks to Best School. Thank you"`} name="Alejandro da Silva" />
                <TransformingCard key={3} star={5} text={`"I spoke to two attendants, they were both very attentive, they answered my questions, reassured me and gave me all the support to make it work"`} name="Luciana Lacerda" />
                <TransformingCard key={4} star={5} text={`"Best School helped me a lot! I got a scholarship for my children and I'm very satisfied with the educational institution"`} name="Lorilei Rodrigues" />
            </div>
        </div>
    )
}

export default Transforming;