import { getMealbyMealId } from "@/services/apiRequest";
import Image from "next/image";
import YTContainer from "./components/YTContainer";

const DetailMealPage = async ({ params }: { params: { mealId: string } }) => {
  const data = await getMealbyMealId(params.mealId);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="w-60 h-60 rounded-sm overflow-hidden">
          <Image src={data.strMealThumb} alt={data.idMeal} className="w-full h-full object-cover" width={240} height={240} />
        </div>
        <p className="text-3xl">{data.strMeal}</p>
      </div>

      <YTContainer youtubeLink={data.strYoutube} />
    </div>
  );
};
export default DetailMealPage;
