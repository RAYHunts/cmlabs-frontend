import { getMealsByIngredient } from "@/services/apiRequest";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MealList from "./MealList";

const Ingredient = async ({ params }: { params: { ingredient: string } }) => {
  const data = await getMealsByIngredient(params.ingredient);

  return (
    <MealList list={data} />
  );
};

export default Ingredient;
