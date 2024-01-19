import { getMealbyMealId } from "@/services/apiRequest";
import Image from "next/image";
import YTContainer from "./components/YTContainer";

const DetailMealPage = async ({ params }: { params: { mealId: string } }) => {
  const data = await getMealbyMealId(params.mealId);
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between gap-4 flex-wrap">
        <div className="w-60 h-60 rounded-sm overflow-hidden flex-shrink-0">
          <Image src={data.strMealThumb} alt={data.idMeal} className="w-full h-full object-cover" width={240} height={240} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            {data.strMeal} ({data.strCategory})
          </h2>
          <p className="text-lg text-gray-600">
            {data.strArea} - {data.strTags}
          </p>
          <article className="mt-4">
            <h3 className="text-xl font-semibold">Instructions</h3>
            <p className="text-base">{data.strInstructions}</p>
          </article>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Ingredients</h3>
        <ul className="mt-4 list-disc list-inside">
          {Object.keys(data).map((key) => {
            if (key.includes("strIngredient") && data[key]) {
              return (
                <li key={key}>
                  {data[key]} - {data[`strMeasure${key.slice(13)}`]}
                </li>
              );
            }
          }
          )}
        </ul>
      </div>
      <div>
        <p className="mb-4 text-xl font-semibold">
          Tutorial
        </p>
      <YTContainer youtubeLink={data.strYoutube}  />
      </div>
    </div>
  );
};
export default DetailMealPage;
