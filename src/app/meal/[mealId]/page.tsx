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
          {/* {Object.keys(data).map((key) => {
            if (key.includes("strIngredient") && data[key]) {
              return (
                <li key={key}>
                  {data[key]} - {data[`strMeasure${key.slice(13)}`]}
                </li>
              );
            }
          }
          )} */}
          {data.strMeasure1 && <li>{data.strMeasure1} - {data.strIngredient1}</li>}
          {data.strMeasure2 && <li>{data.strMeasure2} - {data.strIngredient2}</li>}
          {data.strMeasure3 && <li>{data.strMeasure3} - {data.strIngredient3}</li>}
          {data.strMeasure4 && <li>{data.strMeasure4} - {data.strIngredient4}</li>}
          {data.strMeasure5 && <li>{data.strMeasure5} - {data.strIngredient5}</li>}
          {data.strMeasure6 && <li>{data.strMeasure6} - {data.strIngredient6}</li>}
          {data.strMeasure7 && <li>{data.strMeasure7} - {data.strIngredient7}</li>}
          {data.strMeasure8 && <li>{data.strMeasure8} - {data.strIngredient8}</li>}
          {data.strMeasure9 && <li>{data.strMeasure9} - {data.strIngredient9}</li>}
          {data.strMeasure10 && <li>{data.strMeasure10} - {data.strIngredient10}</li>}
          {data.strMeasure11 && <li>{data.strMeasure11} - {data.strIngredient11}</li>}
          {data.strMeasure12 && <li>{data.strMeasure12} - {data.strIngredient12}</li>}
          {data.strMeasure13 && <li>{data.strMeasure13} - {data.strIngredient13}</li>}
          {data.strMeasure14 && <li>{data.strMeasure14} - {data.strIngredient14}</li>}
          {data.strMeasure15 && <li>{data.strMeasure15} - {data.strIngredient15}</li>}
          {data.strMeasure16 && <li>{data.strMeasure16} - {data.strIngredient16}</li>}
          {data.strMeasure17 && <li>{data.strMeasure17} - {data.strIngredient17}</li>}
          {data.strMeasure18 && <li>{data.strMeasure18} - {data.strIngredient18}</li>}
          {data.strMeasure19 && <li>{data.strMeasure19} - {data.strIngredient19}</li>}
          {data.strMeasure20 && <li>{data.strMeasure20} - {data.strIngredient20}</li>}
          
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
