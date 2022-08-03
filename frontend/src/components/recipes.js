import { useState, useEffect } from "react";
import { FetchRecipes } from "../services/fetchRecipes";

export const Recipes = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchRecipes();
      setData(result);
    }
    fetchData()
  }, []);
  
  return(
    <ul>
      { data.map(recipe => (<li key={recipe.id}>Name: {recipe.name}</li>))}
    </ul>
  )
}

export default Recipes;