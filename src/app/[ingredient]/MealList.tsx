"use client";

import { Input } from "@/components/ui/input";
import { Meal } from "@/types/response";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const MealList = ({ list }: { list: Meal[] }) => {
  const [query, setQuery] = useState("");
  const filteredIngredients = useMemo(() => {
    return list.filter((item) => item.strMeal.toLowerCase().includes(query.toLowerCase()));
  }, [query, list]);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    gap-4 place-items-center"
      >
        {filteredIngredients.map((item) => (
          <Link key={item.idMeal} className="block aspect-square bg-indigo-900 w-60 rounded-sm overflow-hidden relative group" href={`/meal/${item.idMeal}`}>
            <Image src={item.strMealThumb} alt={item.strMeal} className="w-full h-full object-cover  group-hover:scale-125 group-hover:opacity-45 transition-transform ease-in duration-300" width={240} height={240} />
            <div className="absolute bottom-0 bg-indigo-950 py-4 flex items-center justify-center translate-y-full w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in duration-300">
              <p className="text-center text-slate-100">{item.strMeal}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MealList;