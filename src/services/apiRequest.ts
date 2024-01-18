import { Ingredient, Meal, MealDetails } from "@/types/response"
import axios from "axios"

export const getIngredients = async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    return response.data.meals as Ingredient[]
}

export const getMealsByIngredient = async (ingredient: string) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    return response.data.meals as Meal[]
}

export const getMealbyMealId = async (mealId: string) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    return response.data.meals[0] as MealDetails
}