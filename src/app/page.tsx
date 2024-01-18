import { getIngredients } from "@/services/apiRequest"
import Image from "next/image"
import Link from "next/link"
import Filter from "./Filter"

const Home = async () => {
  const data = await getIngredients()
  return (
      <div>
        <Filter ingredients={data} />
      </div>
  )
}

export default Home
