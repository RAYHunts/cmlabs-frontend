"use client";

import { Input } from "@/components/ui/input";
import { Ingredient } from "@/types/response";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type FilterProps = {
  ingredients: Ingredient[];
};
const Filter = ({ ingredients }: FilterProps) => {
  const [query, setQuery] = useState("");

  const filteredIngredients = useMemo(() => {
    return ingredients.filter((item) => item.strIngredient.toLowerCase().includes(query.toLowerCase()));
  }, [query, ingredients]);

  return (
    <div>
      <div className="mb-4">
        <Input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
        {filteredIngredients.map((item) => (
          <Link href={`/${item.strIngredient}`} key={item.idIngredient} className="flex flex-col items-center justify-center aspect-square w-60 bg-indigo-200 rounded-sm hover:bg-indigo-400 overflow-visible">
            <Image
              src={`https://www.themealdb.com/images/ingredients/${item.strIngredient}.png`}
              alt={item.strIngredient}
              className="w-full h-full transition-transform hover:rotate-12 object-cover hover:scale-125"
              width={240}
              height={240}
            />
            <span>{item.strIngredient}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
