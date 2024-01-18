import { getMealsByIngredient } from "@/services/apiRequest";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const Ingredient = async ({ params }: { params: { ingredient: string } }) => {
  const data = await getMealsByIngredient(params.ingredient);
  if (data === null) {
    return (
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <p className="text-2xl">No meals found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    gap-4 place-items-center">
      {data.map((item) => (
        <Link key={item.idMeal} className="block aspect-square bg-indigo-900 w-60 rounded-sm overflow-hidden relative group" href={`/meal/${item.idMeal}`}>
          <Image src={item.strMealThumb} alt={item.strMeal} className="w-full h-full object-cover  group-hover:scale-125 group-hover:opacity-45 transition-transform ease-in duration-300" width={240} height={240} />
          <div className="absolute bottom-0 bg-indigo-950 py-4 flex items-center justify-center translate-y-full w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in duration-300">
            <p className="text-center text-slate-100">{item.strMeal}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ingredient;
